import React from 'react'

const Admin_Event_Activities = () => {
  return (
    <div>
        <div id="events" className="content-section">
                <div className="section-header">
                    <h3>Events & Activities Management</h3>
                    <button className="btn btn-success" onclick="addNewEvent()">
                        <i className="fas fa-plus"></i> Add New Event
                    </button>
                </div>
                <div className="section-content">
                    <div id="events-list">
                        {/* <!-- Events will be loaded here --> */}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Admin_Event_Activities