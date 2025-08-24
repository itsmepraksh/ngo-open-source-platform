import style from "../styles/about.module.css";

const About = () => {
  return (
  <section id="about" className={`${style.section}`}>
        <div className={`${style.container}`}>
            <h2 className={`${style.section_title}`}>About Us</h2>
            <div className={`${style.about_grid}`}>
                {/*  fade-in-left*/}
                <div className={`${style.about_text}`}>
                    <h3 id="missionTitle">Our Mission</h3>
                    <p id="missionText">At Lavanya Foundation, we believe in the power of collective action to create meaningful change. Our mission is to address critical social issues through innovative programs that focus on food security, environmental sustainability, and community empowerment.</p>
                    
                    <h3 id="visionTitle">Our Vision</h3>
                    <p id="visionText">We envision a world where every individual has access to basic necessities, where communities thrive in harmony with nature, and where compassion drives positive transformation for generations to come.</p>
                </div>
                {/* fade-in-right  */}
                <div className={`${style.founder_image}`} id="aboutImage"></div>
            </div>
            
            <div className={`${style.timeline}`}>
                <div className={`${style.timeline_item} ${style.slide_in_bottom} ${style.stagger_1}`}>
                    <div className={`${style.timeline_year}`}>2020</div>
                    <p>Foundation Established</p>
                </div>
                <div className={`${style.timeline_item} ${style.slide_in_bottom} ${style.stagger_2}`}>
                    <div className={`${style.timeline_year}`}>2021</div>
                    <p>First Community Kitchen</p>
                </div>
                <div className={`${style.timeline_item} ${style.slide_in_bottom} ${style.stagger_3}`}>
                    <div className={`${style.timeline_year}`}>2022</div>
                    <p>Environmental Initiatives</p>
                </div>
                <div className={`${style.timeline_item} ${style.slide_in_bottom} ${style.stagger_4}`}>
                    <div className={`${style.timeline_year}`}>2023</div>
                    <p>1000+ Lives Impacted</p>
                </div>
                <div className={`${style.timeline_item} ${style.slide_in_bottom} ${style.stagger_4}`}>
                    <div className={`${style.timeline_year}`}>2024</div>
                    <p>Expansion Across Cities</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About