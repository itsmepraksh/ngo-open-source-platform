import "../styles/admin.css";

import AdminRoutes from "../routes/AdminRoutes";
import Admin_navBar from "../components/Admin_navBar";

const Admin = () => {
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
        <div class="header">
          <h1 id="section-title">Dashboard</h1>
          <button class="logout-btn" onclick="logout()">
            <i class="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
        
        <AdminRoutes />
      </div>
    </div>
  );
};

export default Admin;
