import "../styles/index.css" 

const Footer = () => {
  return (
     <footer className="footer">
        <div className="container">
            <div className="social-links">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
            
            <div className="mb-[2rem]">
                <h3 className="mb-[1rem]">Lavanya Foundation</h3>
                <p>Transforming lives through compassion, action, and unity.</p>
            </div>
            
            <div className="border-[1px] border-[#34495e] pt-[2rem]">
                <p>&copy; 2024 Lavanya Foundation. All rights reserved. | Designed with ❤️ for humanity</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer