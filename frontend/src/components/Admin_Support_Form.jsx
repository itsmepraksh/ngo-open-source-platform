import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../config/firebase";

const Admin_Support_Form = () => {
  const navigate = useNavigate();

  const { register, reset, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    console.log(data);

    try {
      await addDoc(collection(db, "support"), {
        name: data.name,
        price: data.price,
        desc: data.desc,
        image: data.image,
        order: data.order,
      });

      toast.success("data submitted");
      reset();
      navigate(-1);
    } catch (err) {
      toast.error("Error saving data, please try again");
      console.error("Firebase Error:", err);
    }
  };

  return (
    //  <!-- Product Modal -->
    <div id="productModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 id="productModalTitle">Add New Product</h3>

          <button>
            <Link to={"/admin/support_section"}>&times;</Link>
          </button>
        </div>
        <form id="productForm" onSubmit={handleSubmit(submitHandler)}>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="productName">Product Name *</label>
              <input
                {...register("name")}
                type="text"
                id="productName"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">Product Price (₹) *</label>
              <input
                {...register("price")}
                type="number"
                id="productPrice"
                name="price"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="productDescription">Product Description *</label>
              <textarea
                {...register("desc")}
                id="productDescription"
                name="desc"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="productImage">Product Image URL</label>
              <input
                {...register("image")}
                type="url"
                id="productImage"
                name="image"
                placeholder="https://example.com/image.jpg"
              />
              <img id="productImagePreview" className="image-preview" />
            </div>
            <div className="form-group">
              <label htmlFor="productOrder">Display Order</label>
              <input
                {...register("order")}
                type="number"
                id="productOrder"
                name="order"
                min="1"
                placeholder="1"
              />
              <small className="form-text">Lower numbers appear first</small>
            </div>
            {/* <div className="form-group">
                        <label htmlFor="productAvailable">Available for Purchase</label>
                        <label className="toggle-switch">
                            <input type="checkbox" id="productAvailable" name="available" checked/>
                            <span className="slider"></span>
                        </label>
                    </div> */}
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
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin_Support_Form;
