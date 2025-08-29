import { useState } from 'react'
import { Link } from 'react-router-dom'

const Admin_Key_Initiatives_Form = () => {

    const [closeFromBtn, setCloseFromBtn] = useState(false)

    const clickBtn = ()=>{
        
        setCloseFromBtn(true)
        

    }
  return (
    <div id="projectModal"  className={closeFromBtn?"hidden":"modal"} >
        <div className="modal-content">
            <div className="modal-header">
                <h3 id="projectModalTitle">Add New Project</h3>
                <button onClick={clickBtn}  ><Link to={"/key_initiatives"}>&times;</Link></button>
                {/* {onclick="closeModal('projectModal')"} */}
            </div>
            <form id="projectForm">
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="projectTitle">Project Title *</label>
                        <input type="text" id="projectTitle" name="title" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectDescription">Project Description *</label>
                        <textarea id="projectDescription" name="description" rows="4" required></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectImage">Project Image URL</label>
                        <input type="url" id="projectImage" name="image" placeholder="https://example.com/image.jpg" />
                        <img id="projectImagePreview" className="image-preview hidden" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectOrder">Display Order</label>
                        <input type="number" id="projectOrder" name="order" min="1" placeholder="1" />
                        <small className="form-text">Lower numbers appear first</small>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" >Cancel</button>
                    {/* {onclick="closeModal('projectModal')"} */}
                    <button type="submit" className="btn btn-primary">Save Project</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Admin_Key_Initiatives_Form