import { Button } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BasicSelect from '../components/DropDownSelect';
import DatePickerValue from '../components/DatePicker';
import TimePickerValue from '../components/Timepicker';
import '../css/appBooking.css';
import { useNavigate } from 'react-router-dom';

export const MedStaffModifySpecific = (props) => {
    const aip = useParams();
    const [appointment, setAppointment] = useState({});
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [service, setService] = useState(null);
    const [compareDate, setCompareDate] = useState('');
    const location = useLocation();
    const staffId = location.state?.staffId;
    
    const [studentName, setStudentName] = useState('');

  const handleDate = (dateData) => {
    setCompareDate(dateData);
    setDate(dateData.format("MMM DD, YYYY"));
  };

  const handleTime = (timeData) => {
    setTime(timeData.format("h:mmA"));
  };

  const handleService = (serviceData) => {
    setService(serviceData);
  };

  useEffect(() => {
    // Fetch appointment details
    axios.post(`http://localhost:8080/appointment/getChosenAppointment/${aip.aid}`)
      .then(response => {
        // console.log(response); // Log the entire response object
  
        if (!(response.status === 200)) {
          console.error(response.statusText);
          throw new Error('Network response was not ok');
        }
  
        return response.data;
      })
      .then(data => {
        // console.log("THIS IS THE DATA:", data);
        if (data) {
          setAppointment(data);
          // Fetch student name based on sid (assuming sid is the correct property)
          return axios.get(`http://localhost:8080/stud/getStudentById/${data.pid}`);
        } else {
          console.error('Data is null or undefined');
        }
      })
      .then(studentResponse => {
        if (studentResponse) {
        //   console.log("THIS IS THE STUDENT DATA: ", studentResponse.data);
          setStudentName(studentResponse.data.fname+" "+studentResponse.data.lname); // Assuming fname is the student's first name
        } else {
          console.error('Student response is null or undefined');
        }
      })
      .catch(error => {
        console.error('Error fetching appointment:', error);
      });
  }, [aip.aid]);
  
  

  useEffect(() => {
    // console.log("date"+date);
    // console.log("time"+time);
    console.log(appointment);
  }, [appointment]);


  const navigate = useNavigate();

  const submitBooking = async () => {
    try {
      // Check if date and time are not empty
      if (date === '' || time === '' || service === null) {
        alert("All fields must be filled");
        return;
      }
  
      // Check if the selected datetime is in the past
      if (compareDate <= new Date()) {
        alert("Selected date and time must be in the future");
        return;
      }
  
      // Ask for confirmation before submitting
      const userConfirmed = window.confirm("Confirm Update with Current Inputted Data?");
      if (!userConfirmed) {
        return;
      } else {
        await axios.put(`http://localhost:8080/appointment/updateAppointment?aid=${aip.aid}`, {
          date: date,
          time: time,
          pid: appointment.pid, // to change to a const pid na kuhaon inig login
          staffName: appointment.staffName, // wait for medstaff api
          servtype: service,
          status: true, // to change to false inig naa nay medstaff
          delete: false
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(() => {
          
          alert("Modification Successful");
  
          // Change the URL after successful submission
          navigate('/medstaff/view-all-bookings', { state: { staffId: staffId } });
        });
      }
  
      // You may add further actions after successful submission here
  
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };
  
    return(
      <div className="appBookBg">
          <div className="mainBody">
              <div className="outsideOuterSquare">
              <h3>MODIFY APPOINTMENT</h3>
              <div className="appBookOutSquare">
                  <div className="appBookInSquare">
                  <div className='inputData'>
                      <div className="inputContainer">
                      <div className="inputField">
                          <span>Name:</span>
                      </div>
                      <div className="inputData">
                          <span>{studentName}</span>
                      </div>
                      </div>
                      <div className="inputContainer">
                      <div className="inputField">
                          <span>Service Type:</span>
                      </div>
                      <span className="inputData">
                          <BasicSelect parentalCallback={handleService} />
                      </span>
                      </div>
                      <div className="inputContainer">
                      <div className="inputField">
                          <span className='inputField'>Date: </span>
                      </div>
                      <span className="inputData">
                          <DatePickerValue parentalCallback={handleDate}/>
                      </span>
                      </div>
                      <div className="inputContainer">
                      <div className="inputField">
                          <span className='inputField'>Time: </span>
                      </div>
                      <span className="inputData">
                          <TimePickerValue parentalCallback={handleTime} />
                      </span>
                      </div>
                  </div>
                  <br />
                  <Button
                      style={{ color: 'black', backgroundColor: 'rgb(223, 190, 57)', width: '100px', boxShadow: '2px 2px 2px 0px' }}
                      onClick={submitBooking}
                  >Submit</Button>
                  <br /><br />
                  </div>
              </div>
              </div>
          </div>
          </div>
    )
  }
