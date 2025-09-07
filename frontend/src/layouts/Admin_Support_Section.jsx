import { Link } from "react-router-dom";

const Admin_Support_Section = () => {
  return (
    // <!-- Support Section -->
 
            <div id="shop" className="content-section" >
                <div className="section-header">
                    <h3>Support Products Management</h3>
                    <Link to="/support_section/form">
                    <button className="btn btn-success" >
                       <i className="fas fa-plus"></i> Add New Product
                    </button>
                    </Link> 
                </div>
                <div className="section-content">
                    <div id="products-list">
                        {/* <!-- Products will be loaded here --> */}
                    </div>
                </div>
            </div>
  )
}
 

export default Admin_Support_Section;
