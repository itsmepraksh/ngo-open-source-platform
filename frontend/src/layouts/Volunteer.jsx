import { useForm } from "react-hook-form"
import style from "../styles/Volunteer.module.css" 
import { toast } from "react-toastify"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../config/firebase"


const Volunteer = () => {


    const {register , handleSubmit , reset , formState:{errors}} = useForm()

    const submitHandler = async ({volName , volEmail , volInterest , volMessage , volPhoneNo, volTime})=>{
        // console.log(data)

        try {
            
            await addDoc(collection(db,"volunteer"),{
                vol_name :volName,
                vol_email : volEmail,
                vol_interest : volInterest,
                vol_message : volMessage,
                vol_phone_no : volPhoneNo,
                vol_time : volTime,
                vol_status : false,
                createdAt : serverTimestamp()
            })

            toast.success("Form submitted")
            reset()

        } catch (err) {
            toast.error(err.message || "something got wrong..")
            console.error("Form Error ",err)
        }
    }

  return (
    <section id="volunteer" className={`${style.volunteer_section}`}>
        <div className={`${style.container}`}>
            <h2 className={`${style.section_title}`}>Volunteer With Us</h2>
            {/*fade-in  */}
            <div className={`${style.volunteer_form}`}>
                <h3 className={`${style.form_title}`}>Join Our Movement</h3>
                <form onSubmit={handleSubmit(submitHandler)} id="volunteerForm">

                    <div className={`${style.volunteer_form}`}>
                        <div className={`${style.form_group}`}>
                            <label>Full Name</label>
                            <input {...register("volName")} type="text" id="name" name="volName" required/>
                        </div>
                        
                        <div className={`${style.form_group}`}>
                            <label>Email Address</label>
                            <input {...register("volEmail")} type="email" id="email" name="volEmail" required/>
                        </div>
                        
                        <div className={`${style.form_group}`}>
                            <label >Phone Number</label>
                            <input {...register("volPhoneNo")} type="tel" id="phone" name="volPhoneNo" required/>
                        </div>
                        
                        <div className={`${style.form_group}`}>
                            <label >Area of Interest</label>
                            <select {...register("volInterest")} defaultValue="" id="interest" name="volInterest" required>
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
                            <select {...register("volTime")} id="availability" name="volTime" required>
                                <option value="">Select availability</option>
                                <option value="weekends">Weekends Only</option>
                                <option value="weekdays">Weekdays</option>
                                <option value="flexible">Flexible</option>
                                <option value="events-only">Events Only</option>
                            </select>
                        </div>
                        
                        <div className={`${style.form_group_full}`}>
                            <label >Tell us about yourself</label>
                            <textarea {...register("volMessage")} id="message" name="volMessage" rows="4" placeholder="Share your motivation, skills, or any questions you have..."></textarea>
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