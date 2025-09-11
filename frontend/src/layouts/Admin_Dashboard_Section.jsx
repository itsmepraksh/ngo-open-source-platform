import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

 

const Admin_Dashboard_Section = () => {

  const [totalEvents, setTotalEvents] = useState(0)
  const [totalInit, setTotalInit] = useState(0)
  const [totalVol, setTotalVol] = useState(0)

  useEffect(() => {
    const unsubscribeEvents = onSnapshot(
    collection(db,"events"),
    (snapShot)=>{
      setTotalEvents(snapShot.docs.length)
    }
  )

  const unsubscribeProjects = onSnapshot(
    collection(db,"key_initiatives"),
    (snapShot)=>{
      setTotalInit(snapShot.docs.length)
    }
  )


  const unsubscribeVol = onSnapshot(
    collection(db,"volunteer"),
    (snapShot)=>{
      setTotalVol(snapShot.docs.length)
    }
  )
  


  return ()=>{
    unsubscribeEvents();
    unsubscribeProjects();
    unsubscribeVol();
  }
  }, []);
  

  


  return (
    <div id="dashboard" className="content-section  "> 
      <div className="section-header">
        <h3>Dashboard Overview</h3>
      </div>
      <div className="section-content">
        <div className="cards-grid">
          <div className="card-item">
            <h4>Total Volunteers Applications</h4>
            <p id="total-volunteers">{totalVol? totalVol :"Loading..."}</p>
          </div>
          <div className="card-item">
            <h4>Total Donations</h4>
            <p id="total-donations">Loading...</p>
          </div>
          <div className="card-item">
            <h4>Active Events</h4>
            <p id="active-events">{ totalEvents ? totalEvents : "Loading..."}</p>
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
