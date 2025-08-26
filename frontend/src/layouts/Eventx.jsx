import Footer from "../components/Footer/Footer";
import style from "../styles/Event.module.css"; 


const Eventx = () => {
  return (
    <section id="events" className={`${style.section}`}>
      <div className={`${style.container}`}>
        <h2 className={`${style.section_title}`}>Events & Activities</h2>
        
        <div className={`${style.events_grid}`} id="eventsContainer">
          
          {/* Event Card */}
          <div className={`${style.event_card}`}>
            <img 
              src="https://images.squarespace-cdn.com/content/v1/6322206f758bfe7aadfc5644/1669846704353-P17KN6GRRLV334RDZVGF/close-up-of-volunteers-joining-hands-2021-08-28-17-22-07-utc.jpg" 
              alt="Community Clean-up Drive" 
              className={style.event_image} 
            />
            <div className={style.event_content}>
              <p className={style.event_date}>2025-03-15</p>
              <h3 className={style.event_title}>Community Clean-up Drive</h3>
              <p className={style.event_desc}>
                March 15, 2024 Join us for a city-wide cleaning initiative 
                to make our neighborhoods cleaner and greener.
              </p>
              <p className={style.event_location}>
                <MapPin size={16} className={style.icon}/> 
                <strong> Location:</strong> Pune, Maharashtra
              </p>
            </div>
          </div>
          
        </div>

        {/* <Footer/> */}
      </div>
    </section>
  )
}

export default Eventx;
