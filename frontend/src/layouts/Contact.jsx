import "../styles/index.css" 

const Contact = () => {
  return (
    <section id="contact" className="section">
        <div className="container">
            <h2 className="section-title">Contact Us</h2>
            <div className="contact-grid">
                <div className="contact-info fade-in">
                    <h3 className="mb-[2rem] text-[#2c3e50]">Get in Touch</h3>
                    
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>Address</strong><br/>
                            <span id="contactAddress">123 Community Center Road<br/>
                            Pune, Maharashtra 411001</span>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <div>
                            <strong>Phone</strong><br/>
                            <span id="contactPhone">+91 98765 43210</span>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <strong>Email</strong><br/>
                            <span id="contactEmail">info@lavanyafoundation.org</span>
                        </div>
                    </div>
                    
                    <div className="contact-item">
                        <i className="fas fa-clock"></i>
                        <div>
                            <strong>Office Hours</strong><br/>
                            <span id="contactHours">Monday - Saturday: 9:00 AM - 6:00 PM</span>
                        </div>
                    </div>
                </div>
                
                <div className="fade-in">
                    <form id="contactForm" className="bg-white p-[2rem] rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                        <h3 className="mb-[1.5rem]  text-[#2c3e50] ">Send us a Message</h3>
                        
                        <div className="form-group">
                            <label for="contactName">Name</label>
                            <input type="text" id="contactName" name="name" required/>
                        </div>
                        
                        <div className="form-group">
                            <label for="contactEmailInput">Email</label>
                            <input type="email" id="contactEmailInput" name="email" required/>
                        </div>
                        
                        <div className="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required/>
                        </div>
                        
                        <div className="form-group">
                            <label for="contactMessage">Message</label>
                            <textarea id="contactMessage" name="message" rows="5" required></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-primary w-full;">Send Message</button>
                    </form>
                </div>
            </div>
            
            <div className="map-container mt-[3rem]">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156266!2d73.70997!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629794729807!5m2!1sen!2sin"
                    width="100%" 
                    height="300" 
                    className="border-[0] rounded-[15px]" 
                     
                    loading="lazy">
                </iframe>
            </div>
        </div>
    </section>
  )
}

export default Contact