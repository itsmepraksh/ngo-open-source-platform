// import "../styles/index.css" 
import style from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={`${style.project_section}`}>
      <div className={`${style.container}`}>
        <h2 className={`${style.section_title}`}>Our Key Initiatives</h2>
        <div className={`${style.projects_grid}`} id="projectsContainer">
          {/* <!-- Projects will be loaded dynamically from Firebase --> */}
          <div className={`${style.projects_card}`}>
            <img
              src="https://images.squarespace-cdn.com/content/v1/6322206f758bfe7aadfc5644/1669846704353-P17KN6GRRLV334RDZVGF/close-up-of-volunteers-joining-hands-2021-08-28-17-22-07-utc.jpg"
              alt="Community Clean-up Drive"
              className={style.projects_image}
            />
            <h3 className={style.projects_title}>Four Feeders</h3>
            <p className={style.projects_desc}>
              Establishing community feeding stations in urban areas to ensure no one sleeps hungry. 
              We provide nutritious meals to the homeless and underprivileged communities daily.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects