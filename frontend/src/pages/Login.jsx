import "../styles/admin_login.css";

const Login = () => {
  return (
    <div id="background-login-container">
      <div class="login-container">
        <div class="logo">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h1>Admin Login</h1>
        <p class="subtitle">Lavanya Foundation Admin Panel</p>

        <div id="alert-container"></div>

        <form id="login-form">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          <button type="submit" class="btn btn-primary" id="login-btn">
            <span class="btn-text">Login</span>
            <span class="loading">
              <span class="spinner"></span> Logging in...
            </span>
          </button>
        </form>

        <div class="back-link">
          <a href="index.html">
            <i class="fas fa-arrow-left"></i> Back to Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
