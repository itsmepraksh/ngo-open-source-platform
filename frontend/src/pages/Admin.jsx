import "../styles/admin.css";

import AdminRoutes from "../routes/AdminRoutes";
import Admin_navBar from "../components/Admin_navBar";
import { useContext } from "react";
import { adminContext } from "../Wrapper";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const [loginStatus, setLoginStatus] = useContext(adminContext);

  // console.log(loginStatus)

  const logout = () => {
    setLoginStatus(false);
    console.log("Logout clicked");
    console.log(loginStatus);
  };

  //  console.log(loginStatus)
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
            onClick={() => navigate("/login")}
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>

        <AdminRoutes />
      </div>
    </div>
  );
};

export default Admin;
