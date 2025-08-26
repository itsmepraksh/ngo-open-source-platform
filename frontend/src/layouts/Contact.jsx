import style from "../styles/Contact.module.css"


const Contact = () => {
    return (
        <section id="contact" className={`${style.section}`}>
            <div className={`${style.container}`}>
                <h2 className={`${style.section_title}`}>Contact Us</h2>
                <div className={`${style.contact_grid}`}>
                    <div className={`${style.contact_info}`}>
                        {/* fade-in */}
                        <h3 className={`${style.Get_touch_title}`}>Get in Touch</h3>

                        <div className={style.contact_item}>
                            <FaMapMarkerAlt className={style.icon} />
                            <div>
                                <strong>Address</strong><br />
                                <span id="contactAddress">123 Community Center Road<br /> Pune, Maharashtra 411001</span>
                            </div>
                        </div>

                        <div className={style.contact_item}>
                            <FaPhone className={style.icon} />
                            <div>
                                <strong>Phone</strong><br />
                                <span id="contactPhone">+91 98765 43210</span>
                            </div>
                        </div>

                        <div className={style.contact_item}>
                            <FaEnvelope className={style.icon} />
                            <div>
                                <strong>Email</strong><br />
                                <span id="contactEmail">info@lavanyafoundation.org</span>
                            </div>
                        </div>

                        <div className={style.contact_item}>
                            <FaClock className={style.icon} />
                            <div>
                                <strong>Office Hours</strong><br />
                                <span id="contactHours">Monday - Saturday: 9:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                    </div>
                    {/* fade-in */}
                    <div className={style.contactWrapper}>
                        <form id="contactForm" className={style.contactForm}>
                            <h3 className={style.formTitle}>Send us a Message</h3>

                            <div className={style.formGroup}>
                                <label htmlFor="contactName">Name</label>
                                <input type="text" id="contactName" name="name" required />
                            </div>

                            <div className={style.formGroup}>
                                <label htmlFor="contactEmailInput">Email</label>
                                <input type="email" id="contactEmailInput" name="email" required />
                            </div>

                            <div className={style.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" required />
                            </div>

                            <div className={style.formGroup}>
                                <label htmlFor="contactMessage">Message</label>
                                <textarea id="contactMessage" name="message" rows="5" required></textarea>
                            </div>

                            <button type="submit" className={style.submitButton}>
                                Send Message
                            </button>
                        </form>
                    </div>


                    {/* <div className="map-container mt-[3rem]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156266!2d73.70997!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629794729807!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            className="border-[0] rounded-[15px]"

                            loading="lazy">
                        </iframe>
                    </div> */}
                    <div className={style.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156266!2d73.70997!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1629794729807!5m2!1sen!2sin"
                            className={style.mapIframe}
                            width="100%"
                            height="500"
                            loading="lazy"
                            allowFullScreen=""
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact