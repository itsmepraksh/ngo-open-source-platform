 
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";  

const Admin_Events_Form = () => { 

  const navigate = useNavigate();

  const { register, reset, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    try {
      await addDoc(collection(db, "events"), {
        title: data.title,
        date: data.date,
        desc: data.desc,
        imageUrl: data.imageUrl,
        location: data.location,
        createdAt: serverTimestamp(),
      });

      toast.success("data submitted sucessfully");
      reset();
      navigate(-1);
    } catch (err) {
      toast.error("Error saving data, please try again")
      console.error("Firebase Error:",err)
    }
    
  };
 
  return (
    <div id="eventModal" className="modal ">
      <div className="modal-content">
        <div className="modal-header">
          <h3 id="eventModalTitle">Add New Event</h3>
          <button >
            <Link to={"/admin/events_section"}>&times;</Link>
          </button>
 
        </div>
        <form id="eventForm" onSubmit={handleSubmit(submitHandler)}>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="eventTitle">Event Title *</label>
              <input {...register("title")} type="text" id="eventTitle" />
            </div>
            <div className="form-group">
              <label htmlFor="eventDate">Event Date *</label>
              <input {...register("date")} type="date" id="eventDate" />
            </div>
            <div className="form-group">
              <label htmlFor="eventDescription">Event Description *</label>
              <textarea
                {...register("desc")}
                id="eventDescription"
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="eventImage">Event Image URL</label>
              <input
                {...register("imageUrl")}
                type="url"
                id="eventImage"
                placeholder="https://example.com/image.jpg"
              />
              {/* <img id="eventImagePreview" className="image-preview hidden" /> */}
            </div>
            <div className="form-group">
              <label htmlFor="eventLocation">Event Location</label>
              <input
                {...register("location")}
                type="text"
                id="eventLocation"
                name="location"
                placeholder="Community Center, Pune"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-secondary"
            >
              Cancel
            </button> 
            <button type="submit" className="btn btn-primary">
              Save Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin_Events_Form;
