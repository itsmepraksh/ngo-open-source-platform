import { Route, Routes } from "react-router-dom";
 
import Login from "../pages/Login";
import Admin_Dashboard_Section from "../layouts/Admin_Dashboard_Section";
import Home from "../layouts/Home";
import About from "../layouts/About";
import Eventx from "../layouts/Eventx";
import Projects from "../layouts/Projects";
import Volunteer from "../layouts/Volunteer";
import Donation from "../layouts/Donation";
import Contact from "../layouts/Contact";
import Shop from "../layouts/Shop";
import Place_Order_Form from "../layouts/Place_Order_Form"; 
import WebsiteLayout from "../layouts/WebsiteLayout";
import AdminLayout from "../layouts/AdminLayout";
import Admin_About_Section from "../layouts/Admin_About_Section";
import Admin_General_Setting from "../layouts/Admin_General_Setting";
import Admin_Home_Section from "../layouts/Admin_Home_Section";
import Admin_Key_Initiatives_Section from "../layouts/Admin_Key_Initiatives_Section";
import Admin_Events_Section from "../layouts/Admin_Events_Section";
import Admin_Support_Section from "../layouts/Admin_Support_Section";
import Admin_Order_Section from "../layouts/Admin_Order_Section";
import Admin_Contact_Section from "../layouts/Admin_Contact_Section";
import Admin_Volunteer_Section from "../layouts/Admin_Volunteer_Section";
import Admin_Donation_Section from "../layouts/Admin_Donation_Section";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="events" element={<Eventx />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="donate" element={<Donation />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index path="dashboard" element={<Admin_Dashboard_Section />} />
        <Route path="general" element={<Admin_General_Setting />} />
        <Route path="about" element={<Admin_About_Section/>}/> 
        <Route path="home" element={<Admin_Home_Section />} />
        <Route path="key_initiatives" element={<Admin_Key_Initiatives_Section />} />
        <Route path="events" element={<Admin_Events_Section />} />
        <Route path="support" element={<Admin_Support_Section />} />
        <Route path="order" element={<Admin_Order_Section />} />
        <Route path="contact" element={<Admin_Contact_Section />} />
        <Route path="volunteer" element={<Admin_Volunteer_Section/>}/>
        <Route path="donation" element={<Admin_Donation_Section/>}/>

      </Route>
    </Routes>
  );
};

export default MainRouter;
