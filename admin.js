// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGVFxCOL6ULr_UdUP6JSMbRkPADc7HyyM",
    authDomain: "lavanya-foundation-website.firebaseapp.com",
    projectId: "lavanya-foundation-website",
    storageBucket: "lavanya-foundation-website.firebasestorage.app",
    messagingSenderId: "752962971751",
    appId: "1:752962971751:web:c333e532f0e25f0973ccc2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const db = firebase.firestore();
const auth = firebase.auth();

// Global variables
let currentUser = null;
let websiteData = {};

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');
const sectionTitle = document.getElementById('section-title');

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    setupNavigation();
    setupFormHandlers();
    setupImageUploads();
    loadDashboardData();
});

// Authentication
function checkAuth() {
    auth.onAuthStateChanged(function(user) {
        if (user) {
            currentUser = user;
            console.log('User is signed in:', user.email);
            loadWebsiteData();
        } else {
            // Redirect to login if not authenticated
            window.location.href = 'login.html';
        }
    });
}

function logout() {
    auth.signOut().then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error('Error signing out:', error);
    });
}

// Navigation
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const section = this.getAttribute('data-section');
            showSection(section);
            
            // Update section title
            sectionTitle.textContent = this.textContent.trim();
        });
    });
}

function showSection(sectionName) {
    // Hide all sections
    contentSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    
    // Load data for specific sections
    if (sectionName === 'orders') {
        loadOrders();
    }
}

// Form Handlers
function setupFormHandlers() {
    // General Settings Form
    document.getElementById('general-form').addEventListener('submit', function(e) {
        e.preventDefault();
        saveGeneralSettings();
    });
    
    // Home Settings Form
    document.getElementById('home-form').addEventListener('submit', function(e) {
        e.preventDefault();
        saveHomeSettings();
    });
    
    // About Settings Form
    document.getElementById('about-form').addEventListener('submit', function(e) {
        e.preventDefault();
        saveAboutSettings();
    });
    
    // Contact Settings Form
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        saveContactSettings();
    });
}

// Image URL Setup
function setupImageUploads() {
    const imageInputs = document.querySelectorAll('input[type="url"]');
    
    imageInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            const imageUrl = e.target.value;
            const previewId = this.id + '-preview';
            const preview = document.getElementById(previewId);
            
            if (preview && imageUrl) {
                preview.src = imageUrl;
                preview.style.display = 'block';
            } else if (preview) {
                preview.style.display = 'none';
            }
        });
    });
}

// Data Loading Functions
async function loadWebsiteData() {
    try {
        const doc = await db.collection('website').doc('settings').get();
        if (doc.exists) {
            websiteData = doc.data();
            populateForms();
        }
    } catch (error) {
        console.error('Error loading website data:', error);
        showAlert('Error loading website data', 'error');
    }
}

function populateForms() {
    // General Settings
    if (websiteData.general) {
        document.getElementById('site-title').value = websiteData.general.siteTitle || '';
        document.getElementById('logo-text').value = websiteData.general.logoText || '';
        document.getElementById('favicon-url').value = websiteData.general.faviconUrl || '';
        if (websiteData.general.faviconUrl) {
            document.getElementById('favicon-url-preview').src = websiteData.general.faviconUrl;
            document.getElementById('favicon-url-preview').style.display = 'block';
        }
    }
    
    // Home Settings
    if (websiteData.home) {
        document.getElementById('hero-title').value = websiteData.home.heroTitle || '';
        document.getElementById('hero-subtitle').value = websiteData.home.heroSubtitle || '';
        if (websiteData.home.heroImage) {
            document.getElementById('hero-image-preview').src = websiteData.home.heroImage;
            document.getElementById('hero-image-preview').style.display = 'block';
        }
    }
    
    // About Settings
    if (websiteData.about) {
        document.getElementById('mission-title').value = websiteData.about.missionTitle || '';
        document.getElementById('mission-text').value = websiteData.about.missionText || '';
        document.getElementById('vision-title').value = websiteData.about.visionTitle || '';
        document.getElementById('vision-text').value = websiteData.about.visionText || '';
        if (websiteData.about.aboutImage) {
            document.getElementById('about-image-preview').src = websiteData.about.aboutImage;
            document.getElementById('about-image-preview').style.display = 'block';
        }
    }
    
    // Contact Settings
    if (websiteData.contact) {
        document.getElementById('contact-address').value = websiteData.contact.address || '';
        document.getElementById('contact-phone').value = websiteData.contact.phone || '';
        document.getElementById('contact-email').value = websiteData.contact.email || '';
        document.getElementById('contact-hours').value = websiteData.contact.hours || '';
    }
}

