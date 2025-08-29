import { Route, Routes } from "react-router-dom"
import Admin_General_Setting from "../layouts/Admin_General_Setting"
import Admin_Dashboard_Section from "../layouts/Admin_Dashboard_Section"
import Index from "../pages/Index"
import Login from "../pages/Login"
import Admin from "../pages/Admin"
import About from "../layouts/About"
import Admin_Home_Section from "../layouts/Admin_Home_Section"
import Admin_About_Section from "../layouts/Admin_About_Section"
import Admin_Key_Initiatives_Section from "../layouts/Admin_Key_Initiatives_Section"
import Admin_Events_Section from "../layouts/Admin_Events_Section"
import Admin_Support_Section from "../layouts/Admin_Support_Section"
import Admin_Order_Section from "../layouts/Admin_Order_Section"
import Admin_Contact_Section from "../layouts/Admin_Contact_Section"
import Admin_Volunteer_Section from "../layouts/Admin_Volunteer_Section"
import Admin_Donation_Section from "../layouts/Admin_Donation_Section"
import Admin_Key_Initiatives_Form from "../components/Admin_Key_Initiatives_Form"
import Admin_Events_Form from "../components/Admin_Events_Form"
import Admin_Support_Form from "../components/Admin_Support_Form"


const AdminRoutes = () => {
  return (
    <div>
          <Routes>

              
            <Route path="/" element={<Admin_Dashboard_Section/>}/>
            <Route path="/dashboard" element={<Admin_Dashboard_Section />} />   
            {/* <Route path="/admin" element={<Admin/>} /> */}
            <Route path="/a-home" element={<Index />} />
            <Route path="/a-about" element={<About/>} /> 
            <Route path="/login" element={<Login/>} />


            <Route path="/dashboard" element={<Admin_Dashboard_Section />} /> 
            <Route path="/general" element={<Admin_General_Setting />} />
            <Route path="/home_section" element={<Admin_Home_Section/>}/>
            <Route path="/about_section" element={<Admin_About_Section/>}/> 
            <Route path="/key_initiatives" element={<Admin_Key_Initiatives_Section/>}/>
            <Route path="/events_section" element={<Admin_Events_Section/>}/>
            <Route path="/support_section" element={<Admin_Support_Section/>}/>
            <Route path="/order_section" element={<Admin_Order_Section/>}/>
            <Route path="/contact_section" element={<Admin_Contact_Section/>}/>
            <Route path="/volunteer_section" element={<Admin_Volunteer_Section/>}/>
            <Route path="/donation_section" element={<Admin_Donation_Section/>}/>

            {/* {Admin form routes} */}
            <Route path="/key_initiatives/form" element={<Admin_Key_Initiatives_Form/>}/>
            <Route path="/events_section/form" element={<Admin_Events_Form/>}/>
            <Route path="/support_section/form" element={<Admin_Support_Form/>}/>
        </Routes>
    </div>
  )
}

export default AdminRoutes