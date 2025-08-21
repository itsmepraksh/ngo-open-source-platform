import Footer from "../components/Footer";
import Nav from "../components/Nav";
import About from "../layouts/About"; 
import AppRoutes from "../routes/AppRoutes";
import "../styles/index.css";
const Index = () => {
  return (
    <div>
      <Nav /> 
      <AppRoutes/> 
      <Footer/>
    </div>
  );
};

export default Index;