// Save Functions
async function saveGeneralSettings() {
    const formData = new FormData(document.getElementById('general-form'));
    const data = {
        siteTitle: formData.get('siteTitle'),
        logoText: formData.get('logoText'),
        faviconUrl: formData.get('faviconUrl')
    };
    
    try {
        await db.collection('website').doc('settings').set({
            general: data
        }, { merge: true });
        
        showAlert('General settings saved successfully!', 'success');
    } catch (error) {
        console.error('Error saving general settings:', error);
        showAlert('Error saving general settings', 'error');
    }
}

async function saveHomeSettings() {
    const formData = new FormData(document.getElementById('home-form'));
    const data = {
        heroTitle: formData.get('heroTitle'),
        heroSubtitle: formData.get('heroSubtitle'),
        heroImage: formData.get('heroImage')
    };
    
    try {
        await db.collection('website').doc('settings').set({
            home: data
        }, { merge: true });
        
        showAlert('Home settings saved successfully!', 'success');
    } catch (error) {
        console.error('Error saving home settings:', error);
        showAlert('Error saving home settings', 'error');
    }
}

async function saveAboutSettings() {
    const formData = new FormData(document.getElementById('about-form'));
    const data = {
        missionTitle: formData.get('missionTitle'),
        missionText: formData.get('missionText'),
        visionTitle: formData.get('visionTitle'),
        visionText: formData.get('visionText'),
        aboutImage: formData.get('aboutImage')
    };
    
    try {
        await db.collection('website').doc('settings').set({
            about: data
        }, { merge: true });
        
        showAlert('About settings saved successfully!', 'success');
    } catch (error) {
        console.error('Error saving about settings:', error);
        showAlert('Error saving about settings', 'error');
    }
}

