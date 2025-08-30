 
import { Navigate, Route, Routes } from "react-router-dom";
  
import WebsiteLayout from "../pages/WebsiteLayout"; 
import Admin from "../pages/Admin";
import Index from "../pages/Index";
import Login from "../pages/Login";

const MainRouter = () => {
  return (
    <Routes> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/*" element={<Index/>} />
        <Route path="/admin/*" element={<Admin/>}/> 
        <Route path="*" element={<Navigate to = "/" />}/>
    </Routes>
  );
};

export default MainRouter;
