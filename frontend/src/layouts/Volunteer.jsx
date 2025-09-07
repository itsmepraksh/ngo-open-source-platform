import style from "../styles/Volunteer.module.css" 


const Volunteer = () => {
  return (
    <section id="volunteer" className={`${style.volunteer_section}`}>
        <div className={`${style.container}`}>
            <h2 className={`${style.section_title}`}>Volunteer With Us</h2>
            {/*fade-in  */}
            <div className={`${style.volunteer_form}`}>
                <h3 className={`${style.form_title}`}>Join Our Movement</h3>
                <form id="volunteerForm">
                    <div className={`${style.volunteer_form}`}>
                        <div className={`${style.form_group}`}>
                            <label>Full Name</label>
                            <input type="text" id="name" name="name" required/>
                        </div>
                        
                        <div className={`${style.form_group}`}>
                            <label>Email Address</label>
                            <input type="email" id="email" name="email" required/>
                        </div>
                        
                        <div className={`${style.form_group}`}>
                            <label >Phone Number</label>
                            <input type="tel" id="phone" name="phone" required/>
                        </div>
                        
                        <div className={`${style.form_group}`}>
                            <label >Area of Interest</label>
                            <select id="interest" name="interest" required>
                                <option value="">Select an area</option>
                                <option value="food-distribution">Food Distribution</option>
                                <option value="environmental">Environmental Initiatives</option>
                                <option value="education">Education & Awareness</option>
                                <option value="fundraising">Fundraising</option>
                                <option value="admin">Administrative Support</option>
                            </select>
                        </div>
                        
                        <div className={`${style.form_group}`}>
                            <label >Availability</label>
                            <select id="availability" name="availability" required>
                                <option value="">Select availability</option>
                                <option value="weekends">Weekends Only</option>
                                <option value="weekdays">Weekdays</option>
                                <option value="flexible">Flexible</option>
                                <option value="events-only">Events Only</option>
                            </select>
                        </div>
                        
                        <div className={`${style.form_group_full}`}>
                            <label >Tell us about yourself</label>
                            <textarea id="message" name="message" rows="4" placeholder="Share your motivation, skills, or any questions you have..."></textarea>
                        </div>
                    </div>
                    
                    <button type="submit" className={`${style.submit_button}`}>Submit Application</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Volunteer