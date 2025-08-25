import React from 'react'

const Admin_Key_Initiatives = () => {
  return (
    <div>
        <div id="projects" className="content-section">
                <div className="section-header">
                    <h3>Key Initiatives Management</h3>
                    <button className="btn btn-success" onclick="addNewProject()">
                        <i className="fas fa-plus"></i> Add New Initiative
                    </button>
                </div>
                <div className="section-content">
                    <div id="projects-list">
                        {/* <!-- Projects will be loaded here --> */}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Admin_Key_Initiatives