import Admin_General_Setting from "../layouts/AdminGeneralSetting";
import "../styles/admin.css";

const Admin = () => {
  return (
    <div className="h-full ">
         <div class="admin-container">
        {/* <!-- Sidebar --> */}
        <div class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h2><i class="fas fa-shield-alt"></i> Admin Panel</h2>
                <p>Lavanya Foundation</p>
            </div>
            
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#dashboard" class="nav-link active" data-section="dashboard">
                        <i class="fas fa-tachometer-alt"></i>
                        Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#general" class="nav-link" data-section="general">
                        <i class="fas fa-cog"></i>
                        General Settings
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#home" class="nav-link" data-section="home">
                        <i class="fas fa-home"></i>
                        Home Section
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#about" class="nav-link" data-section="about">
                        <i class="fas fa-info-circle"></i>
                        About Section
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#projects" class="nav-link" data-section="projects">
                        <i class="fas fa-project-diagram"></i>
                        Key Initiatives
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#events" class="nav-link" data-section="events">
                        <i class="fas fa-calendar-alt"></i>
                        Events & Activities
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#shop" class="nav-link" data-section="shop">
                        <i class="fas fa-shopping-cart"></i>
                        Support Products
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#orders" class="nav-link" data-section="orders">
                        <i class="fas fa-receipt"></i>
                        Product Orders
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link" data-section="contact">
                        <i class="fas fa-address-book"></i>
                        Contact Information
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#volunteers" class="nav-link" data-section="volunteers">
                        <i class="fas fa-users"></i>
                        Volunteer Applications
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#donations" class="nav-link" data-section="donations">
                        <i class="fas fa-hand-holding-heart"></i>
                        Donations
                    </a>
                </li>
            </ul>
        </div>

        {/* <!-- Main Content --> */}
        <div class="main-content">
            {/* <div class="header">
                <h1 id="section-title">Dashboard</h1>
                <button class="logout-btn" onclick="logout()">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </button>
            </div> */}

            {/* <!-- Dashboard Section --> */}
            {/* <div id="dashboard" class="content-section">
                <div class="section-header">
                    <h3>Dashboard Overview</h3>
                </div>
                <div class="section-content">
                    <div class="cards-grid">
                        <div class="card-item">
                            <h4>Total Volunteers Applications</h4>
                            <p id="total-volunteers">Loading...</p>
                        </div>
                        <div class="card-item">
                            <h4>Total Donations</h4>
                            <p id="total-donations">Loading...</p>
                        </div>
                        <div class="card-item">
                            <h4>Active Events</h4>
                            <p id="active-events">Loading...</p>
                        </div>
                        <div class="card-item">
                            <h4>Products Sold</h4>
                            <p id="products-sold">Loading...</p>
                        </div>
                    </div>
                    
                    <div class="alert alert-success">
                        <strong>Welcome!</strong> You can customize all aspects of your website from this admin panel.
                    </div>
                </div>
            </div> */}

               
                <Admin_General_Setting/>
            {/* <!-- Home Section --> */}
            {/* <!-- General Settings Section --> */}
            {/* <div id="general" class="content-section" style="display: none;">
                <div class="section-header">
                    <h3>General Settings</h3>
                </div>
                <div class="section-content">
                    <form id="general-form">
                        <div class="form-grid">
                            <div class="form-group">
                                <label for="site-title">Website Title</label>
                                <input type="text" id="site-title" name="siteTitle" placeholder="Lavanya Foundation - Transforming Lives Together">
                            </div>
                            <div class="form-group">
                                <label for="logo-text">Logo Text</label>
                                <input type="text" id="logo-text" name="logoText" placeholder="Lavanya Foundation">
                            </div>
                            <div class="form-group">
                                <label for="favicon-url">Favicon URL</label>
                                <input type="url" id="favicon-url" name="faviconUrl" placeholder="https://example.com/favicon.ico">
                                <small class="form-text">Enter the URL of your favicon (16x16 or 32x32 px, .ico, .png, or .jpg format)</small>
                                <img id="favicon-url-preview" class="image-preview" style="display: none; max-width: 32px; max-height: 32px;">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Save General Settings</button>
                    </form>
                </div>
            </div> */}

            {/* <!-- Home Section --> */}
            {/* <div id="home" class="content-section" style="display: none;">
                <div class="section-header">
                    <h3>Home Section Customization</h3>
                </div>
                <div class="section-content">
                    <form id="home-form">
                        <div class="form-grid">
                            <div class="form-group">
                                <label for="hero-title">Hero Title</label>
                                <input type="text" id="hero-title" name="heroTitle" placeholder="Transforming Lives Together">
                            </div>
                            <div class="form-group">
                                <label for="hero-subtitle">Hero Subtitle</label>
                                <textarea id="hero-subtitle" name="heroSubtitle" placeholder="Join Lavanya Foundation in creating a better world through compassion, action, and unity"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="hero-image">Hero Background Image URL</label>
                                <input type="url" id="hero-image" name="heroImage" placeholder="https://example.com/image.jpg">
                                <small class="form-text">Enter the URL of your hero background image</small>
                                <img id="hero-image-preview" class="image-preview" style="display: none;">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Save Home Settings</button>
                    </form>
                </div>
            </div> */}

            {/* <!-- About Section --> */}
            {/* <div id="about" class="content-section" style="display: none;">
                <div class="section-header">
                    <h3>About Section Customization</h3>
                </div>
                <div class="section-content">
                    <form id="about-form">
                        <div class="form-grid">
                            <div class="form-group">
                                <label for="mission-title">Mission Title</label>
                                <input type="text" id="mission-title" name="missionTitle" placeholder="Our Mission">
                            </div>
                            <div class="form-group">
                                <label for="mission-text">Mission Text</label>
                                <textarea id="mission-text" name="missionText" placeholder="At Lavanya Foundation, we believe in the power of collective action..."></textarea>
                            </div>
                            <div class="form-group">
                                <label for="vision-title">Vision Title</label>
                                <input type="text" id="vision-title" name="visionTitle" placeholder="Our Vision">
                            </div>
                            <div class="form-group">
                                <label for="vision-text">Vision Text</label>
                                <textarea id="vision-text" name="visionText" placeholder="We envision a world where every individual has access..."></textarea>
                            </div>
                            <div class="form-group">
                                <label for="about-image">About Section Image URL</label>
                                <input type="url" id="about-image" name="aboutImage" placeholder="https://example.com/image.jpg">
                                <small class="form-text">Enter the URL of your about section image</small>
                                <img id="about-image-preview" class="image-preview" style="display: none;">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Save About Settings</button>
                    </form>
                </div>
            </div> */}

            {/* <!-- Projects Section --> */}
            {/* <div id="projects" class="content-section" style="display: none;">
                <div class="section-header">
                    <h3>Key Initiatives Management</h3>
                    <button class="btn btn-success" onclick="addNewProject()">
                        <i class="fas fa-plus"></i> Add New Initiative
                    </button>
                </div>
                <div class="section-content">
                    <div id="projects-list">
                        <!-- Projects will be loaded here -->
                    </div>
                </div>
            </div> */}

            {/* <!-- Events Section --> */}
            {/* <div id="events" class="content-section" style="display: none;">
                <div class="section-header">
                    <h3>Events & Activities Management</h3>
                    <button class="btn btn-success" onclick="addNewEvent()">
                        <i class="fas fa-plus"></i> Add New Event
                    </button>
                </div>
                <div class="section-content">
                    <div id="events-list">
                        <!-- Events will be loaded here -->
                    </div>
                </div>
            </div> */}

            {/* <!-- Shop Section --> */}
            {/* <div id="shop" class="content-section" style="display: none;">
                <div class="section-header">
                    <h3>Support Products Management</h3>
                    <button class="btn btn-success" onclick="addNewProduct()">
                        <i class="fas fa-plus"></i> Add New Product
                    </button>
                </div>
                <div class="section-content">
                    <div id="products-list">
                        <!-- Products will be loaded here -->
                    </div>
                </div>
            </div> */}

            {/* <!-- Orders Section --> */}
            {/* <div id="orders" class="content-section" style="display: none;">
                <div class="section-header">
                    <h3>Product Orders Management</h3>
                    <div class="section-stats">
                        <div class="stat-card">
                            <div class="stat-number" id="total-orders">0</div>
                            <div class="stat-label">Total Orders</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number" id="pending-orders">0</div>
                            <div class="stat-label">Pending Orders</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number" id="completed-orders">0</div>
                            <div class="stat-label">Completed Orders</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number" id="total-revenue">₹0</div>
                            <div class="stat-label">Total Revenue</div>
                        </div>
                    </div>
                </div>
                <div class="section-content">
                    <div class="orders-filters" style="margin-bottom: 1.5rem;">
                        <select id="order-status-filter" onchange="filterOrders()" style="padding: 0.5rem; margin-right: 1rem; border: 1px solid #ddd; border-radius: 5px;">
                            <option value="all">All Orders</option>
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                        <input type="text" id="order-search" placeholder="Search by order number or customer name" onkeyup="searchOrders()" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; width: 300px;">
                    </div>
                    <div id="orders-list">
                        <!-- Orders will be loaded here -->
                    </div>
                </div>
            </div> */}

            {/* <!-- Contact Section --> */}
            {/* <div id="contact" class="content-section" style="display: none;">
                <div class="section-header">
                    <h3>Contact Information</h3>
                </div>
                <div class="section-content">
                    <form id="contact-form">
                        <div class="form-grid">
                            <div class="form-group">
                                <label for="contact-address">Address</label>
                                <textarea id="contact-address" name="address" placeholder="123 Community Center Road, Pune, Maharashtra 411001"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="contact-phone">Phone Number</label>
                                <input type="tel" id="contact-phone" name="phone" placeholder="+91 98765 43210">
                            </div>
                            <div class="form-group">
                                <label for="contact-email">Email</label>
                                <input type="email" id="contact-email" name="email" placeholder="info@lavanyafoundation.org">
                            </div>
                            <div class="form-group">
                                <label for="contact-hours">Office Hours</label>
                                <input type="text" id="contact-hours" name="hours" placeholder="Monday - Saturday: 9:00 AM - 6:00 PM">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Save Contact Information</button>
                    </form>
                </div>
            </div> */}

            {/* <!-- Volunteers Section --> */}
            {/* <div id="volunteers" class="content-section" style="display: none;">
                <div class="section-header">
                    <h3>Volunteer Applications</h3>
                </div>
                <div class="section-content">
                    <div id="volunteers-list">
                        <!-- Volunteer applications will be loaded here -->
                    </div>
                </div>
            </div> */}
 
            {/* <div id="donations" class="content-section" style="display: none;">
                <div class="section-header">
                    <h3>Donation Records</h3>
                </div>
                <div class="section-content">
                    <div id="donations-list">
                         
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    </div>
  )
}

export default Admin
 