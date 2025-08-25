import React from 'react'

const Admin_Contact_Section = () => {
  return (
    // <!-- Contact Section -->
            <div id="contact" className="content-section" >
                <div className="section-header">
                    <h3>Contact Information</h3>
                </div>
                <div className="section-content">
                    <form id="contact-form">
                        <div className="form-grid">
                            <div className="form-group">
                                <label for="contact-address">Address</label>
                                <textarea id="contact-address" name="address" placeholder="123 Community Center Road, Pune, Maharashtra 411001"></textarea>
                            </div>
                            <div className="form-group">
                                <label for="contact-phone">Phone Number</label>
                                <input type="tel" id="contact-phone" name="phone" placeholder="+91 98765 43210"/>
                            </div>
                            <div className="form-group">
                                <label for="contact-email">Email</label>
                                <input type="email" id="contact-email" name="email" placeholder="info@lavanyafoundation.org"/>
                            </div>
                            <div className="form-group">
                                <label for="contact-hours">Office Hours</label>
                                <input type="text" id="contact-hours" name="hours" placeholder="Monday - Saturday: 9:00 AM - 6:00 PM"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Save Contact Information</button>
                    </form>
                </div>
            </div>

  )
}

export default Admin_Contact_Section