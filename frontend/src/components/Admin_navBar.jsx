import { Link } from "react-router-dom"
import "../styles/admin.css";
 

const Admin_navBar = () => {
  return ( 
        <nav className="w-full">
             <ul className="nav-menu">
                <li className="nav-item">
                    < Link to="/admin/dashboard" className="nav-link  active" data-section="dashboard">
                        <i className="fas fa-tachometer-alt"></i>
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    < Link to="/admin/general" className="nav-link" data-section="general">
                        <i className="fas fa-cog"></i>
                        General Settings
                    </Link>
                </li>
                <li className="nav-item">
                    < Link to="/admin/home" className="nav-link" data-section="home">
                        <i className="fas fa-home"></i>
                        Home Section
                    </Link>
                </li>
                <li className="nav-item">
                    < Link to="/admin/about" className="nav-link" data-section="about">
                        <i className="fas fa-info-circle"></i>
                        About Section
                    </Link>
                </li>
                <li className="nav-item">
                    < Link to="/admin/key_initiatives" className="nav-link" data-section="initiatives">
                        <i className="fas fa-project-diagram"></i>
                        Key Initiatives
                    </Link>
                </li>
                <li className="nav-item">
                    < Link to="/admin/events" className="nav-link" data-section="events">
                        <i className="fas fa-calendar-alt"></i>
                        Events & Activities
                    </Link>
                </li>
                <li className="nav-item">
                    < Link to="/admin/support" className="nav-link" data-section="support">
                        <i className="fas fa-shopping-cart"></i>
                        Support Products
                    </Link>
                </li>
                <li className="nav-item">
                    < Link to="/admin/orders" className="nav-link" data-section="orders">
                        <i className="fas fa-receipt"></i>
                        Product Orders
                    </Link>
                </li>
                <li className="nav-item">
                    < Link to="/admin/contact" className="nav-link" data-section="contact">
                        <i className="fas fa-address-book"></i>
                        Contact Information
                    </Link>
                </li>
                <li className="nav-item">
                    < Link to="/admin/volunteer" className="nav-link" data-section="volunteers">
                        <i className="fas fa-users"></i>
                        Volunteer Applications
                    </Link>
                </li>
                <li className="nav-item">
                    < Link to="/admin/donation" className="nav-link" data-section="donations">
                        <i className="fas fa-hand-holding-heart"></i>
                        Donations
                    </Link>
                </li>
            </ul>
        </nav>
  )
}

export default Admin_navBar