async function saveContactSettings() {
    const formData = new FormData(document.getElementById('contact-form'));
    const data = {
        address: formData.get('address'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        hours: formData.get('hours')
    };
    
    try {
        await db.collection('website').doc('settings').set({
            contact: data
        }, { merge: true });
        
        showAlert('Contact settings saved successfully!', 'success');
    } catch (error) {
        console.error('Error saving contact settings:', error);
        showAlert('Error saving contact settings', 'error');
    }
}

// Image URL Validation Function
function validateImageUrl(url) {
    if (!url) return true; // Allow empty URLs
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

// Projects Management
async function loadProjects() {
    try {
        const snapshot = await db.collection('projects').orderBy('order').get();
        const projects = [];
        snapshot.forEach(doc => {
            projects.push({ id: doc.id, ...doc.data() });
        });
        
        displayProjects(projects);
    } catch (error) {
        console.error('Error loading projects:', error);
        showAlert('Error loading projects', 'error');
    }
}

function displayProjects(projects) {
    const container = document.getElementById('projects-list');
    container.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        container.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'card-item';
    card.innerHTML = `
        <div class="card-actions">
            <button class="btn btn-warning btn-sm" onclick="editProject('${project.id}', ${JSON.stringify(project).replace(/"/g, '&quot;')})">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-danger btn-sm" onclick="deleteProject('${project.id}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        ${project.image ? `<img src="${project.image}" style="max-width: 100px; height: auto; margin-top: 1rem; border-radius: 5px;">` : ''}
        <p><small><strong>Order:</strong> ${project.order || 'Not set'}</small></p>
    `;
    return card;
}

function addNewProject() {
    openModal('projectModal');
    document.getElementById('projectModalTitle').textContent = 'Add New Project';
    document.getElementById('projectForm').reset();
    document.getElementById('projectForm').dataset.editId = '';
}

function editProject(projectId, projectData) {
    openModal('projectModal');
    document.getElementById('projectModalTitle').textContent = 'Edit Project';
    document.getElementById('projectForm').dataset.editId = projectId;
    
    // Populate form fields
    document.getElementById('projectTitle').value = projectData.title || '';
    document.getElementById('projectDescription').value = projectData.description || '';
    document.getElementById('projectImage').value = projectData.image || '';
    document.getElementById('projectOrder').value = projectData.order || '';
    
    // Show image preview if exists
    if (projectData.image) {
        const preview = document.getElementById('projectImagePreview');
        preview.src = projectData.image;
        preview.style.display = 'block';
    }
}

async function saveProject(projectData) {
    try {
        const projectForm = document.getElementById('projectForm');
        const editId = projectForm.dataset.editId;
        
        if (editId) {
            // Update existing project
            await db.collection('projects').doc(editId).update(projectData);
            showAlert('Project updated successfully!', 'success');
        } else {
            // Add new project
            await db.collection('projects').add(projectData);
            showAlert('Project added successfully!', 'success');
        }
        
        closeModal('projectModal');
        loadProjects();
    } catch (error) {
        console.error('Error saving project:', error);
        showAlert('Error saving project', 'error');
    }
}

async function deleteProject(projectId) {
    if (confirm('Are you sure you want to delete this project?')) {
        try {
            await db.collection('projects').doc(projectId).delete();
            showAlert('Project deleted successfully!', 'success');
            loadProjects();
        } catch (error) {
            console.error('Error deleting project:', error);
            showAlert('Error deleting project', 'error');
        }
    }
}

// Events Management
async function loadEvents() {
    try {
        const snapshot = await db.collection('events').orderBy('date').get();
        const events = [];
        snapshot.forEach(doc => {
            events.push({ id: doc.id, ...doc.data() });
        });
        
        displayEvents(events);
    } catch (error) {
        console.error('Error loading events:', error);
        showAlert('Error loading events', 'error');
    }
}

function displayEvents(events) {
    const container = document.getElementById('events-list');
    container.innerHTML = '';
    
    events.forEach(event => {
        const eventCard = createEventCard(event);
        container.appendChild(eventCard);
    });
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'card-item';
    card.innerHTML = `
        <div class="card-actions">
            <button class="btn btn-warning btn-sm" onclick="editEvent('${event.id}', ${JSON.stringify(event).replace(/"/g, '&quot;')})">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-danger btn-sm" onclick="deleteEvent('${event.id}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <h4>${event.title}</h4>
        <p><strong>Date:</strong> ${event.date}</p>
        <p>${event.description}</p>
        ${event.location ? `<p><strong>Location:</strong> ${event.location}</p>` : ''}
        ${event.image ? `<img src="${event.image}" style="max-width: 100px; height: auto; margin-top: 1rem; border-radius: 5px;">` : ''}
    `;
    return card;
}

function addNewEvent() {
    openModal('eventModal');
    document.getElementById('eventModalTitle').textContent = 'Add New Event';
    document.getElementById('eventForm').reset();
    document.getElementById('eventForm').dataset.editId = '';
}

function editEvent(eventId, eventData) {
    openModal('eventModal');
    document.getElementById('eventModalTitle').textContent = 'Edit Event';
    document.getElementById('eventForm').dataset.editId = eventId;
    
    // Populate form fields
    document.getElementById('eventTitle').value = eventData.title || '';
    document.getElementById('eventDate').value = eventData.date || '';
    document.getElementById('eventDescription').value = eventData.description || '';
    document.getElementById('eventImage').value = eventData.image || '';
    document.getElementById('eventLocation').value = eventData.location || '';
    
    // Show image preview if exists
    if (eventData.image) {
        const preview = document.getElementById('eventImagePreview');
        preview.src = eventData.image;
        preview.style.display = 'block';
    }
}

async function saveEvent(eventData) {
    try {
        const eventForm = document.getElementById('eventForm');
        const editId = eventForm.dataset.editId;
        
        if (editId) {
            // Update existing event
            await db.collection('events').doc(editId).update(eventData);
            showAlert('Event updated successfully!', 'success');
        } else {
            // Add new event
            await db.collection('events').add(eventData);
            showAlert('Event added successfully!', 'success');
        }
        
        closeModal('eventModal');
        loadEvents();
    } catch (error) {
        console.error('Error saving event:', error);
        showAlert('Error saving event', 'error');
    }
}

async function deleteEvent(eventId) {
    if (confirm('Are you sure you want to delete this event?')) {
        try {
            await db.collection('events').doc(eventId).delete();
            showAlert('Event deleted successfully!', 'success');
            loadEvents();
        } catch (error) {
            console.error('Error deleting event:', error);
            showAlert('Error deleting event', 'error');
        }
    }
}

// Products Management
async function loadProducts() {
    try {
        const snapshot = await db.collection('products').orderBy('order').get();
        const products = [];
        snapshot.forEach(doc => {
            products.push({ id: doc.id, ...doc.data() });
        });
        
        displayProducts(products);
    } catch (error) {
        console.error('Error loading products:', error);
        showAlert('Error loading products', 'error');
    }
}

function displayProducts(products) {
    const container = document.getElementById('products-list');
    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card-item';
    const availabilityBadge = product.available !== false ? 
        '<span style="background: #27ae60; color: white; padding: 0.25rem 0.5rem; border-radius: 3px; font-size: 0.8rem;">Available</span>' : 
        '<span style="background: #e74c3c; color: white; padding: 0.25rem 0.5rem; border-radius: 3px; font-size: 0.8rem;">Unavailable</span>';
    
    card.innerHTML = `
        <div class="card-actions">
            <button class="btn btn-warning btn-sm" onclick="editProduct('${product.id}', ${JSON.stringify(product).replace(/"/g, '&quot;')})">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-danger btn-sm" onclick="deleteProduct('${product.id}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <h4>${product.name}</h4>
        <p><strong>Price:</strong> ₹${product.price}</p>
        <p>${product.description}</p>
        <p>${availabilityBadge}</p>
        <p><small><strong>Order:</strong> ${product.order || 'Not set'}</small></p>
        ${product.image ? `<img src="${product.image}" style="max-width: 100px; height: auto; margin-top: 1rem; border-radius: 5px;">` : ''}
    `;
    return card;
}

function addNewProduct() {
    openModal('productModal');
    document.getElementById('productModalTitle').textContent = 'Add New Product';
    document.getElementById('productForm').reset();
    document.getElementById('productForm').dataset.editId = '';
    document.getElementById('productAvailable').checked = true;
}

function editProduct(productId, productData) {
    openModal('productModal');
    document.getElementById('productModalTitle').textContent = 'Edit Product';
    document.getElementById('productForm').dataset.editId = productId;
    
    // Populate form fields
    document.getElementById('productName').value = productData.name || '';
    document.getElementById('productPrice').value = productData.price || '';
    document.getElementById('productDescription').value = productData.description || '';
    document.getElementById('productImage').value = productData.image || '';
    document.getElementById('productOrder').value = productData.order || '';
    document.getElementById('productAvailable').checked = productData.available !== false;
    
    // Show image preview if exists
    if (productData.image) {
        const preview = document.getElementById('productImagePreview');
        preview.src = productData.image;
        preview.style.display = 'block';
    }
}

async function saveProduct(productData) {
    try {
        const productForm = document.getElementById('productForm');
        const editId = productForm.dataset.editId;
        
        if (editId) {
            // Update existing product
            await db.collection('products').doc(editId).update(productData);
            showAlert('Product updated successfully!', 'success');
        } else {
            // Add new product
            await db.collection('products').add(productData);
            showAlert('Product added successfully!', 'success');
        }
        
        closeModal('productModal');
        loadProducts();
    } catch (error) {
        console.error('Error saving product:', error);
        showAlert('Error saving product', 'error');
    }
}

async function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        try {
            await db.collection('products').doc(productId).delete();
            showAlert('Product deleted successfully!', 'success');
            loadProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
            showAlert('Error deleting product', 'error');
        }
    }
}

