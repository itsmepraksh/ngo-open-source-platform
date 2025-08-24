import { Link } from "react-router-dom";

import style from "../Navbar/nav.module.css"

const Nav = () => {
    
  return (
    <nav className={`${style.navbar}`}>
        <div className={`${style.nav_container}`}>
            <Link href="#home" className={`${style.logo}`} id="logoText">Lavanya Foundation</Link>
            <ul className={`${style.nav_links}`}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/volunteer">Volunteer</Link></li>
                <li><Link to="/donatex">Donate</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            </ul>
            <button className={`${style.mobile_menu}`}>
                <i className="fas fa-bars"></i>
            </button>
        </div>
    </nav>
  )
}

export default Nav