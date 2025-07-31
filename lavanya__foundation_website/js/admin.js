// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeAdmin();
});

// Admin initialization
function initializeAdmin() {
    setupLoginForm();
    setupNavigation();
    setupForms();
    checkLoginStatus();
    
    // Wait for Firebase to initialize then load content
    setTimeout(() => {
        // Load all admin content
        if (document.getElementById('admin-dashboard').style.display !== 'none') {
            loadContentAdmin();
        }
    }, 3000);
}

// Login functionality
function setupLoginForm() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const forgotPasswordForm = document.getElementById('forgot-password-form');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', handleForgotPassword);
    }

    // Setup forgot password links
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', showForgotPasswordForm);
    }

    const backToLoginLink = document.getElementById('back-to-login-link');
    if (backToLoginLink) {
        backToLoginLink.addEventListener('click', showLoginForm);
    }

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    const previewBtn = document.getElementById('preview-btn');
    if (previewBtn) {
        previewBtn.addEventListener('click', () => {
            window.open('index.html', '_blank');
        });
    }
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
    submitBtn.disabled = true;

    // Check if we have a stored admin password
    const storedPassword = localStorage.getItem('adminPassword') || 'admin123';

    // Function to complete login
    const completeLogin = () => {
        localStorage.setItem('adminLoggedIn', 'true');
        showDashboard();
        loadAdminData();
        showSuccess('Logged in successfully!');
    };

    // Try Firebase Authentication first (if available and connected)
    if (window.firebaseManager && window.firebaseManager.isConnected) {
        // For demo purposes, we'll use email-based auth with a predefined admin email
        const adminEmail = 'admin@lavanyafoundation.org';
        
        window.firebaseManager.signInWithEmail(adminEmail, password)
            .then(result => {
                if (result.success) {
                    // Firebase auth successful
                    completeLogin();
                } else {
                    // Try fallback authentication
                    if ((username === 'admin' && password === storedPassword) || 
                        (username === 'admin' && password === 'admin123')) {
                        completeLogin();
                    } else {
                        showError('Invalid credentials. Try admin/admin123 for demo.');
                    }
                }
            })
            .catch(error => {
                // Fallback to basic auth if Firebase fails
                if ((username === 'admin' && password === storedPassword) || 
                    (username === 'admin' && password === 'admin123')) {
                    completeLogin();
                } else {
                    showError('Invalid credentials. Try admin/admin123 for demo.');
                }
            })
            .finally(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
    } else {
        // Fallback authentication when Firebase is not available
        if ((username === 'admin' && password === storedPassword) || 
            (username === 'admin' && password === 'admin123')) {
            completeLogin();
        } else {
            showError('Invalid credentials. Try admin/admin123 for demo.');
        }
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

async function handleLogout() {
    // Try Firebase signout first
    if (window.firebaseManager && window.firebaseManager.isConnected) {
        const result = await window.firebaseManager.signOut();
        if (result.success) {
            showSuccess('Logged out successfully!');
        }
    }
    
    // Clear local storage as fallback
    localStorage.removeItem('adminLoggedIn');
    showLogin();
}

async function handleForgotPassword(e) {
    e.preventDefault();
    const email = document.getElementById('reset-email').value;

    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
        if (window.firebaseManager && window.firebaseManager.isConnected) {
            const result = await window.firebaseManager.sendPasswordResetEmail(email);
            if (result.success) {
                showSuccess('Password reset email sent! Check your inbox.');
                showLoginForm();
            } else {
                showError('Failed to send reset email: ' + result.error);
            }
        } else {
            showError('Password reset requires Firebase connection. Use admin/admin123 for demo.');
        }
    } catch (error) {
        showError('Error sending reset email: ' + error.message);
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

function showForgotPasswordForm(e) {
    e.preventDefault();
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('forgot-password-form').classList.remove('hidden');
}

function showLoginForm(e) {
    if (e) e.preventDefault();
    document.getElementById('forgot-password-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

function checkLoginStatus() {
    // Check Firebase auth state first
    if (window.firebaseManager && window.firebaseManager.isConnected) {
        window.firebaseManager.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in with Firebase
                showDashboard();
                loadAdminData();
            } else {
                // Check fallback localStorage
                const isLoggedIn = localStorage.getItem('adminLoggedIn');
                if (isLoggedIn === 'true') {
                    showDashboard();
                    loadAdminData();
                } else {
                    showLogin();
                }
            }
        });
    } else {
        // Fallback to localStorage when Firebase is not available
        const isLoggedIn = localStorage.getItem('adminLoggedIn');
        if (isLoggedIn === 'true') {
            showDashboard();
            loadAdminData();
        } else {
            showLogin();
        }
    }
}

function showLogin() {
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('admin-dashboard').classList.add('hidden');
}

function showDashboard() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('admin-dashboard').classList.remove('hidden');
}

// Navigation
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.getAttribute('data-section');
            switchSection(section);
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

function switchSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Load section data
    switch(sectionName) {
        case 'dashboard':
            loadDashboardStats();
            break;
        case 'gallery':
            loadGalleryAdmin();
            break;
        case 'team':
            loadTeamAdmin();
            break;
        case 'stories':
            loadStoriesAdmin();
            break;
        case 'chapters':
            loadChaptersAdmin();
            break;
        case 'partners':
            loadPartnersAdmin();
            break;
        case 'issues':
            loadIssuesAdmin();
            break;
    }
}

