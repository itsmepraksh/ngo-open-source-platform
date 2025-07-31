// Firebase Configuration and Database Management
// This file handles all Firebase operations for the Lavanya Foundation website

class FirebaseManager {
    constructor() {
        this.db = null;
        this.isConnected = false;
        this.useLocalStorage = true; // Fallback to localStorage if Firebase fails
        this.init();
    }

    // Initialize Firebase
    init() {
        try {
            // Your Firebase configuration
            const firebaseConfig = {
                apiKey: "AIzaSyC12uanKqD49HeITGWzPZJPg7NUv4DBKuE",
                authDomain: "lavanya-foundation.firebaseapp.com",
                databaseURL: "https://lavanya-foundation-default-rtdb.asia-southeast1.firebasedatabase.app",
                projectId: "lavanya-foundation",
                storageBucket: "lavanya-foundation.firebasestorage.app",
                messagingSenderId: "705635414980",
                appId: "1:705635414980:web:ec4870cd1e012e1418ea91",
                measurementId: "G-2FGZ3M7Y0H"
            };

            // Check if Firebase is available
            if (typeof firebase === 'undefined') {
                throw new Error('Firebase SDK not loaded');
            }

            // Initialize Firebase only if not already initialized
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            
            this.db = firebase.database();
            this.auth = firebase.auth();
            this.isConnected = true;
            console.log('✅ Firebase connected successfully');
            
            // Test connection
            this.testConnection();
            
        } catch (error) {
            console.warn('⚠️ Firebase connection failed, using localStorage:', error.message);
            this.isConnected = false;
            this.useLocalStorage = true;
        }
    }

    // Test Firebase connection
    async testConnection() {
        try {
            await this.db.ref('.info/connected').once('value');
            console.log('🔥 Firebase real-time connection verified');
        } catch (error) {
            console.warn('Firebase test failed, falling back to localStorage:', error);
            this.isConnected = false;
            this.useLocalStorage = true;
        }
    }

    // Save data to Firebase or localStorage
    async saveData(key, data) {
        try {
            if (this.isConnected && this.db) {
                await this.db.ref(`lavanya-foundation/${key}`).set(data);
                console.log(`✅ Saved ${key} to Firebase`);
                
                // Also save to localStorage as backup
                localStorage.setItem(key, JSON.stringify(data));
                return true;
            } else {
                throw new Error('Firebase not available');
            }
        } catch (error) {
            console.warn(`⚠️ Firebase save failed for ${key}, using localStorage:`, error.message);
            localStorage.setItem(key, JSON.stringify(data));
            return false;
        }
    }

    // Load data from Firebase or localStorage
    async loadData(key) {
        try {
            if (this.isConnected && this.db) {
                const snapshot = await this.db.ref(`lavanya-foundation/${key}`).once('value');
                const firebaseData = snapshot.val();
                
                if (firebaseData) {
                    console.log(`✅ Loaded ${key} from Firebase`);
                    // Also save to localStorage for offline access
                    localStorage.setItem(key, JSON.stringify(firebaseData));
                    return firebaseData;
                } else {
                    throw new Error('No data in Firebase');
                }
            } else {
                throw new Error('Firebase not available');
            }
        } catch (error) {
            console.warn(`⚠️ Firebase load failed for ${key}, using localStorage:`, error.message);
            const localData = localStorage.getItem(key);
            return localData ? JSON.parse(localData) : null;
        }
    }

