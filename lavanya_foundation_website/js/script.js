// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    loadContent();
    setupEventListeners();
    setupRealtimeListeners();
});

// Initialize website functionality
function initializeWebsite() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        }
    });
}

// Load content from Firebase or localStorage
function loadContent() {
    loadIssues();
    loadGallery();
    loadPartners();
    loadTeamMembers();
    loadChapters();
    loadImpactStories();
    animateCounters();
}

// Enhanced data loading with Firebase support
async function loadDataWithFirebase(key, defaultData) {
    try {
        if (window.lavanyaFoundation?.loadFromStorage) {
            const data = await window.lavanyaFoundation.loadFromStorage(key);
            return data || defaultData;
        } else {
            // Fallback to localStorage if Firebase not available
            return JSON.parse(localStorage.getItem(key)) || defaultData;
        }
    } catch (error) {
        console.warn(`Failed to load ${key}, using defaults:`, error);
        return defaultData;
    }
}

// Default data
const defaultData = {
    issues: [
        {
            icon: 'fas fa-leaf',
            title: 'Climate Change',
            description: 'Fighting global warming through sustainable practices and environmental education.'
        },
        {
            icon: 'fas fa-graduation-cap',
            title: 'Education',
            description: 'Providing quality education and learning opportunities for underprivileged children.'
        },
        {
            icon: 'fas fa-tint',
            title: 'Clean Water',
            description: 'Ensuring access to clean and safe drinking water for all communities.'
        },
        {
            icon: 'fas fa-heart',
            title: 'Healthcare',
            description: 'Delivering essential healthcare services to remote and underserved areas.'
        },
        {
            icon: 'fas fa-home',
            title: 'Housing',
            description: 'Building sustainable housing solutions for homeless and displaced families.'
        },
        {
            icon: 'fas fa-seedling',
            title: 'Food Security',
            description: 'Combating hunger through sustainable agriculture and food distribution programs.'
        }
    ],
    gallery: [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500',
            title: 'Tree Plantation Drive',
            category: 'environment'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500',
            title: 'School Building Project',
            category: 'education'
        },
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500',
            title: 'Community Health Camp',
            category: 'community'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=500',
            title: 'Clean Water Initiative',
            category: 'environment'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500',
            title: 'Children Education Program',
            category: 'education'
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=500',
            title: 'Village Development',
            category: 'community'
        }
    ],
    partners: [
        {
            name: 'United Nations',
            logo: 'https://via.placeholder.com/150x80/2980b9/ffffff?text=UN',
            website: 'https://un.org'
        },
        {
            name: 'World Bank',
            logo: 'https://via.placeholder.com/150x80/27ae60/ffffff?text=WB',
            website: 'https://worldbank.org'
        },
        {
            name: 'UNICEF',
            logo: 'https://via.placeholder.com/150x80/3498db/ffffff?text=UNICEF',
            website: 'https://unicef.org'
        },
        {
            name: 'WHO',
            logo: 'https://via.placeholder.com/150x80/e74c3c/ffffff?text=WHO',
            website: 'https://who.int'
        },
        {
            name: 'Red Cross',
            logo: 'https://via.placeholder.com/150x80/c0392b/ffffff?text=RED+CROSS',
            website: 'https://redcross.org'
        },
        {
            name: 'Oxfam',
            logo: 'https://via.placeholder.com/150x80/16a085/ffffff?text=OXFAM',
            website: 'https://oxfam.org'
        }
    ],
    teamMembers: [
        {
            name: 'Priya Sharma',
            role: 'Founder & CEO',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
            bio: 'Passionate about creating sustainable change and empowering communities worldwide.'
        },
        {
            name: 'Rajesh Kumar',
            role: 'Program Director',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
            bio: 'Leading our environmental and educational initiatives across India.'
        },
        {
            name: 'Anita Patel',
            role: 'Community Outreach Manager',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
            bio: 'Building bridges between communities and creating lasting partnerships.'
        },
        {
            name: 'Vikram Singh',
            role: 'Operations Manager',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
            bio: 'Ensuring efficient execution of all foundation programs and initiatives.'
        },
        {
            name: 'Sneha Gupta',
            role: 'Finance Director',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300',
            bio: 'Managing financial resources to maximize impact and transparency.'
        },
        {
            name: 'Amit Verma',
            role: 'Technology Lead',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300',
            bio: 'Leveraging technology to scale our impact and reach more communities.'
        }
    ],
    chapters: [
        {
            name: 'Delhi Chapter',
            location: 'New Delhi, India',
            image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400',
            description: 'Our headquarters managing operations across North India with focus on urban development.',
            contact: 'delhi@lavanyafoundation.org'
        },
        {
            name: 'Mumbai Chapter',
            location: 'Mumbai, Maharashtra',
            image: 'https://images.unsplash.com/photo-1595659074919-d3ef7b95a295?w=400',
            description: 'Focusing on slum rehabilitation and coastal environmental protection.',
            contact: 'mumbai@lavanyafoundation.org'
        },
        {
            name: 'Bangalore Chapter',
            location: 'Bangalore, Karnataka',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
            description: 'Technology-driven solutions for education and sustainable development.',
            contact: 'bangalore@lavanyafoundation.org'
        },
        {
            name: 'Chennai Chapter',
            location: 'Chennai, Tamil Nadu',
            image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400',
            description: 'Coastal conservation and fishermen community empowerment programs.',
            contact: 'chennai@lavanyafoundation.org'
        }
    ],
    impactStories: [
        {
            title: 'Transforming Rural Education',
            image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400',
            text: 'Through our school building initiative, we have constructed 50 schools in remote villages, providing education to over 15,000 children who previously had no access to formal learning.'
        },
        {
            title: 'Clean Water for All',
            image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400',
            text: 'Our water purification systems have brought clean drinking water to 25 communities, reducing waterborne diseases by 80% and improving overall health outcomes.'
        },
        {
            title: 'Environmental Restoration',
            image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400',
            text: 'We have planted over 100,000 trees across degraded lands, helping restore ecosystems and creating sustainable livelihoods for local communities.'
        }
    ]
};

