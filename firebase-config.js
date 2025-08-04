// Firebase Configuration
// Replace these values with your actual Firebase project credentials

const firebaseConfig = {
    apiKey: "AIzaSyAGVFxCOL6ULr_UdUP6JSMbRkPADc7HyyM",
    authDomain: "lavanya-foundation-website.firebaseapp.com",
    projectId: "lavanya-foundation-website",
    storageBucket: "lavanya-foundation-website.firebasestorage.app",
    messagingSenderId: "752962971751",
    appId: "1:752962971751:web:c333e532f0e25f0973ccc2"
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = firebaseConfig;
} else {
    // For browser usage
    window.firebaseConfig = firebaseConfig;
}

/*
SETUP INSTRUCTIONS:

1. Go to Firebase Console: https://console.firebase.google.com/
2. Create a new project or select existing one
3. Go to Project Settings (gear icon)
4. Scroll down to "Your apps" section
5. Click "Add app" and select Web
6. Register your app with a nickname
7. Copy the configuration object
8. Replace the values above with your actual Firebase config

ENABLE SERVICES:
- Authentication (Email/Password)
- Firestore Database
- Storage

CREATE ADMIN USER:
1. Go to Authentication in Firebase Console
2. Click "Add user"
3. Enter admin email and password
4. Use these credentials to log into admin panel

SECURITY RULES:
Set up Firestore and Storage rules as described in README.md
*/ 