// Volunteers Management
async function loadVolunteers() {
    try {
        const snapshot = await db.collection('volunteers').orderBy('timestamp', 'desc').get();
        const volunteers = [];
        snapshot.forEach(doc => {
            volunteers.push({ id: doc.id, ...doc.data() });
        });
        
        displayVolunteers(volunteers);
    } catch (error) {
        console.error('Error loading volunteers:', error);
        showAlert('Error loading volunteers', 'error');
    }
}

function displayVolunteers(volunteers) {
    const container = document.getElementById('volunteers-list');
    container.innerHTML = '';
    
    volunteers.forEach(volunteer => {
        const volunteerCard = createVolunteerCard(volunteer);
        container.appendChild(volunteerCard);
    });
}

function createVolunteerCard(volunteer) {
    const card = document.createElement('div');
    card.className = 'card-item';
    card.innerHTML = `
        <div class="card-actions">
            <button class="btn btn-danger btn-sm" onclick="deleteVolunteer('${volunteer.id}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <h4>${volunteer.name}</h4>
        <p><strong>Email:</strong> ${volunteer.email}</p>
        <p><strong>Phone:</strong> ${volunteer.phone}</p>
        <p><strong>Interest:</strong> ${volunteer.interest}</p>
        <p><strong>Availability:</strong> ${volunteer.availability}</p>
        <p><strong>Message:</strong> ${volunteer.message}</p>
        <p><strong>Applied:</strong> ${new Date(volunteer.timestamp?.toDate()).toLocaleDateString()}</p>
    `;
    return card;
}

