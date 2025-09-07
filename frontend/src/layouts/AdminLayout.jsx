import { Outlet } from "react-router-dom";
import Admin_navBar from "../components/Admin_navBar"
import "../styles/admin.css"; 
 

const AdminLayout = () => { 
  return (
     <div className="admin-container h-full">
      <div className="sidebar " id="sidebar">
        <div className="sidebar-header">
          <h2>
            <i className="fas fa-shield-alt"></i> Admin Panel
          </h2>
          <p>Lavanya Foundation</p>
        </div>
        <Admin_navBar />
      </div>

      <div className="main-content">
        <div className="header">
          <h1 id="section-title">Dashboard</h1>
          <button
            className="logout-btn active:scale-[0.9]"
            // onClick={handleLogout}
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout