import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

const Admin_Key_Initiatives_Form = () => { 

  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log(data);

    try {
      await addDoc(collection(db, "key_initiatives"), {
        title: data.title,
        desc: data.desc,
        imageUrl: data.image,
        order: data.order,
        createdAt: serverTimestamp(),
      });

      toast.success("data submited");
      reset();
      navigate(-1);
    } catch (err) {
      toast.error("Error saving data, please try again");
      console.error("Firebase Error:", err);
    }
  };
 
  return (
    <div id="projectModal" className="modal" >
      <div className="modal-content">
        <div className="modal-header">
          <h3 id="projectModalTitle">Add New Project</h3>
          <button 
           >
            <Link to={"/admin/key_initiatives"}>&times;</Link>
          </button> 
        </div>
        <form id="projectForm" onSubmit={handleSubmit(submitHandler)}>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="projectTitle">Project Title *</label>
              <input
                {...register("title")}
                type="text"
                id="projectTitle"
                name="title"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectDescription">Project Description *</label>
              <textarea
                {...register("desc")}
                id="projectDescription"
                name="desc"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="projectImage">Project Image URL</label>
              <input
                {...register("image")}
                type="url"
                id="projectImage"
                name="image"
                placeholder="https://example.com/image.jpg"
              />
              <img id="projectImagePreview" className="image-preview hidden" />
            </div>
            <div className="form-group">
              <label htmlFor="projectOrder">Display Order</label>
              <input
                {...register("order")}
                type="number"
                id="projectOrder"
                name="order"
                min="1"
                placeholder="1"
              />
              <small className="form-text">Lower numbers appear first</small>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={()=>navigate(-1)} type="button" className="btn btn-secondary">
              Cancel
            </button> 
            <button type="submit" className="btn btn-primary">
              Save Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin_Key_Initiatives_Form;
