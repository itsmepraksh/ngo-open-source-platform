 import "../styles/index.css" 

const Volunteer = () => {
  return (
    <section id="volunteer" className="section">
        <div className="container">
            <h2 className="section-title">Volunteer With Us</h2>
            <div className="volunteer-form fade-in">
                <h3 className="text-center mb-2rem text-[#2c3e50]">Join Our Movement</h3>
                <form id="volunteerForm">
                    <div className="volunteer-form-grid">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" id="name" name="name" required/>
                        </div>
                        
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" id="email" name="email" required/>
                        </div>
                        
                        <div className="form-group">
                            <label >Phone Number</label>
                            <input type="tel" id="phone" name="phone" required/>
                        </div>
                        
                        <div className="form-group">
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
                        
                        <div className="form-group">
                            <label >Availability</label>
                            <select id="availability" name="availability" required>
                                <option value="">Select availability</option>
                                <option value="weekends">Weekends Only</option>
                                <option value="weekdays">Weekdays</option>
                                <option value="flexible">Flexible</option>
                                <option value="events-only">Events Only</option>
                            </select>
                        </div>
                        
                        <div className="form-group form-group-full">
                            <label >Tell us about yourself</label>
                            <textarea id="message" name="message" rows="4" placeholder="Share your motivation, skills, or any questions you have..."></textarea>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-full mt-[1rem]">Submit Application</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Volunteer