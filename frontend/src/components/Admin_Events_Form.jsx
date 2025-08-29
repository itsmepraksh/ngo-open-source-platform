import { useState } from 'react';
import React from "react";
import { Link } from "react-router-dom";

const Admin_Events_Form = () => {
  const [closeFromBtn, setCloseFromBtn] = useState(false);

  const clickBtn = () => {
    setCloseFromBtn(true);
  };

  return (
    <div id="eventModal" className="modal ">
      <div className="modal-content">
        <div className="modal-header">
          <h3 id="eventModalTitle">Add New Event</h3>
            <button onClick={clickBtn}><Link to={"/events_section"}>&times;</Link></button>

          {/* {onclick="closeModal('eventModal')"} */}
        </div>
        <form id="eventForm">
          <div className="modal-body">
            <div className="form-group">
              <label for="eventTitle">Event Title *</label>
              <input type="text" id="eventTitle" name="title" required />
            </div>
            <div className="form-group">
              <label for="eventDate">Event Date *</label>
              <input type="date" id="eventDate" name="date" required />
            </div>
            <div className="form-group">
              <label for="eventDescription">Event Description *</label>
              <textarea
                id="eventDescription"
                name="description"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label for="eventImage">Event Image URL</label>
              <input
                type="url"
                id="eventImage"
                name="image"
                placeholder="https://example.com/image.jpg"
              />
              <img id="eventImagePreview" className="image-preview hidden" />
            </div>
            <div className="form-group">
              <label for="eventLocation">Event Location</label>
              <input
                type="text"
                id="eventLocation"
                name="location"
                placeholder="Community Center, Pune"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
            {/* {onclick="closeModal('eventModal')"} */}
            <button type="submit" className="btn btn-primary">
              Save Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin_Events_Form;
