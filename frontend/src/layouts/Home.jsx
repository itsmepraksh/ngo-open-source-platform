
import style from "../styles/home.module.css"

const Home = () => {

  
  return (

    
    <section id="home" className={`${style.hero}`}>
      {/* style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(&quot;https://static.vecteezy.com/system/resources/previews/005/380/829/non_2x/group-of-hands-holding-together-free-photo.JPG&quot;);" */}
        <div class={`${style.container}`}>
          <div class={`${style.hero_content}`}>
            <h1 id="heroTitle">Transforming Lives Together</h1>
            <p id="heroSubtitle">
              Join Lavanya Foundation in creating a better world through
              compassion, action, and unity
            </p>
            <div class={`${style.cta_buttons}`}>
              <a href="#volunteer" className={`${style.btn} ${style.btn_primary}`}>
                Volunteer With Us
              </a>
              <a href="#donate" className={`${style.btn} ${style.btn_secondary}`} >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Home