async function deleteVolunteer(volunteerId) {
    if (confirm('Are you sure you want to delete this volunteer application?')) {
        try {
            await db.collection('volunteers').doc(volunteerId).delete();
            showAlert('Volunteer application deleted successfully!', 'success');
            loadVolunteers();
        } catch (error) {
            console.error('Error deleting volunteer:', error);
            showAlert('Error deleting volunteer application', 'error');
        }
    }
}

// Donations Management
async function loadDonations() {
    try {
        const snapshot = await db.collection('donations').orderBy('timestamp', 'desc').get();
        const donations = [];
        snapshot.forEach(doc => {
            donations.push({ id: doc.id, ...doc.data() });
        });
        
        displayDonations(donations);
    } catch (error) {
        console.error('Error loading donations:', error);
        showAlert('Error loading donations', 'error');
    }
}

function displayDonations(donations) {
    const container = document.getElementById('donations-list');
    container.innerHTML = '';
    
    donations.forEach(donation => {
        const donationCard = createDonationCard(donation);
        container.appendChild(donationCard);
    });
}

function createDonationCard(donation) {
    const card = document.createElement('div');
    card.className = 'card-item';
    card.innerHTML = `
        <div class="card-actions">
            <button class="btn btn-danger btn-sm" onclick="deleteDonation('${donation.id}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <h4>₹${donation.amount}</h4>
        <p><strong>Payment ID:</strong> ${donation.paymentId}</p>
        <p><strong>Status:</strong> ${donation.status}</p>
        <p><strong>Date:</strong> ${new Date(donation.timestamp?.toDate()).toLocaleDateString()}</p>
    `;
    return card;
}

async function deleteDonation(donationId) {
    if (confirm('Are you sure you want to delete this donation record?')) {
        try {
            await db.collection('donations').doc(donationId).delete();
            showAlert('Donation record deleted successfully!', 'success');
            loadDonations();
        } catch (error) {
            console.error('Error deleting donation:', error);
            showAlert('Error deleting donation record', 'error');
        }
    }
}

// Dashboard Data Loading
async function loadDashboardData() {
    try {
        // Load counts
        const volunteersSnapshot = await db.collection('volunteers').get();
        const donationsSnapshot = await db.collection('donations').get();
        const eventsSnapshot = await db.collection('events').get();
        const productsSnapshot = await db.collection('products').get();
        
        document.getElementById('total-volunteers').textContent = volunteersSnapshot.size;
        document.getElementById('total-donations').textContent = donationsSnapshot.size;
        document.getElementById('active-events').textContent = eventsSnapshot.size;
        document.getElementById('products-sold').textContent = productsSnapshot.size;
        
        // Load data for current sections
        const activeSection = document.querySelector('.nav-link.active').getAttribute('data-section');
        switch(activeSection) {
            case 'projects':
                loadProjects();
                break;
            case 'events':
                loadEvents();
                break;
            case 'shop':
                loadProducts();
                break;
            case 'volunteers':
                loadVolunteers();
                break;
            case 'donations':
                loadDonations();
                break;
        }
    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }
}

// Utility Functions
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    const mainContent = document.querySelector('.main-content');
    mainContent.insertBefore(alertDiv, mainContent.firstChild);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Load section data when switching
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link')) {
        const section = e.target.getAttribute('data-section');
        setTimeout(() => {
            switch(section) {
                case 'projects':
                    loadProjects();
                    break;
                case 'events':
                    loadEvents();
                    break;
                case 'shop':
                    loadProducts();
                    break;
                case 'volunteers':
                    loadVolunteers();
                    break;
                case 'donations':
                    loadDonations();
                    break;
            }
        }, 100);
    }
});

// Modal Control Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Clear any image previews
        const previews = modal.querySelectorAll('.image-preview');
        previews.forEach(preview => {
            preview.style.display = 'none';
            preview.src = '';
        });
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        const modalId = event.target.id;
        closeModal(modalId);
    }
});

// Form handlers for modals
document.addEventListener('DOMContentLoaded', function() {
    // Project form handler
    const projectForm = document.getElementById('projectForm');
    if (projectForm) {
        projectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const projectData = {
                title: formData.get('title'),
                description: formData.get('description'),
                image: formData.get('image') || '',
                order: parseInt(formData.get('order')) || Date.now()
            };
            saveProject(projectData);
        });
    }

    // Event form handler
    const eventForm = document.getElementById('eventForm');
    if (eventForm) {
        eventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const eventData = {
                title: formData.get('title'),
                date: formData.get('date'),
                description: formData.get('description'),
                image: formData.get('image') || '',
                location: formData.get('location') || ''
            };
            saveEvent(eventData);
        });
    }

    // Product form handler
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const productData = {
                name: formData.get('name'),
                price: parseFloat(formData.get('price')),
                description: formData.get('description'),
                image: formData.get('image') || '',
                order: parseInt(formData.get('order')) || Date.now(),
                available: formData.get('available') === 'on'
            };
            saveProduct(productData);
        });
    }

    // Image preview handlers
    setupImagePreviews();
});

function setupImagePreviews() {
    // Project image preview
    const projectImageInput = document.getElementById('projectImage');
    const projectImagePreview = document.getElementById('projectImagePreview');
    if (projectImageInput && projectImagePreview) {
        projectImageInput.addEventListener('input', function() {
            if (this.value) {
                projectImagePreview.src = this.value;
                projectImagePreview.style.display = 'block';
                projectImagePreview.onerror = function() {
                    this.style.display = 'none';
                };
            } else {
                projectImagePreview.style.display = 'none';
            }
        });
    }

    // Event image preview
    const eventImageInput = document.getElementById('eventImage');
    const eventImagePreview = document.getElementById('eventImagePreview');
    if (eventImageInput && eventImagePreview) {
        eventImageInput.addEventListener('input', function() {
            if (this.value) {
                eventImagePreview.src = this.value;
                eventImagePreview.style.display = 'block';
                eventImagePreview.onerror = function() {
                    this.style.display = 'none';
                };
            } else {
                eventImagePreview.style.display = 'none';
            }
        });
    }

    // Product image preview
    const productImageInput = document.getElementById('productImage');
    const productImagePreview = document.getElementById('productImagePreview');
    if (productImageInput && productImagePreview) {
        productImageInput.addEventListener('input', function() {
            if (this.value) {
                productImagePreview.src = this.value;
                productImagePreview.style.display = 'block';
                productImagePreview.onerror = function() {
                    this.style.display = 'none';
                };
            } else {
                productImagePreview.style.display = 'none';
            }
        });
    }
}

// Orders Management Functions
let allOrders = [];
let filteredOrders = [];

// Load orders data
async function loadOrders() {
    try {
        const snapshot = await db.collection('product_orders').orderBy('orderDate', 'desc').get();
        allOrders = [];
        snapshot.forEach(doc => {
            allOrders.push({ id: doc.id, ...doc.data() });
        });
        
        filteredOrders = [...allOrders];
        displayOrders();
        updateOrdersStats();
        console.log('Orders loaded:', allOrders.length);
    } catch (error) {
        console.error('Error loading orders:', error);
        document.getElementById('orders-list').innerHTML = '<div class="error-message">Error loading orders. Please check console for details.</div>';
    }
}

// Display orders in table format
function displayOrders() {
    const container = document.getElementById('orders-list');
    if (!container) return;

    if (filteredOrders.length === 0) {
        container.innerHTML = `
            <div class="orders-table">
                <p style="text-align: center; padding: 2rem; color: #666;">No orders found.</p>
            </div>
        `;
        return;
    }

    const tableHTML = `
        <div class="orders-table">
            <table>
                <thead>
                    <tr>
                        <th>Order #</th>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${filteredOrders.map(order => `
                        <tr>
                            <td><strong>${order.orderNumber}</strong></td>
                            <td>${formatDate(order.orderDate)}</td>
                            <td>
                                <div>${order.customerName}</div>
                                <small style="color: #666;">${order.customerEmail}</small><br>
                                <small style="color: #666;">${order.customerPhone}</small>
                            </td>
                            <td>${order.productName}</td>
                            <td>${order.quantity}</td>
                            <td><strong>₹${order.totalAmount}</strong></td>
                            <td>
                                <span class="order-status status-${order.orderStatus || 'pending'}">
                                    ${(order.orderStatus || 'pending').replace('_', ' ')}
                                </span>
                            </td>
                            <td>
                                <div class="order-actions">
                                    <button onclick="viewOrderDetails('${order.id}')" class="btn btn-primary btn-sm">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                    <button onclick="updateOrderStatus('${order.id}')" class="btn btn-secondary btn-sm">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;

    container.innerHTML = tableHTML;
}

// Update orders statistics
function updateOrdersStats() {
    const totalOrders = allOrders.length;
    const pendingOrders = allOrders.filter(order => order.orderStatus === 'pending' || !order.orderStatus).length;
    const completedOrders = allOrders.filter(order => order.orderStatus === 'delivered').length;
    const totalRevenue = allOrders.reduce((total, order) => total + (order.totalAmount || 0), 0);

    document.getElementById('total-orders').textContent = totalOrders;
    document.getElementById('pending-orders').textContent = pendingOrders;
    document.getElementById('completed-orders').textContent = completedOrders;
    document.getElementById('total-revenue').textContent = `₹${totalRevenue}`;
}

// Filter orders by status
function filterOrders() {
    const statusFilter = document.getElementById('order-status-filter').value;
    const searchTerm = document.getElementById('order-search').value.toLowerCase();

    filteredOrders = allOrders.filter(order => {
        const matchesStatus = statusFilter === 'all' || (order.orderStatus || 'pending') === statusFilter;
        const matchesSearch = !searchTerm || 
            order.orderNumber.toLowerCase().includes(searchTerm) ||
            order.customerName.toLowerCase().includes(searchTerm) ||
            order.customerEmail.toLowerCase().includes(searchTerm) ||
            order.productName.toLowerCase().includes(searchTerm);
        
        return matchesStatus && matchesSearch;
    });

    displayOrders();
}

// Search orders
function searchOrders() {
    filterOrders(); // Reuse the filter function as it handles both filtering and searching
}

