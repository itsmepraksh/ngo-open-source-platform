import "../styles/index.css" 

const Eventx = () => {
  return (
    <section id="events" class="section">
        <div class="container">
            <h2 class="section-title">Events & Activities</h2>
            <div class="events-grid" id="eventsContainer">
                {/* <!-- Events will be loaded dynamically from Firebase --> */}
            </div>
        </div>
    </section>
  )
}

export default Eventx