 
import { Link } from 'react-router-dom'

const Admin_Support_Section = () => {
  return (
    // <!-- Support Section -->
            <div id="shop" className="content-section" >
                <div className="section-header">
                    <h3>Support Products Management</h3>
                    <button className="btn btn-success" onclick="addNewProduct()">
                       <Link to="/support_section/form"><i className="fas fa-plus"></i> Add New Product</Link> 
                    </button>
                </div>
                <div className="section-content">
                    <div id="products-list">
                        {/* <!-- Products will be loaded here --> */}
                    </div>
                </div>
            </div>
  )
}

export default Admin_Support_Section