import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin_temp";
import Admin_General_Setting from "../layouts/Admin_General_Setting";
import Home from "../layouts/Home";
import About from "../layouts/About";
import Projects from "../layouts/Projects";
import Volunteer from "../layouts/Volunteer";
import Eventx from "../layouts/Eventx";
import Donation from "../layouts/Donation";
import Contact from "../layouts/Contact";
import Shop from "../layouts/Shop";
import Place_Order_Form from "../layouts/Place_Order_Form";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} /> 
      <Route path="/events" element={<Eventx/>} /> 
      <Route path="/projects" element={<Projects/>} /> 
      <Route path="/volunteer" element={<Volunteer/>} /> 
      <Route path="/donatex" element={<Donation/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/place-order" element={<Place_Order_Form/>}/>
    </Routes>
  );
};

export default AppRoutes;
