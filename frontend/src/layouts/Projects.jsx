import "../styles/index.css" 

const Projects = () => {
  return (
      <section id="projects" class="section">
        <div class="container">
            <h2 class="section-title">Our Key Initiatives</h2>
            <div class="projects-grid" id="projectsContainer">
                {/* <!-- Projects will be loaded dynamically from Firebase --> */}
            </div>
        </div>
    </section>
  )
}

export default Projects