// Load issues
async function loadIssues() {
    const issues = await loadDataWithFirebase('issues', defaultData.issues);
    const issuesGrid = document.getElementById('issues-grid');
    
    if (issuesGrid) {
        issuesGrid.innerHTML = issues.map(issue => `
            <div class="issue-card">
                <div class="issue-icon">
                    <i class="${issue.icon}"></i>
                </div>
                <h3 class="issue-title">${issue.title}</h3>
                <p class="issue-description">${issue.description}</p>
            </div>
        `).join('');
    }
}

// Load gallery
async function loadGallery() {
    const gallery = await loadDataWithFirebase('gallery', defaultData.gallery);
    const galleryGrid = document.getElementById('gallery-grid');
    
    if (galleryGrid) {
        galleryGrid.innerHTML = gallery.map(item => `
            <div class="gallery-item" data-category="${item.category}" onclick="openLightbox('${item.src}', '${item.title}')">
                <img src="${item.src}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                    <div class="gallery-title">${item.title}</div>
                </div>
            </div>
        `).join('');
    }

    // Setup gallery filters
    setupGalleryFilters();
}

// Setup gallery filters
function setupGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Lightbox functionality
function openLightbox(src, title) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');

    lightboxImg.src = src;
    lightboxCaption.textContent = title;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Load partners
async function loadPartners() {
    const partners = await loadDataWithFirebase('partners', defaultData.partners);
    const partnersCarousel = document.getElementById('partners-carousel');
    
    if (partnersCarousel) {
        partnersCarousel.innerHTML = partners.map(partner => `
            <div class="partner-item">
                <img src="${partner.logo}" alt="${partner.name}" loading="lazy">
            </div>
        `).join('');
    }
}

