import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BasicSelect from '../components/DropDownSelect';
import DatePickerValue from '../components/DatePicker';
import TimePickerValue from '../components/Timepicker';
import '../css/appBooking.css';

export const AppViewList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/appointment/getAppointment/3`)
      .then(response => {
        if (!(response.status === 200)) {
          console.error(response.statusText);
          throw new Error('Network response was not ok');
        }
        return response.data; // Extract the data from the response
      })
      .then(data => {
        setAppointments(data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
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

  return (
    <div className="appBookBg">
      <div className="sideNav">
        <div className='sideNavButtons'>
          <Link to='/appointments/booking'>
            <Button className='btnBookApp' style={inactiveButton}>Book Appointment</Button>
          </Link>
          <br /><br />
          <Link to='/appointments/view-appointments'>
            <Button className='btnViewApp' style={activeButton}>View Appointments</Button>
          </Link>
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
                            <div style={{ width:'25%'}}>Med Staff</div>
              </div>
              <div className='appListList'>
              {appointments.map((appointment) => {
                // Check if appointment.status is true
                if (appointment.status === true) {
                  return (
                    <Link className='appListLinkToAppointment' to={`/appointments/view-appointments/${appointment.aip}`} style={{ textDecoration:'none'}}>
                      <div key={appointment.id} className='appListItem' style={{ display: 'flex' }}>
                        <button className='appListBtnList'
                          style={{
                            width:'100%', display:'flex', alignItems:'center', border:'none', marginBottom:'10px', borderRadius:'10px'
                          }}>
                          <div className='appListTxtForDate' style={{ marginRight: '10px', width:'20%' }}>{appointment.date}</div>
                          <div className='appListTxtForDate' style={{ marginRight: '10px', width:'20%' }}>{appointment.time}</div>
                          <div className='appListTxtForDate' style={{ marginRight: '10px', width:'20%' }}>{appointment.servtype}</div>
                          <div className='appListTxtForDate2' style={{textAlign:'center', width:'25%'}}>{appointment.sid}</div>
                        </button>
                        
                      </div>
                    </Link>
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
};
