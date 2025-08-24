import "../styles/admin.css";

const Admin_General_Setting = () => {
  return (
    <div id="general" className="content-section   ">
      <div className="section-header">
        <h3>General Settings</h3>
      </div>
      <div className="section-content">
        <form id="general-form">
          <div className="form-grid">
            <div className="form-group">
              <label id="site-title">Website Title</label>
              <input
                type="text"
                id="site-title"
                name="siteTitle"
                placeholder="Lavanya Foundation - Transforming Lives Together"
              />
            </div>
            <div className="form-group">
              <label id="logo-text">Logo Text</label>
              <input
                type="text"
                id="logo-text"
                name="logoText"
                placeholder="Lavanya Foundation"
              />
            </div>
            <div className="form-group">
              <label id="favicon-url">Favicon URL</label>
              <input
                type="url"
                id="favicon-url"
                name="faviconUrl"
                placeholder="https://example.com/favicon.ico"
              />
              <small className="form-text">
                Enter the URL of your favicon (16x16 or 32x32 px, .ico, .png, or
                .jpg format)
              </small>
              <img
                id="favicon-url-preview"
                className="image-preview hidden max-w-[32px] max-h-[32px]"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Save General Settings
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin_General_Setting;
