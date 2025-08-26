import React from 'react'
import { Link } from 'react-router-dom'

const Admin_Key_Initiatives_Section = () => {
  return (
    // <!-- Key Initiatives Section -->
            <div id="projects" className="content-section" >
                <div className="section-header">
                    <h3>Key Initiatives Management</h3>
                    <button className="btn btn-success" onclick="addNewProject()">
                        <Link to="/key_initiatives/form" ><i className="fas fa-plus"></i> Add New Initiative</Link>
                        
                    </button>
                </div>
                <div className="section-content">
                    <div id="projects-list">
                        {/* <!-- Projects will be loaded here --> */}
                    </div>
                </div>
            </div>
  )
}

export default Admin_Key_Initiatives_Section