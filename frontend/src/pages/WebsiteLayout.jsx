import React from 'react'
import Nav from '../components/Navbar/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import AppRoutes from '../routes/AppRoutes'

const WebsiteLayout = () => {
  return (
    <div>
        <Nav /> 
      <main>
        {/* <Outlet/> */}
        <AppRoutes/> 
      </main>
      
      <Footer/>
    </div>
  )
}

export default WebsiteLayout