// Load admin data
async function loadAdminData() {
    await loadDashboardStats();
    await loadGalleryAdmin();
    await loadTeamAdmin();
    await loadStoriesAdmin();
    await loadChaptersAdmin();
    await loadPartnersAdmin();
    await loadIssuesAdmin();
}

// Enhanced data loading for admin
async function loadAdminDataWithFirebase(key, defaultData) {
    try {
        if (window.lavanyaFoundation?.loadFromStorage) {
            const data = await window.lavanyaFoundation.loadFromStorage(key);
            return data || defaultData;
        } else {
            return JSON.parse(localStorage.getItem(key)) || defaultData;
        }
    } catch (error) {
        console.warn(`Failed to load ${key}:`, error);
        return defaultData;
    }
}

// Enhanced data saving for admin
async function saveAdminDataWithFirebase(key, data) {
    try {
        if (window.lavanyaFoundation?.saveToStorage) {
            await window.lavanyaFoundation.saveToStorage(key, data);
            return true;
        } else {
            localStorage.setItem(key, JSON.stringify(data));
            return false;
        }
    } catch (error) {
        console.warn(`Failed to save ${key}:`, error);
        localStorage.setItem(key, JSON.stringify(data));
        return false;
    }
}

// Dashboard
async function loadDashboardStats() {
    const gallery = await loadAdminDataWithFirebase('gallery', window.lavanyaFoundation.defaultData.gallery);
    const teamMembers = await loadAdminDataWithFirebase('teamMembers', window.lavanyaFoundation.defaultData.teamMembers);
    const chapters = await loadAdminDataWithFirebase('chapters', window.lavanyaFoundation.defaultData.chapters);
    const partners = await loadAdminDataWithFirebase('partners', window.lavanyaFoundation.defaultData.partners);

    document.getElementById('gallery-count').textContent = gallery.length;
    document.getElementById('team-count').textContent = teamMembers.length;
    document.getElementById('chapters-count').textContent = chapters.length;
    document.getElementById('partners-count').textContent = partners.length;
}

// Form setup
function setupForms() {
    // Gallery form
    const galleryForm = document.getElementById('gallery-item-form');
    if (galleryForm) {
        galleryForm.addEventListener('submit', handleGallerySubmit);
    }

    // Team form
    const teamForm = document.getElementById('team-member-form');
    if (teamForm) {
        teamForm.addEventListener('submit', handleTeamSubmit);
    }

    // Story form
    const storyForm = document.getElementById('story-form');
    if (storyForm) {
        storyForm.addEventListener('submit', handleStorySubmit);
    }

    // Chapter form
    const chapterForm = document.getElementById('chapter-form');
    if (chapterForm) {
        chapterForm.addEventListener('submit', handleChapterSubmit);
    }

    // Partner form
    const partnerForm = document.getElementById('partner-form');
    if (partnerForm) {
        partnerForm.addEventListener('submit', handlePartnerSubmit);
    }

    // Issue form
    const issueForm = document.getElementById('issue-form');
    if (issueForm) {
        issueForm.addEventListener('submit', handleIssueSubmit);
    }
}

