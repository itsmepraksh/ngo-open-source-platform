import { Link } from "react-router-dom"
import "../styles/admin.css";
 

const Admin_navBar = () => {
  return ( 
        <nav className="w-full">
             <ul className="nav-menu">
                <li className="nav-item">
                    < Link to="/dashboard" className="nav-link  active" data-section="dashboard">
                        <i className="fas fa-tachometer-alt"></i>
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    < Link to="/general" className="nav-link" data-section="general">
                        <i className="fas fa-cog"></i>
                        General Settings
                    </Link>
                </li>
                <li className="nav-item">
                    < Link id="#home" className="nav-link" data-section="home">
                        <i className="fas fa-home"></i>
                        Home Section
                    </Link>
                </li>
                <li className="nav-item">
                    < Link id="#about" className="nav-link" data-section="about">
                        <i className="fas fa-info-circle"></i>
                        About Section
                    </Link>
                </li>
                <li className="nav-item">
                    < Link id="#projects" className="nav-link" data-section="projects">
                        <i className="fas fa-project-diagram"></i>
                        Key Initiatives
                    </Link>
                </li>
                <li className="nav-item">
                    < Link id="#events" className="nav-link" data-section="events">
                        <i className="fas fa-calendar-alt"></i>
                        Events & Activities
                    </Link>
                </li>
                <li className="nav-item">
                    < Link id="#shop" className="nav-link" data-section="shop">
                        <i className="fas fa-shopping-cart"></i>
                        Support Products
                    </Link>
                </li>
                <li className="nav-item">
                    < Link id="#orders" className="nav-link" data-section="orders">
                        <i className="fas fa-receipt"></i>
                        Product Orders
                    </Link>
                </li>
                <li className="nav-item">
                    < Link id="#contact" className="nav-link" data-section="contact">
                        <i className="fas fa-address-book"></i>
                        Contact Information
                    </Link>
                </li>
                <li className="nav-item">
                    < Link id="#volunteers" className="nav-link" data-section="volunteers">
                        <i className="fas fa-users"></i>
                        Volunteer Applications
                    </Link>
                </li>
                <li className="nav-item">
                    < Link id="#donations" className="nav-link" data-section="donations">
                        <i className="fas fa-hand-holding-heart"></i>
                        Donations
                    </Link>
                </li>
            </ul>
        </nav>
    
  )
}

export default Admin_navBar