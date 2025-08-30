import { Link } from "react-router-dom";
import "../styles/admin_login.css";

const Login = () => {
  return (
    <div id="background-login-container" >
      <div className="login-container">
        <div className="logo">
          <i className="fas fa-shield-alt"></i>
        </div>
        <h1>Admin Login</h1>
        <p className="subtitle">Lavanya Foundation Admin Panel</p>

        <div id="alert-container"></div>

        <form id="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          <button type="submit" className="btn btn-primary" id="login-btn">
            <span className="btn-text">Login</span>
            <span className="loading">
              <span className="spinner"></span> Logging in...
            </span>
          </button>
        </form>

        <div className="back-link">
          <Link to={"/"}>
            <i className="fas fa-arrow-left"></i> Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