// Gallery Management
async function loadGalleryAdmin() {
    const gallery = await loadAdminDataWithFirebase('gallery', window.lavanyaFoundation.defaultData.gallery);
    const galleryList = document.getElementById('gallery-list');
    
    if (galleryList) {
        galleryList.innerHTML = gallery.map((item, index) => `
            <div class="item-card gallery-item-card">
                <img src="${item.src}" alt="${item.title}" class="item-image">
                <div class="item-content">
                    <div class="item-title">${item.title}</div>
                    <div class="item-subtitle">Category: ${item.category}</div>
                </div>
                <div class="item-actions">
                    <button class="btn btn-sm btn-secondary" onclick="editGalleryItem(${index})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteGalleryItem(${index})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `).join('');
    }
}

async function handleGallerySubmit(e) {
    e.preventDefault();
    const gallery = await loadAdminDataWithFirebase('gallery', window.lavanyaFoundation.defaultData.gallery);
    const editId = document.getElementById('gallery-edit-id').value;
    
    const item = {
        id: editId ? parseInt(editId) : Date.now(),
        title: document.getElementById('gallery-title').value,
        src: document.getElementById('gallery-src').value,
        category: document.getElementById('gallery-category').value
    };

    if (editId) {
        const index = gallery.findIndex(g => g.id === parseInt(editId));
        gallery[index] = item;
    } else {
        gallery.push(item);
    }

    // Save to Firebase
    await saveAdminDataWithFirebase('gallery', gallery);
    loadGalleryAdmin();
    hideForm('gallery');
    showSuccess('Gallery item saved successfully!');
    
    // Reload main site content
    if (window.lavanyaFoundation && window.lavanyaFoundation.loadContent) {
        window.lavanyaFoundation.loadContent();
    }
}

async function editGalleryItem(index) {
    const gallery = await loadAdminDataWithFirebase('gallery', window.lavanyaFoundation.defaultData.gallery);
    const item = gallery[index];
    
    document.getElementById('gallery-edit-id').value = item.id;
    document.getElementById('gallery-title').value = item.title;
    document.getElementById('gallery-src').value = item.src;
    document.getElementById('gallery-category').value = item.category;
    
    showAddForm('gallery');
}

async function deleteGalleryItem(index) {
    if (confirm('Are you sure you want to delete this gallery item?')) {
        const gallery = await loadAdminDataWithFirebase('gallery', window.lavanyaFoundation.defaultData.gallery);
        gallery.splice(index, 1);
        await saveAdminDataWithFirebase('gallery', gallery);
        loadGalleryAdmin();
        showSuccess('Gallery item deleted successfully!');
        
        // Reload main site content
        if (window.lavanyaFoundation && window.lavanyaFoundation.loadContent) {
            window.lavanyaFoundation.loadContent();
        }
    }
}

// Team Management
async function loadTeamAdmin() {
    const teamMembers = await loadAdminDataWithFirebase('teamMembers', window.lavanyaFoundation.defaultData.teamMembers);
    const teamList = document.getElementById('team-list');
    
    if (teamList) {
        teamList.innerHTML = teamMembers.map((member, index) => `
            <div class="item-card team-item-card">
                <img src="${member.image}" alt="${member.name}" class="item-image">
                <div class="item-content">
                    <div class="item-title">${member.name}</div>
                    <div class="item-subtitle">${member.role}</div>
                    <div class="item-text">${member.bio}</div>
                </div>
                <div class="item-actions">
                    <button class="btn btn-sm btn-secondary" onclick="editTeamMember(${index})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteTeamMember(${index})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `).join('');
    }
}

async function handleTeamSubmit(e) {
    e.preventDefault();
    const teamMembers = await loadAdminDataWithFirebase('teamMembers', window.lavanyaFoundation.defaultData.teamMembers);
    const editId = document.getElementById('team-edit-id').value;
    
    const member = {
        name: document.getElementById('team-name').value,
        role: document.getElementById('team-role').value,
        image: document.getElementById('team-image').value,
        bio: document.getElementById('team-bio').value
    };

    if (editId) {
        teamMembers[parseInt(editId)] = member;
    } else {
        teamMembers.push(member);
    }

    await saveAdminDataWithFirebase('teamMembers', teamMembers);
    loadTeamAdmin();
    hideForm('team');
    showSuccess('Team member saved successfully!');
    
    // Reload main site content
    if (window.lavanyaFoundation && window.lavanyaFoundation.loadContent) {
        window.lavanyaFoundation.loadContent();
    }
}

