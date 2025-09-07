import { Link } from "react-router-dom";
import "../styles/admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faGear,
  faHouse,
  faCircleInfo,
  faShareNodes,
  faCalendarDays,
  faCartShopping,
  faReceipt,
  faAddressBook,
  faUsersLine,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

const Admin_navBar = () => {
  
  return (
    <nav className="w-full">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link
            to="/admin/dashboard"
            className="nav-link  active"
            data-section="dashboard"
          >
            <FontAwesomeIcon icon={faGauge} className="text-2xl " />
            <i className="fas fa-tachometer-alt"></i>
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/general" className="nav-link" data-section="general">
            <FontAwesomeIcon icon={faGear} className="text-2xl " />
            <i className="fas fa-cog"></i>
            General Settings
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/home" className="nav-link" data-section="home">
            <FontAwesomeIcon icon={faHouse} className="text-2xl " />
            <i className="fas fa-home"></i>
            Home Section
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/about" className="nav-link" data-section="about">
            <FontAwesomeIcon icon={faCircleInfo} className="text-2xl " />
            <i className="fas fa-info-circle"></i>
            About Section
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/key_initiatives"
            className="nav-link"
            data-section="initiatives"
          >
            <FontAwesomeIcon icon={faShareNodes} className="text-2xl" />
            <i className="fas fa-project-diagram"></i>
            Key Initiatives
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/events" className="nav-link" data-section="events">
            <FontAwesomeIcon icon={faCalendarDays} className="text-2xl" />
            <i className="fas fa-calendar-alt"></i>
            Events & Activities
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/support"
            className="nav-link"
            data-section="support"
          >
            <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
            <i className="fas fa-shopping-cart"></i>
            Support Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/order" className="nav-link" data-section="orders">
            <FontAwesomeIcon icon={faReceipt} className="text-2xl" />
            <i className="fas fa-receipt"></i>
            Product Orders
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/contact"
            className="nav-link"
            data-section="contact"
          >
            <FontAwesomeIcon icon={faAddressBook} className="text-2xl" />
            <i className="fas fa-address-book"></i>
            Contact Information
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/volunteer"
            className="nav-link"
            data-section="volunteers"
          >
            <FontAwesomeIcon icon={faUsersLine} className="text-2xl" />
            <i className="fas fa-users"></i>
            Volunteer Applications
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/admin/donation"
            className="nav-link"
            data-section="donations"
          >
            <FontAwesomeIcon icon={faHandHoldingDollar} className="text-2xl" />
            <i className="fas fa-hand-holding-heart"></i>
            Donations
          </Link>
        </li>
      </ul>
    </nav>
  );
};
 

export default Admin_navBar;
