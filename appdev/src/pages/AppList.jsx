import { Button } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/appBooking.css';

export const AppViewList = (props) => {
  const [appointments, setAppointments] = useState([]);

  const location = useLocation();
  const patientId = location.state?.pid;
  const nav = useNavigate();

  const handleBookAppointment = () => {
    nav('/appointments/booking' , { state: { sid: patientId }})
  }

  const handleViewAppointment = () => {
    nav('/appointments/view-appointments' , { state: { pid: patientId }})
  }

  const handleClickAppointment = (aid) => {
    nav(`/appointments/view-appointments/${aid}`, {state:{pid:patientId}});
  }


  useEffect(() => {
    //TODO: Change into object patientID inig login
    axios.post(`http://localhost:8080/appointment/getAppointment/${patientId}`)
      .then(response => {
        if (!(response.status === 200)) {
          console.error(response.statusText);
          throw new Error('Network response was not ok');
        }
        return response.data; // Extract the data from the response
      })
      .then(data => {
        setAppointments(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
    console.log(patientId);

  }, []);

  const inactiveButton = {
    color: 'black',
    backgroundColor: 'rgb(190, 162, 44)',
    padding: '20px',
    minWidth: '200px',
  };

  const activeButton = {
    color: 'black',
    backgroundColor: 'rgb(254, 216, 57)',
    padding: '20px',
    border: 'solid 1px',
    minWidth: '200px',
  };

  const navigate = useNavigate()

  if (props.loggedIn !== true) {
    alert("You need to log in to access this page");
    setTimeout(() => {
      // Navigate to the login page or any other desired route
      navigate('/appointments');
    }, 0);
  }
  
  else{
    return (
      <div className="appBookBg">
        <div className="sideNav">
          <div className='sideNavButtons'>
            <Button className='btnBookApp' style={inactiveButton} onClick={handleBookAppointment}>Book Appointment</Button>
            <br /><br />
            <Button className='btnViewApp' style={activeButton} onClick={handleViewAppointment}>View Appointments</Button>
          </div>
        </div>
        <div className="mainBody">
          <div className="outsideOuterSquare">
            <h3>BOOKED APPOINTMENTS</h3>
            <div className="appBookOutSquare">
              <div className="appListInSquare">
                {/* TODO MAKE THE LIST */}
                
                <div style={{display:'flex', fontWeight:'bold', marginBottom:'10px'}}>
                  <div style={{ marginRight: '10px', width:'20%'}}>Date</div>
                              <div style={{ marginRight: '10px', width:'20%' }}>Time</div>
                              <div style={{ marginRight: '10px', width:'20%' }}>Service</div>
                              <div style={{ width:'35%'}}>Med Staff</div>
                </div>
                <div className='appListList'>
                {appointments.map((appointment) => {
                  // Check if appointment.status is true
                  if (appointment.status === true) {
                    return (
                      <button key={appointment.id} className='appListLinkToAppointment'
                        onClick={()=>{handleClickAppointment(appointment.aip)}}>
                      <div key={appointment.id} className='appListItem' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <div className='appListTxtForDate' style={{ marginRight: '10px', width: '20%' }}>{appointment.date}</div>
                          <div className='appListTxtForDate' style={{ marginRight: '10px', width: '20%' }}>{appointment.time}</div>
                          <div className='appListTxtForDate' style={{  marginRight: '10px',width: '20%' }}>{appointment.servtype}</div>
                          <div className='appListTxtForDate2' style={{ textAlign: 'center', width: '35%' }}>{appointment.staffName}</div>
                      </div>
                  </button>
                  
                    );
                  }
                  // If appointment.status is false, don't render anything
                  return null;
                })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
};