    // Listen for real-time updates
    listenToChanges(key, callback) {
        if (this.isConnected && this.db) {
            this.db.ref(`lavanya-foundation/${key}`).on('value', (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    console.log(`🔄 Real-time update received for ${key}`);
                    localStorage.setItem(key, JSON.stringify(data));
                    callback(data);
                }
            });
        }
    }

    // Remove data
    async removeData(key) {
        try {
            if (this.isConnected && this.db) {
                await this.db.ref(`lavanya-foundation/${key}`).remove();
                console.log(`🗑️ Removed ${key} from Firebase`);
            }
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.warn(`⚠️ Firebase remove failed for ${key}:`, error.message);
            localStorage.removeItem(key);
            return false;
        }
    }

    // Get connection status
    getStatus() {
        return {
            connected: this.isConnected,
            fallback: this.useLocalStorage
        };
    }

    // Authentication Methods
    async signInWithEmail(email, password) {
        try {
            if (!this.isConnected) {
                throw new Error('Firebase not connected');
            }
            const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
            return { success: true, user: userCredential.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async createUser(email, password) {
        try {
            if (!this.isConnected) {
                throw new Error('Firebase not connected');
            }
            const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
            return { success: true, user: userCredential.user };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async signOut() {
        try {
            if (!this.isConnected) {
                return { success: true }; // Local logout
            }
            await this.auth.signOut();
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    getCurrentUser() {
        if (!this.isConnected) {
            return null;
        }
        return this.auth.currentUser;
    }

    onAuthStateChanged(callback) {
        if (!this.isConnected) {
            callback(null);
            return;
        }
        return this.auth.onAuthStateChanged(callback);
    }

    async sendPasswordResetEmail(email) {
        try {
            if (!this.isConnected) {
                throw new Error('Firebase not connected');
            }
            await this.auth.sendPasswordResetEmail(email);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Initialize default data if not exists
    async initializeDefaultData() {
        const defaultData = window.lavanyaFoundation?.defaultData;
        if (!defaultData) return;

        const dataKeys = ['gallery', 'teamMembers', 'chapters', 'partners', 'issues', 'impactStories'];
        
        for (const key of dataKeys) {
            try {
                const existingData = await this.loadData(key);
                if (!existingData && defaultData[key]) {
                    await this.saveData(key, defaultData[key]);
                    console.log(`📦 Initialized default data for ${key}`);
                }
            } catch (error) {
                console.warn(`Failed to initialize ${key}:`, error);
            }
        }
    }

    // Migrate localStorage data to Firebase
    async migrateLocalStorageToFirebase() {
        if (!this.isConnected) return false;

        const keys = ['gallery', 'teamMembers', 'chapters', 'partners', 'issues', 'impactStories'];
        let migrated = 0;

        for (const key of keys) {
            try {
                const localData = localStorage.getItem(key);
                if (localData) {
                    const data = JSON.parse(localData);
                    await this.saveData(key, data);
                    migrated++;
                }
            } catch (error) {
                console.warn(`Migration failed for ${key}:`, error);
            }
        }

        if (migrated > 0) {
            console.log(`🚀 Migrated ${migrated} datasets to Firebase`);
            return true;
        }
        return false;
    }
}

// Create global Firebase manager instance
window.firebaseManager = new FirebaseManager();

// Enhanced data management functions
window.lavanyaFoundation = window.lavanyaFoundation || {};

// Save data (Firebase + localStorage)
window.lavanyaFoundation.saveToStorage = async function(key, data) {
    return await window.firebaseManager.saveData(key, data);
};

// Load data (Firebase + localStorage fallback)
window.lavanyaFoundation.loadFromStorage = async function(key) {
    return await window.firebaseManager.loadData(key);
};

// Get storage status
window.lavanyaFoundation.getStorageStatus = function() {
    return window.firebaseManager.getStatus();
};

// Listen for real-time updates
window.lavanyaFoundation.listenToUpdates = function(key, callback) {
    window.firebaseManager.listenToChanges(key, callback);
};

// Initialize after page load
document.addEventListener('DOMContentLoaded', async function() {
    // Wait a moment for Firebase to initialize
    setTimeout(async () => {
        try {
            await window.firebaseManager.initializeDefaultData();
            
            // Try to migrate existing localStorage data
            const migrated = await window.firebaseManager.migrateLocalStorageToFirebase();
            if (migrated) {
                console.log('📊 Local data migrated to Firebase successfully');
            }
            
            // Show connection status
            const status = window.firebaseManager.getStatus();
            console.log('🔗 Storage Status:', status.connected ? 'Firebase Connected' : 'Using Local Storage');
            
        } catch (error) {
            console.warn('Initialization error:', error);
        }
    }, 1000);
});