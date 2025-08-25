import React from "react";

const Admin_Home_Section = () => {
  return (
    //  <!-- Home Section -->
    <div id="home" className="content-section">
      <div className="section-header">
        <h3>Home Section Customization</h3>
      </div>
      <div className="section-content">
        <form id="home-form">
          <div className="form-grid">
            <div className="form-group">
              <label for="hero-title">Hero Title</label>
              <input
                type="text"
                id="hero-title"
                name="heroTitle"
                placeholder="Transforming Lives Together"
              />
            </div>
            <div className="form-group">
              <label for="hero-subtitle">Hero Subtitle</label>
              <textarea
                id="hero-subtitle"
                name="heroSubtitle"
                placeholder="Join Lavanya Foundation in creating a better world through compassion, action, and unity"
              ></textarea>
            </div>
            <div className="form-group">
              <label for="hero-image">Hero Background Image URL</label>
              <input
                type="url"
                id="hero-image"
                name="heroImage"
                placeholder="https://example.com/image.jpg"
              />
              <small className="form-text">
                Enter the URL of your hero background image
              </small>
              <img
                id="hero-image-preview"
                class="image-preview"
                className="display: none;"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Save Home Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin_Home_Section;
