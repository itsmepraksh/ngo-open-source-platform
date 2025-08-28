 

const Admin_Dashboard_Section = () => {
  return (
    <div id="dashboard" className="content-section  ">
      {/* <!-- Dashboard Section --> */}
      <div className="section-header">
        <h3>Dashboard Overview</h3>
      </div>
      <div className="section-content">
        <div className="cards-grid">
          <div className="card-item">
            <h4>Total Volunteers Applications</h4>
            <p id="total-volunteers">Loading...</p>
          </div>
          <div className="card-item">
            <h4>Total Donations</h4>
            <p id="total-donations">Loading...</p>
          </div>
          <div className="card-item">
            <h4>Active Events</h4>
            <p id="active-events">Loading...</p>
          </div>
          <div className="card-item">
            <h4>Products Sold</h4>
            <p id="products-sold">Loading...</p>
          </div>
        </div>

        <div className="alert alert-success">
          <strong>Welcome!</strong> You can customize all aspects of your
          website from this admin panel.
        </div>
      </div>
    </div>
  );
};

export default Admin_Dashboard_Section;
