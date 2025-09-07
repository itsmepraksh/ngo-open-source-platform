 
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navbar/Nav"; 
import AppRoutes from "../routes/AppRoutes";

const Index = () => {
  return (
    <div>
      <Nav /> 
      <main>
        {/* <Outlet/> */}
      <AppRoutes/> 
      </main>
      <Footer/>
    </div>
  );
};

export default Index;
