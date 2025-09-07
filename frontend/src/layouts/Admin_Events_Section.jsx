import React from "react";
import { Link } from "react-router-dom";

const Admin_Events_Section = () => {
  return (
    <div id="events" className="content-section">
      <div className="section-header">
        <h3>Events & Activities Management</h3>
        <Link to="/events_section/form">
          <button className="btn btn-success">
            <i className="fas fa-plus"></i> Add New Event
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Admin_Events_Section;