async function editTeamMember(index) {
    const teamMembers = await loadAdminDataWithFirebase('teamMembers', window.lavanyaFoundation.defaultData.teamMembers);
    const member = teamMembers[index];
    
    document.getElementById('team-edit-id').value = index;
    document.getElementById('team-name').value = member.name;
    document.getElementById('team-role').value = member.role;
    document.getElementById('team-image').value = member.image;
    document.getElementById('team-bio').value = member.bio;
    
    showAddForm('team');
}

async function deleteTeamMember(index) {
    if (confirm('Are you sure you want to delete this team member?')) {
        const teamMembers = await loadAdminDataWithFirebase('teamMembers', window.lavanyaFoundation.defaultData.teamMembers);
        teamMembers.splice(index, 1);
        await saveAdminDataWithFirebase('teamMembers', teamMembers);
        loadTeamAdmin();
        showSuccess('Team member deleted successfully!');
        
        // Reload main site content
        if (window.lavanyaFoundation && window.lavanyaFoundation.loadContent) {
            window.lavanyaFoundation.loadContent();
        }
    }
}

// Stories Management
async function loadStoriesAdmin() {
    const stories = await loadAdminDataWithFirebase('impactStories', window.lavanyaFoundation.defaultData.impactStories);
    const storiesList = document.getElementById('stories-list');
    
    if (storiesList) {
        storiesList.innerHTML = stories.map((story, index) => `
            <div class="item-card story-item-card">
                <img src="${story.image}" alt="${story.title}" class="item-image">
                <div class="item-content">
                    <div class="item-title">${story.title}</div>
                    <div class="item-text">${story.text}</div>
                </div>
                <div class="item-actions">
                    <button class="btn btn-sm btn-secondary" onclick="editStory(${index})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteStory(${index})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `).join('');
    }
}

async function handleStorySubmit(e) {
    e.preventDefault();
    const stories = await loadAdminDataWithFirebase('impactStories', window.lavanyaFoundation.defaultData.impactStories);
    const editId = document.getElementById('story-edit-id').value;
    
    const story = {
        title: document.getElementById('story-title').value,
        image: document.getElementById('story-image').value,
        text: document.getElementById('story-text').value
    };

    if (editId) {
        stories[parseInt(editId)] = story;
    } else {
        stories.push(story);
    }

    await saveAdminDataWithFirebase('impactStories', stories);
    loadStoriesAdmin();
    hideForm('stories');
    showSuccess('Impact story saved successfully!');
    
    // Reload main site content
    if (window.lavanyaFoundation && window.lavanyaFoundation.loadContent) {
        window.lavanyaFoundation.loadContent();
    }
}

async function editStory(index) {
    const stories = await loadAdminDataWithFirebase('impactStories', window.lavanyaFoundation.defaultData.impactStories);
    const story = stories[index];
    
    document.getElementById('story-edit-id').value = index;
    document.getElementById('story-title').value = story.title;
    document.getElementById('story-image').value = story.image;
    document.getElementById('story-text').value = story.text;
    
    showAddForm('stories');
}

async function deleteStory(index) {
    if (confirm('Are you sure you want to delete this story?')) {
        const stories = await loadAdminDataWithFirebase('impactStories', window.lavanyaFoundation.defaultData.impactStories);
        stories.splice(index, 1);
        await saveAdminDataWithFirebase('impactStories', stories);
        loadStoriesAdmin();
        showSuccess('Story deleted successfully!');
    }
}

