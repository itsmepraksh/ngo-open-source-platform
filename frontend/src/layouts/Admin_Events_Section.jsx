import React from 'react'
import { Link } from 'react-router-dom'

const Admin_Events_Section = () => {
  return (
    // <!-- Events Section -->
            <div id="events" className="content-section" >
                <div className="section-header">
                    <h3>Events & Activities Management</h3>
                    <button className="btn btn-success" onclick="addNewEvent()">
                        <Link to="/events_section/form"><i className="fas fa-plus"></i> Add New Event</Link>
                    </button>
                </div>
                <div className="section-content">
                    <div id="events-list">
                        {/* <!-- Events will be loaded here --> */}
                    </div>
                </div>
            </div>
  )
}

export default Admin_Events_Section