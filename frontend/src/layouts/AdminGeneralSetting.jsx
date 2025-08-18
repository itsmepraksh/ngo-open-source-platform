 

const AdminGeneralSetting = () => {
  return (
    <div>
      {/* style="display: none;" */}
         <div id="general" className="content-section hidden" >
                <div class="section-header">
                    <h3>General Settings</h3>
                </div>
                <div className="section-content">
                    {/* <form id="general-form">
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
                    </form> */}
                </div>
        </div> 
    </div>
  )
}

export default AdminGeneralSetting