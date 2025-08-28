import style from "../Footer/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer className={`${style.footer}`}>
            <div className="container">
                <div className={`${style.social_links}`}>
                    <a href="#" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#" aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="#" aria-label="YouTube" >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>

                <div className="mb-[2rem]">
                    <h3 className="mb-[1rem]">Lavanya Foundation</h3>
                    <p>Transforming lives through compassion, action, and unity.</p>
                </div>

                <div className="border-[1px] border-[#34495e] pt-[2rem]">
                    <p>&copy; 2025 Lavanya Foundation. All rights reserved. <br /> Designed with ❤️ for humanity</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer