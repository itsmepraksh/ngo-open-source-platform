import "../styles/index.css";

const About = () => {
  return (
  <section id="about" class="section">
        <div class="container">
            <h2 class="section-title">About Us</h2>
            <div class="about-grid">
                <div class="about-text fade-in-left">
                    <h3 id="missionTitle">Our Mission</h3>
                    <p id="missionText">At Lavanya Foundation, we believe in the power of collective action to create meaningful change. Our mission is to address critical social issues through innovative programs that focus on food security, environmental sustainability, and community empowerment.</p>
                    
                    <h3 id="visionTitle">Our Vision</h3>
                    <p id="visionText">We envision a world where every individual has access to basic necessities, where communities thrive in harmony with nature, and where compassion drives positive transformation for generations to come.</p>
                </div>
                <div class="founder-image fade-in-right" id="aboutImage"></div>
            </div>
            
            <div class="timeline">
                <div class="timeline-item slide-in-bottom stagger-1">
                    <div class="timeline-year">2020</div>
                    <p>Foundation Established</p>
                </div>
                <div class="timeline-item slide-in-bottom stagger-2">
                    <div class="timeline-year">2021</div>
                    <p>First Community Kitchen</p>
                </div>
                <div class="timeline-item slide-in-bottom stagger-3">
                    <div class="timeline-year">2022</div>
                    <p>Environmental Initiatives</p>
                </div>
                <div class="timeline-item slide-in-bottom stagger-4">
                    <div class="timeline-year">2023</div>
                    <p>1000+ Lives Impacted</p>
                </div>
                <div class="timeline-item slide-in-bottom stagger-4">
                    <div class="timeline-year">2024</div>
                    <p>Expansion Across Cities</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About