// View order details in modal
function viewOrderDetails(orderId) {
    const order = allOrders.find(o => o.id === orderId);
    if (!order) return;

    const modalHTML = `
        <div id="orderDetailsModal" class="modal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        ">
            <div class="modal-content" style="
                background: white;
                padding: 2rem;
                border-radius: 15px;
                max-width: 600px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
            ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h3>Order Details - ${order.orderNumber}</h3>
                    <button onclick="closeOrderDetailsModal()" style="
                        background: none;
                        border: none;
                        font-size: 1.5rem;
                        cursor: pointer;
                    ">×</button>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                    <div>
                        <h4>Customer Information</h4>
                        <p><strong>Name:</strong> ${order.customerName}</p>
                        <p><strong>Email:</strong> ${order.customerEmail}</p>
                        <p><strong>Phone:</strong> ${order.customerPhone}</p>
                        <p><strong>Shipping Address:</strong><br>${order.shippingAddress.replace(/\n/g, '<br>')}</p>
                        ${order.orderNotes ? `<p><strong>Notes:</strong> ${order.orderNotes}</p>` : ''}
                    </div>

                    <div>
                        <h4>Order Information</h4>
                        <p><strong>Order Date:</strong> ${formatDate(order.orderDate)}</p>
                        <p><strong>Product:</strong> ${order.productName}</p>
                        <p><strong>Unit Price:</strong> ₹${order.unitPrice}</p>
                        <p><strong>Quantity:</strong> ${order.quantity}</p>
                        <p><strong>Total Amount:</strong> <span style="color: #e74c3c; font-size: 1.2rem; font-weight: bold;">₹${order.totalAmount}</span></p>
                        <p><strong>Status:</strong> 
                            <span class="order-status status-${order.orderStatus || 'pending'}">
                                ${(order.orderStatus || 'pending').replace('_', ' ')}
                            </span>
                        </p>
                    </div>
                </div>

                <div style="margin-top: 2rem; text-align: center;">
                    <button onclick="updateOrderStatus('${order.id}')" class="btn btn-primary">
                        Update Order Status
                    </button>
                    <button onclick="contactCustomer('${order.customerPhone}', '${order.orderNumber}')" class="btn btn-success">
                        Contact Customer
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Close order details modal
function closeOrderDetailsModal() {
    const modal = document.getElementById('orderDetailsModal');
    if (modal) {
        modal.remove();
    }
}

// Update order status
function updateOrderStatus(orderId) {
    const order = allOrders.find(o => o.id === orderId);
    if (!order) return;

    const modalHTML = `
        <div id="statusUpdateModal" class="modal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        ">
            <div class="modal-content" style="
                background: white;
                padding: 2rem;
                border-radius: 15px;
                max-width: 400px;
                width: 90%;
            ">
                <h3>Update Order Status</h3>
                <p><strong>Order:</strong> ${order.orderNumber}</p>
                <p><strong>Customer:</strong> ${order.customerName}</p>
                
                <div class="form-group">
                    <label for="newStatus">New Status:</label>
                    <select id="newStatus" style="width: 100%; padding: 0.5rem; margin: 0.5rem 0;">
                        <option value="pending" ${(order.orderStatus || 'pending') === 'pending' ? 'selected' : ''}>Pending</option>
                        <option value="processing" ${order.orderStatus === 'processing' ? 'selected' : ''}>Processing</option>
                        <option value="shipped" ${order.orderStatus === 'shipped' ? 'selected' : ''}>Shipped</option>
                        <option value="delivered" ${order.orderStatus === 'delivered' ? 'selected' : ''}>Delivered</option>
                        <option value="cancelled" ${order.orderStatus === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                    </select>
                </div>

                <div style="margin-top: 1.5rem; text-align: center;">
                    <button onclick="saveOrderStatus('${orderId}')" class="btn btn-primary">
                        Update Status
                    </button>
                    <button onclick="closeStatusUpdateModal()" class="btn btn-secondary">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Save order status
async function saveOrderStatus(orderId) {
    const newStatus = document.getElementById('newStatus').value;
    
    try {
        await db.collection('product_orders').doc(orderId).update({
            orderStatus: newStatus,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Update local data
        const orderIndex = allOrders.findIndex(o => o.id === orderId);
        if (orderIndex !== -1) {
            allOrders[orderIndex].orderStatus = newStatus;
        }

        // Refresh display
        filterOrders();
        updateOrdersStats();
        closeStatusUpdateModal();
        closeOrderDetailsModal();

        alert('Order status updated successfully!');
    } catch (error) {
        console.error('Error updating order status:', error);
        alert('Error updating order status. Please try again.');
    }
}

// Close status update modal
function closeStatusUpdateModal() {
    const modal = document.getElementById('statusUpdateModal');
    if (modal) {
        modal.remove();
    }
}

// Contact customer via WhatsApp
function contactCustomer(phone, orderNumber) {
    const message = `Hi! This is regarding your order ${orderNumber} from Lavanya Foundation. We wanted to update you on your order status.`;
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Format date helper function
function formatDate(timestamp) {
    if (!timestamp) return 'N/A';
    
    let date;
    if (timestamp.toDate) {
        // Firestore timestamp
        date = timestamp.toDate();
    } else if (timestamp.seconds) {
        // Firestore timestamp object
        date = new Date(timestamp.seconds * 1000);
    } else {
        // Regular date
        date = new Date(timestamp);
    }
    
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
} 