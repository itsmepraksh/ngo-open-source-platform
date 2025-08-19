import { Route, Routes } from "react-router-dom"
import Admin from "../pages/Admin_temp"
import Admin_General_Setting from "../layouts/Admin_General_Setting"

 

const AppRoutes = () => {
  return (

     <Routes> 
        <Route path="/admin" element={<Admin/>} />
        {/* <Route path="/admin/general-settings" element={<Admin_General_Setting/>} /> */}
     </Routes>
  )
}

export default AppRoutes