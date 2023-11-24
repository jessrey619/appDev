import { Button } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BasicSelect from '../components/DropDownSelect';
import DatePickerValue from '../components/DatePicker';
import TimePickerValue from '../components/Timepicker';
import '../css/appBooking.css';

export const AppViewSpecific = () => {
  const [appointments, setAppointments] = useState([]);
  const yes = useParams();
  

  useEffect(() => {
    
    axios.post(`http://localhost:8080/appointment/getChosenAppointment/${yes.aip}`)
      .then(response => {
        if (!(response.status === 200)) {
          console.error(response.statusText);
          throw new Error('Network response was not ok');
        }
        
        return response.data; // Extract the data from the response
      }).then(data => {
        setAppointments(data);
      })
      .catch(error => {
        console.error('Error fetching appointment:', error);
      });
    console.log(appointments)
  }, [yes]);
  
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
  const navigate = useNavigate();

  const handleModifyBtn = () => {
    // Display a confirmation dialog
    const userConfirmed = window.confirm("Are you sure you want to continue with this action?");
    
    // Check if the user clicked OK
    if (userConfirmed) {
      // User confirmed, proceed with the action
      // ... Your action logic here
      
      navigate(`/appointments/modify-appointment/${appointments.aip}`);
      console.log("Action confirmed and executed");
    } else {
      // User canceled the action
      console.log("Action canceled");
    }
  };
  

  const handleCancelBtn = ()=> {

  }

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
        <div className="appViewSelectOutsideOuterSquare">
          <div className="appViewSelectOutSquare">
            <Link to="/appointments/view-appointments">
              <img src='/appViewSelectBtnBack.png' style={{width:'15px', marginLeft:'30px'}}></img>
            </Link>
            <span className='appViewSelectHeader'>{appointments.servtype} (Booked)</span>
            <div className='appViewSelectInSquare'>
                <div className='appViewSelectLeftSquare'>
                <h1>Your Booking</h1>
                    <div className='appViewSelectBoxForContent'>
                        <div className='appViewSelectContentContainer'>
                            <img className='appViewSelectIcons' src="/clockIcon.png" alt="" /> <div className='appViewSelectContent'>{appointments.time}</div>
                        </div>
                        <div className='appViewSelectContentContainer'>
                            <img className='appViewSelectIcons' src="/calendarIcon.png" alt="" /> <div className='appViewSelectContent'>{appointments.date}</div>
                        </div>
                        <div className='appViewSelectContentContainer'>
                            <img className='appViewSelectIcons' src="/serviceIcon.png" alt="" /> <div className='appViewSelectContent'>{appointments.servtype}</div>
                        </div>
                        <div className='appViewSelectContentContainer'>
                            <img className='appViewSelectIcons' src="/medstaffIcon.png" alt="" /> <div className='appViewSelectContent'>{appointments.sid}</div>
                        </div>
                        
                    </div>
                    <div className='appViewSelectReminders'>
                        Please arrive 5 minutes earlier.
                    </div>
                    <div className='appViewSelectReminders2'>
                        Feel free to make any changes that work for you; we'll be informed!
                    </div>
                </div>

                <div className='appViewSelectRightSquare'>
                    <Button className='appViewSelectBtnModify' style={{backgroundColor: 'rgb(223, 190, 58)', marginTop:'6vh', color: 'black'}}
                      onClick={handleModifyBtn}>Modify</Button><br/>
                    <Button className='appViewSelectBtnCancel' style={{backgroundColor: 'rgb(137, 56, 52)', marginTop:'3vh', color: 'black', marginBottom:'3vh'}}  
                      onClick={handleCancelBtn}>Cancel</Button>

                    <img className='appViewSelectImg' src='/viewAppointmentSpecific.png' alt='appSpecificPic'></img>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