// Chapters Management
async function loadChaptersAdmin() {
    const chapters = await loadAdminDataWithFirebase('chapters', window.lavanyaFoundation.defaultData.chapters);
    const chaptersList = document.getElementById('chapters-list');
    
    if (chaptersList) {
        chaptersList.innerHTML = chapters.map((chapter, index) => `
            <div class="item-card chapter-item-card">
                <img src="${chapter.image}" alt="${chapter.name}" class="item-image">
                <div class="item-content">
                    <div class="item-title">${chapter.name}</div>
                    <div class="item-subtitle">${chapter.location}</div>
                    <div class="item-text">${chapter.description}</div>
                    <div class="item-meta">
                        <span><i class="fas fa-envelope"></i> ${chapter.contact}</span>
                    </div>
                </div>
                <div class="item-actions">
                    <button class="btn btn-sm btn-secondary" onclick="editChapter(${index})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteChapter(${index})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `).join('');
    }
}

async function handleChapterSubmit(e) {
    e.preventDefault();
    const chapters = await loadAdminDataWithFirebase('chapters', window.lavanyaFoundation.defaultData.chapters);
    const editId = document.getElementById('chapter-edit-id').value;
    
    const chapter = {
        name: document.getElementById('chapter-name').value,
        location: document.getElementById('chapter-location').value,
        image: document.getElementById('chapter-image').value,
        description: document.getElementById('chapter-description').value,
        contact: document.getElementById('chapter-contact').value
    };

    if (editId) {
        chapters[parseInt(editId)] = chapter;
    } else {
        chapters.push(chapter);
    }

    await saveAdminDataWithFirebase('chapters', chapters);
    loadChaptersAdmin();
    hideForm('chapters');
    showSuccess('Chapter saved successfully!');
}

async function editChapter(index) {
    const chapters = await loadAdminDataWithFirebase('chapters', window.lavanyaFoundation.defaultData.chapters);
    const chapter = chapters[index];
    
    document.getElementById('chapter-edit-id').value = index;
    document.getElementById('chapter-name').value = chapter.name;
    document.getElementById('chapter-location').value = chapter.location;
    document.getElementById('chapter-image').value = chapter.image;
    document.getElementById('chapter-description').value = chapter.description;
    document.getElementById('chapter-contact').value = chapter.contact;
    
    showAddForm('chapters');
}

async function deleteChapter(index) {
    if (confirm('Are you sure you want to delete this chapter?')) {
        const chapters = await loadAdminDataWithFirebase('chapters', window.lavanyaFoundation.defaultData.chapters);
        chapters.splice(index, 1);
        await saveAdminDataWithFirebase('chapters', chapters);
        loadChaptersAdmin();
        showSuccess('Chapter deleted successfully!');
    }
}

// Partners Management
async function loadPartnersAdmin() {
    const partners = await loadAdminDataWithFirebase('partners', window.lavanyaFoundation.defaultData.partners);
    const partnersList = document.getElementById('partners-list');
    
    if (partnersList) {
        partnersList.innerHTML = partners.map((partner, index) => `
            <div class="item-card partner-item-card">
                <img src="${partner.logo}" alt="${partner.name}" class="item-image">
                <div class="item-content">
                    <div class="item-title">${partner.name}</div>
                    <div class="item-meta">
                        <span><i class="fas fa-link"></i> ${partner.website}</span>
                    </div>
                </div>
                <div class="item-actions">
                    <button class="btn btn-sm btn-secondary" onclick="editPartner(${index})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deletePartner(${index})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `).join('');
    }
}

async function handlePartnerSubmit(e) {
    e.preventDefault();
    const partners = await loadAdminDataWithFirebase('partners', window.lavanyaFoundation.defaultData.partners);
    const editId = document.getElementById('partner-edit-id').value;
    
    const partner = {
        name: document.getElementById('partner-name').value,
        logo: document.getElementById('partner-logo').value,
        website: document.getElementById('partner-website').value
    };

    if (editId) {
        partners[parseInt(editId)] = partner;
    } else {
        partners.push(partner);
    }

    await saveAdminDataWithFirebase('partners', partners);
    loadPartnersAdmin();
    hideForm('partners');
    showSuccess('Partner saved successfully!');
}

async function editPartner(index) {
    const partners = await loadAdminDataWithFirebase('partners', window.lavanyaFoundation.defaultData.partners);
    const partner = partners[index];
    
    document.getElementById('partner-edit-id').value = index;
    document.getElementById('partner-name').value = partner.name;
    document.getElementById('partner-logo').value = partner.logo;
    document.getElementById('partner-website').value = partner.website;
    
    showAddForm('partners');
}

