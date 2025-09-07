import { Link } from "react-router-dom";

const Admin_Key_Initiatives_Section = () => {
  return (
    // <!-- Key Initiatives Section -->
    <div id="projects" className="content-section">
      <div className="section-header">
        <h3>Key Initiatives Management</h3>
        <Link to="/admin/key_initiatives/form">
          <button
            className="btn btn-success" 
          >
            <i className="fas fa-plus"></i> Add New Initiative
          </button>
        </Link>
      </div>
      <div className="section-content">
        <div id="projects-list">
          {/* <!-- Projects will be loaded here --> */}
        </div>
      </div>
    </div>
  );
};

export default Admin_Key_Initiatives_Section;
