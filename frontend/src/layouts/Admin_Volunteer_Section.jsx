import React from 'react';
import '../styles/Admin_Volunteer.css';

const Admin_Volunteer_Section = () => {
  // Single dummy volunteer application
  const volunteer = {
    name: "Riya Sharma",
    email: "riya.sharma@example.com",
    availability: "Weekends",
    interest: "Teaching",
    status: "approved"
  };

  // Function to return badge class based on status
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "status-badge approved";
      case "rejected":
        return "status-badge rejected";
      default:
        return "status-badge pending";
    }
  };

  return (
    <div id="volunteers" className="content-section">
      <div className="section-header">
        <h3>Volunteer Applications</h3>
      </div>
      <div className="section-content">
        <div id="volunteers-list">
          <table className="volunteer-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Availability</th>
                <th>Interest Area</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{volunteer.name}</td>
                <td>{volunteer.email}</td>
                <td>{volunteer.availability}</td>
                <td>{volunteer.interest}</td>
                <td>
                  <span className={getStatusClass(volunteer.status)}>
                    {volunteer.status}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin_Volunteer_Section;
