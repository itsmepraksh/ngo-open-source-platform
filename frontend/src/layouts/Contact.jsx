import style from "../styles/Contact.module.css" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
 
import {useForm} from "react-hook-form"

const Contact = () => {


    let {register , reset , handleSubmit , formState:{errors}} = useForm();

    const submitHandler = (data)=>{
        console.log(data)
    }
    return (
        <section id="contact" className={`${style.section}`}>
            <div className={`${style.container}`}>
                <h2 className={`${style.section_title}`}>Contact Us</h2>
                <div className={`${style.contact_grid}`}>
                    <div className={`${style.contact_info} ${style.a_part}`}>

                        <h3 className={`${style.Get_touch_title}`}>Get in Touch</h3>

                        <div className={style.contact_item}>
                            <FontAwesomeIcon icon={faLocationDot} className={style.form_icons} />

                            <div>
                                <strong>Address</strong><br />
                                <span id="contactAddress">123 Community Center Road<br /> Pune, Maharashtra 411001</span>
                            </div>
                        </div>

                        <div className={style.contact_item}>
                            <FontAwesomeIcon icon={faPhone} className={style.form_icons} />
                            <div>
                                <strong>Phone</strong><br />
                                <span id="contactPhone">+91 98765 43210</span>
                            </div>
                        </div>

                        <div className={style.contact_item}>
                            <FontAwesomeIcon icon={faEnvelope} className={style.form_icons} />
                            <div>
                                <strong>Email</strong><br />
                                <span id="contactEmail">info@lavanyafoundation.org</span>
                            </div>
                        </div>

                        <div className={style.contact_item}>
                            <FontAwesomeIcon icon={faClock} className={style.form_icons} />
                            <div>
                                <strong>Office Hours</strong><br />
                                <span id="contactHours">Monday - Saturday: 9:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.contactWrapper} ${style.b_part}`}>
                        <form id="contactForm" onSubmit={handleSubmit(submitHandler)} className={style.contactForm}>
                            <h3 className={style.formTitle}>Send us a Message</h3>

                            <div className={style.formGroup}>
                                <label htmlFor="contactName">Name</label>
                                <input {...register("name")} type="text" id="contactName" name="name" required />
                            </div>

                            <div className={style.formGroup}>
                                <label htmlFor="contactEmailInput">Email</label>
                                <input {...register("email")} type="email" id="contactEmailInput" name="email" required />
                            </div>

                            <div className={style.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <input {...register("subject")} type="text" id="subject" name="subject" required />
                            </div>

                            <div className={style.formGroup}>
                                <label htmlFor="contactMessage">Message</label>
                                <textarea {...register("message")} id="contactMessage" name="message" rows="5" required></textarea>
                            </div>

                            <button type="submit" className={style.submitButton}>
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className={`${style.mapContainer} ${style.c_part}`}>
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