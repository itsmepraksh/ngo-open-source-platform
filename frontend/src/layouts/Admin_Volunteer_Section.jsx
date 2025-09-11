import { useEffect, useState } from 'react';
import '../styles/Admin_Volunteer.css'; 
import { renderData } from '../utils/firebaseHelper';

const Admin_Volunteer_Section = () => { 

  const [volData, setVolData] = useState([])

  useEffect(() => {
    renderData(setVolData)
  }, [])
  
  console.log(volData)
  
  const getStatusClass = (status) => {
    console.log(status)
    switch (status) {
      case "approved":
        return "status-badge approved";
      // case "rejected":
      //   return "status-badge rejected";
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


              { 
              
              (volData.length !=0) ? volData.map((Dta)=>(
                <tr id={Dta.id} key={Dta.id}>
                <td>{Dta.vol_name}</td>
                <td>{Dta.vol_email}</td>
                <td>{Dta.vol_time}</td>
                <td>{Dta.vol_interest}</td>
                <td>
                  <button className={getStatusClass(Dta.vol_status)}>
                    {Dta.vol_status ?"approved": "pending"}
                  </button>
                </td>
              </tr>)
              ) : (<tr>
                <td colSpan="5" className="text-center text-gray-500 p-6">No data found..</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin_Volunteer_Section;