async function deletePartner(index) {
    if (confirm('Are you sure you want to delete this partner?')) {
        const partners = await loadAdminDataWithFirebase('partners', window.lavanyaFoundation.defaultData.partners);
        partners.splice(index, 1);
        await saveAdminDataWithFirebase('partners', partners);
        loadPartnersAdmin();
        showSuccess('Partner deleted successfully!');
    }
}

// Issues Management
async function loadIssuesAdmin() {
    const issues = await loadAdminDataWithFirebase('issues', window.lavanyaFoundation.defaultData.issues);
    const issuesList = document.getElementById('issues-list');
    
    if (issuesList) {
        issuesList.innerHTML = issues.map((issue, index) => `
            <div class="item-card issue-item-card">
                <div class="issue-icon-display">
                    <i class="${issue.icon}"></i>
                </div>
                <div class="item-content">
                    <div class="item-title">${issue.title}</div>
                    <div class="item-text">${issue.description}</div>
                    <div class="item-meta">
                        <span><i class="fas fa-code"></i> ${issue.icon}</span>
                    </div>
                </div>
                <div class="item-actions">
                    <button class="btn btn-sm btn-secondary" onclick="editIssue(${index})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteIssue(${index})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `).join('');
    }
}

async function handleIssueSubmit(e) {
    e.preventDefault();
    const issues = await loadAdminDataWithFirebase('issues', window.lavanyaFoundation.defaultData.issues);
    const editId = document.getElementById('issue-edit-id').value;
    
    const issue = {
        title: document.getElementById('issue-title').value,
        icon: document.getElementById('issue-icon').value,
        description: document.getElementById('issue-description').value
    };

    if (editId) {
        issues[parseInt(editId)] = issue;
    } else {
        issues.push(issue);
    }

    await saveAdminDataWithFirebase('issues', issues);
    loadIssuesAdmin();
    hideForm('issues');
    showSuccess('Issue saved successfully!');
}

async function editIssue(index) {
    const issues = await loadAdminDataWithFirebase('issues', window.lavanyaFoundation.defaultData.issues);
    const issue = issues[index];
    
    document.getElementById('issue-edit-id').value = index;
    document.getElementById('issue-title').value = issue.title;
    document.getElementById('issue-icon').value = issue.icon;
    document.getElementById('issue-description').value = issue.description;
    
    showAddForm('issues');
}

async function deleteIssue(index) {
    if (confirm('Are you sure you want to delete this issue?')) {
        const issues = await loadAdminDataWithFirebase('issues', window.lavanyaFoundation.defaultData.issues);
        issues.splice(index, 1);
        await saveAdminDataWithFirebase('issues', issues);
        loadIssuesAdmin();
        showSuccess('Issue deleted successfully!');
    }
}

// Form utilities
function showAddForm(section) {
    const form = document.getElementById(`${section}-form`);
    if (form) {
        form.classList.remove('hidden');
        form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Clear form for new entries
        const editId = document.getElementById(`${section}-edit-id`) || document.getElementById(`${section.slice(0, -1)}-edit-id`);
        if (editId && !editId.value) {
            form.reset();
        }
    }
}

function hideForm(section) {
    const form = document.getElementById(`${section}-form`);
    if (form) {
        form.classList.add('hidden');
        form.reset();
        
        // Clear edit ID
        const editId = document.getElementById(`${section}-edit-id`) || document.getElementById(`${section.slice(0, -1)}-edit-id`);
        if (editId) {
            editId.value = '';
        }
    }
}

// Utility functions
function showSuccess(message) {
    // Remove any existing messages
    document.querySelectorAll('.success-message, .error-message').forEach(msg => msg.remove());
    
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    const activeSection = document.querySelector('.content-section.active');
    if (activeSection) {
        activeSection.insertBefore(successDiv, activeSection.firstChild);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }
}

function showError(message) {
    // Remove any existing messages
    document.querySelectorAll('.success-message, .error-message').forEach(msg => msg.remove());
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const activeSection = document.querySelector('.content-section.active');
    if (activeSection) {
        activeSection.insertBefore(errorDiv, activeSection.firstChild);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
}