// Load team members
async function loadTeamMembers() {
    const teamMembers = await loadDataWithFirebase('teamMembers', defaultData.teamMembers);
    const teamGrid = document.getElementById('team-grid');
    
    if (teamGrid) {
        teamGrid.innerHTML = teamMembers.map(member => `
            <div class="team-member">
                <img src="${member.image}" alt="${member.name}" class="member-image" loading="lazy">
                <h3 class="member-name">${member.name}</h3>
                <div class="member-role">${member.role}</div>
                <p class="member-bio">${member.bio}</p>
            </div>
        `).join('');
    }
}

// Load chapters
async function loadChapters() {
    const chapters = await loadDataWithFirebase('chapters', defaultData.chapters);
    const chaptersGrid = document.getElementById('chapters-grid');
    
    if (chaptersGrid) {
        chaptersGrid.innerHTML = chapters.map(chapter => `
            <div class="chapter-card">
                <img src="${chapter.image}" alt="${chapter.name}" class="chapter-image" loading="lazy">
                <div class="chapter-info">
                    <h3 class="chapter-name">${chapter.name}</h3>
                    <div class="chapter-location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${chapter.location}
                    </div>
                    <p class="chapter-description">${chapter.description}</p>
                    <div class="chapter-contact">
                        <i class="fas fa-envelope"></i>
                        ${chapter.contact}
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Load impact stories
async function loadImpactStories() {
    const stories = await loadDataWithFirebase('impactStories', defaultData.impactStories);
    const storiesContainer = document.getElementById('impact-stories');
    
    if (storiesContainer) {
        storiesContainer.innerHTML = stories.map(story => `
            <div class="story-card">
                <img src="${story.image}" alt="${story.title}" class="story-image" loading="lazy">
                <h3 class="story-title">${story.title}</h3>
                <p class="story-text">${story.text}</p>
            </div>
        `).join('');
    }
}

// Animate counters
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Lower is faster

    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => countUp(counter), 1);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };

    // Intersection Observer to trigger animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                countUp(counter);
                observer.unobserve(counter);
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Lightbox close
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightbox = document.getElementById('lightbox');

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with email: ${email}`);
            e.target.reset();
        });
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}

// Setup real-time Firebase listeners
function setupRealtimeListeners() {
    // Wait for Firebase to be available
    setTimeout(() => {
        if (window.lavanyaFoundation?.listenToUpdates) {
            console.log('🔄 Setting up real-time listeners...');
            
            // Listen for gallery updates
            window.lavanyaFoundation.listenToUpdates('gallery', (data) => {
                console.log('🖼️ Gallery updated in real-time');
                loadGallery();
            });
            
            // Listen for team updates
            window.lavanyaFoundation.listenToUpdates('teamMembers', (data) => {
                console.log('👥 Team members updated in real-time');
                loadTeamMembers();
            });
            
            // Listen for issues updates
            window.lavanyaFoundation.listenToUpdates('issues', (data) => {
                console.log('📋 Issues updated in real-time');
                loadIssues();
            });
            
            // Listen for partners updates
            window.lavanyaFoundation.listenToUpdates('partners', (data) => {
                console.log('🤝 Partners updated in real-time');
                loadPartners();
            });
            
            // Listen for chapters updates
            window.lavanyaFoundation.listenToUpdates('chapters', (data) => {
                console.log('📍 Chapters updated in real-time');
                loadChapters();
            });
            
            // Listen for impact stories updates
            window.lavanyaFoundation.listenToUpdates('impactStories', (data) => {
                console.log('💫 Impact stories updated in real-time');
                loadImpactStories();
            });
            
            console.log('✅ Real-time listeners activated');
        } else {
            console.warn('⚠️ Firebase not available for real-time updates');
        }
    }, 2000); // Wait 2 seconds for Firebase to initialize
}

// Utility functions for admin panel
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// Export functions for admin panel (merge with existing Firebase functions)
window.lavanyaFoundation = Object.assign(window.lavanyaFoundation || {}, {
    saveToLocalStorage,
    getFromLocalStorage,
    defaultData,
    loadContent
});
