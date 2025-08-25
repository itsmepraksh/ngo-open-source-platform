 
import React from "react";

const Admin_About_Section = () => {
  return (
    // About Section
    <div id="about" className="content-section">
      <div className="section-header">
        <h3>About Section Customization</h3>
      </div>
      <div className="section-content">
        <form id="about-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="mission-title">Mission Title</label>
              <input
                type="text"
                id="mission-title"
                name="missionTitle"
                placeholder="Our Mission"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mission-text">Mission Text</label>
              <textarea
                id="mission-text"
                name="missionText"
                placeholder="At Lavanya Foundation, we believe in the power of collective action..."
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="vision-title">Vision Title</label>
              <input
                type="text"
                id="vision-title"
                name="visionTitle"
                placeholder="Our Vision"
              />
            </div>
            <div className="form-group">
              <label htmlFor="vision-text">Vision Text</label>
              <textarea
                id="vision-text"
                name="visionText"
                placeholder="We envision a world where every individual has access..."
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="about-image">About Section Image URL</label>
              <input
                type="url"
                id="about-image"
                name="aboutImage"
                placeholder="https://example.com/image.jpg"
              />
              <small className="form-text">
                Enter the URL of your about section image
              </small>
              <img
                id="about-image-preview"
                className="image-preview"
                style={{ display: "none" }}
                alt="About Preview"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Save About Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin_About_Section;
