import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../Navbar/nav.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);
  return (
    <nav className={`${style.navbar}`}>
      <div className={`${style.nav_container}`}>
        <Link href="#home" className={`${style.logo}`} id="logoText">
          Lavanya Foundation
        </Link>
        <ul className={ `${style.nav_links2}` }>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/volunteer">Volunteer</Link>
        </li>
        <li>
          <Link to="/donatex">Donate</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
        <button
          onClick={() => setIsClicked(!isClicked)}
          className={`${style.mobile_menu}`}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <ul className={isClicked ? `${style.nav_links}` : "hidden"}>
        <li>
          <Link 
          onClick={() => setIsClicked(!isClicked)} to="/home">Home</Link>
        </li>
        <li>
          <Link 
          onClick={() => setIsClicked(!isClicked)} to="/about">About</Link>
        </li>
        <li>
          <Link 
          onClick={() => setIsClicked(!isClicked)} to="/projects">Projects</Link>
        </li>
        <li>
          <Link 
          onClick={() => setIsClicked(!isClicked)} to="/events">Events</Link>
        </li>
        <li>
          <Link 
          onClick={() => setIsClicked(!isClicked)} to="/volunteer">Volunteer</Link>
        </li>
        <li>
          <Link 
          onClick={() => setIsClicked(!isClicked)} to="/donatex">Donate</Link>
        </li>
        <li>
          <Link 
          onClick={() => setIsClicked(!isClicked)} to="/contact">Contact</Link>
        </li>
        <li>
          <Link 
          onClick={() => setIsClicked(!isClicked)} to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
