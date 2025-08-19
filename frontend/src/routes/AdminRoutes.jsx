import { Route, Routes } from "react-router-dom"
import Admin_General_Setting from "../layouts/Admin_General_Setting"
import Admin_Dashboard from "../layouts/Admin_Dashboard"


const AdminRoutes = () => {
  return (
    <div>

        <Routes>
            <Route path="/dashboard" element={<Admin_Dashboard/>} /> 
            <Route path="/general" element={<Admin_General_Setting />} />
        </Routes>
    </div>
  )
}

export default AdminRoutes