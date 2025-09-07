import { Link, useNavigate } from "react-router-dom";
import "../styles/admin_login.css";
import { useForm } from "react-hook-form";
import {toast} from "react-toastify";
import { useContext } from "react";
import { authContext } from "../context/AuthWrapper";
 

const Login = () => {
  // admin@123#

  const {login} = useContext(authContext);
  const navigate = useNavigate()

  const {register , handleSubmit , reset , formState:{errors}} = useForm()

  const submitHandler = async (data)=>{
    console.log(data)

    try {
      await login(data.email , data.password);
      navigate('/admin/dashboard');
    } catch (err) {
      toast.error("Invalid Creditials");
      reset()
      console.error("Login failed",err.message);
    }
  };


  return (
    <div id="background-login-container" >
      <div className="login-container">
        <div className="logo">
          <i className="fas fa-shield-alt"></i>
        </div>
        <h1>Admin Login</h1>
        <p className="subtitle">Lavanya Foundation Admin Panel</p>

        <div id="alert-container"></div>

        <form onSubmit={handleSubmit(submitHandler)} id="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input {...register("email")} type="email" id="email" name="email" required />
            {errors.email && <small className="text-sm text-red-300">email is required</small>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" id="password" name="password" required />
             {errors.password && <small className="text-sm text-red-300">password is required</small>}
         
          </div>

          <button type="submit" className="btn btn-primary" id="login-btn">
            <span className="btn-text">Login</span>
            {/* <span className="loading">
              <span className="spinner"></span> Logging in...
            </span> */}
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
