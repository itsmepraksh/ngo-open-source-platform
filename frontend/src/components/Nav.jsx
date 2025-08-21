import { Link } from "react-router-dom";
import "../styles/index.css";

const Nav = () => {
    
  return (
    <nav className="navbar">
        <div className="nav-container">
            <Link href="#home" className="logo" id="logoText">Lavanya Foundation</Link>
            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/volunteer">Volunteer</Link></li>
                <li><Link to="/donatex">Donate</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
            <button className="mobile-menu">
                <i className="fas fa-bars"></i>
            </button>
        </div>
    </nav>
  )
}

export default Nav