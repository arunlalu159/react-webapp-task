/* Dashboard.js */
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import img from './moptro logo.png'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <div className="logo-container">
        <img src={img} alt="Logo" />
      </div>
     

      <div className="details-box">
        <h2 style={{ fontSize: '24px', color: 'white', backgroundColor: 'black' }}>Employee Productivity Dashboard</h2><br></br>
        <div className="day-container">
        <p>
            Productivity On Monday: <span style={{ marginLeft: '100px',color:'#36A546'  }}>4%</span>
          </p>
          <div className="thin-box"></div>
          
          <p>
            Productivity On Tuesday: <span style={{ marginLeft: '100px',color:'#36A546'  }}>92%</span>
          </p>
          <div className="thin-box-1"></div>
          
          <p>
            Productivity On Wednesday: <span style={{ marginLeft: '70px',color:'#36A546'  }}>122%</span>
          </p>
          <div className="thin-box-2"></div>
          
          <p>
            Productivity On Thursday: <span style={{ marginLeft: '90px',color:'#36A546'  }}>93%</span>
          </p>
          <div className="thin-box-3"></div>
          
          <p>
            Productivity On Friday: <span style={{ marginLeft: '110px',color:'#36A546' }}>89%</span>
          </p>
          <div className="thin-box-4"></div>
          
          <p>
            Productivity On Saturday: <span style={{ marginLeft: '90px',color:'#36A546' }}>98%</span>
          </p>
          <div className="thin-box-5"></div>
        </div>
       
      </div>

      <footer className="footer">
        <div className="styled-box">
          <div className="box-content">
            <div className="box-icons">
              <Link to="/dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                </svg>
              </Link>
              <Link to="/user-list">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
                </svg>              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
