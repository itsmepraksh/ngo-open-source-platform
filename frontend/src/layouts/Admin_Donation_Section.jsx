import React from 'react';
import '../styles/Admin_Donation.css';

const Admin_Donation_Section = () => {
  // Single dummy donation record
  const donation = {
    name: "Riya Sharma",
    email: "riya.sharma@example.com",
    amount: "₹5,000",
    date: "2025-09-01",
    method: "UPI",
    status: "failed"
  };

  // Function to style status badges
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "successful":
        return "status-badge success";
      case "pending":
        return "status-badge pending";
      case "failed":
        return "status-badge failed";
      default:
        return "status-badge";
    }
  };

  return (
    <div id="donations" className="content-section">
      <div className="section-header">
        <h3>Donation Records</h3>
      </div>
      <div className="section-content">
        <div id="donations-list">
          <table className="donation-table">
            <thead>
              <tr>
                <th>Donor Name</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Payment Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{donation.name}</td>
                <td>{donation.email}</td>
                <td>{donation.amount}</td>
                <td>{donation.date}</td>
                <td>{donation.method}</td>
                <td>
                  <span className={getStatusClass(donation.status)}>
                    {donation.status}
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

export default Admin_Donation_Section;
