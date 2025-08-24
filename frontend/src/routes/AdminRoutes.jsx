import { Route, Routes } from "react-router-dom"
import Admin_General_Setting from "../layouts/Admin_General_Setting"
import Admin_Dashboard from "../layouts/Admin_Dashboard"
import Index from "../pages/Index"
import Login from "../pages/Login"
import Admin from "../pages/Admin"
import About from "../layouts/About"
import Admin_Home_Section from "../layouts/Admin_Home_Section"


const AdminRoutes = () => {
  return (
    <div>
          <Routes>
            <Route path="/dashboard" element={<Admin_Dashboard />} />   
            {/* <Route path="/admin" element={<Admin/>} /> */}
            <Route path="/general" element={<Admin_General_Setting />} />
            <Route path="/a-home" element={<Index />} />
            <Route path="/a-about" element={<About/>} /> 
            <Route path="/login" element={<Login/>} />
            <Route path="/home_section" element={<Admin_Home_Section/>}/>
            
            
             
        </Routes>
    </div>
  )
}

export default AdminRoutes