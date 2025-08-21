import "../styles/index.css" 

const Home = () => {
  return (
    <section id="home" class="hero">
        <div class="container">
          <div class="hero-content">
            <h1 id="heroTitle">Transforming Lives Together</h1>
            <p id="heroSubtitle">
              Join Lavanya Foundation in creating a better world through
              compassion, action, and unity
            </p>
            <div class="cta-buttons">
              <a href="#volunteer" class="btn btn-primary">
                Volunteer With Us
              </a>
              <a href="#donate" class="btn btn-secondary">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Home