import style from  "../Footer/footer.module.css"; 

const Footer = () => {
  return (
     <footer className={`${style.footer}`}>

        
        <div className="container">
            <div className={`${style.social_links}`}>
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
                <p>&copy; 2025 Lavanya Foundation. All rights reserved. <br /> Designed with ❤️ for humanity</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer