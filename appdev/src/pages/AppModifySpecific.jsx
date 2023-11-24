import { Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BasicSelect from '../components/DropDownSelect';
import DatePickerValue from '../components/DatePicker';
import TimePickerValue from '../components/Timepicker';
import '../css/appBooking.css';
import { useNavigate } from 'react-router-dom';

export const AppModifySpecific = () => {
    const aip = useParams();
    const [appData, setAppData] = useState({});
    
    const name = "Rhadiel Gwapo Filler";
    const [appointment, setAppointment] = useState({});
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [service, setService] = useState(null);
    const [compareDate, setCompareDate] = useState('');



    useEffect(()=>{
        // get the value of the appointment using the aip value 
        axios.post(`http://localhost:8080/appointment/getChosenAppointment/${aip.aip}`)
            .then(response => {
                if (!(response.status === 200)) {
                console.error(response.statusText);
                throw new Error('Network response was not ok');
                }
                return response.data; // Extract the data from the response
            })
            .then(data => {
                setAppointment(data);
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching appointments:', error);
            });
    }, []);


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
    console.log("date"+date);
    console.log("time"+time);
    console.log(service);
  }, [service, date, time]);

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
        await axios.put(`http://localhost:8080/appointment/updateAppointment?aid=${aip.aip}`, {
          date: date,
          time: time,
          pid: 3, // to change to a const pid na kuhaon inig login
          sid: 1, // wait for medstaff api
          servtype: service,
          status: true, // to change to false inig naa nay medstaff
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(() => {
          alert("Booking Successful Waiting for Confirmation");
  
          // Change the URL after successful submission
          navigate('/appointments/view-appointments');
        });
      }
  
      // You may add further actions after successful submission here
  
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };
  

    return(
        <div className="appBookBg">
            <div className="sideNav">
                <div className='sideNavButtons'>
                <Link to='/appointments/booking'>
                    <Button className='btnBookApp' style={activeButton}>Book Appointment</Button>
                </Link>
                <br /><br />
                <Link to='/appointments/view-appointments'>
                    <Button className='btnViewApp' style={inactiveButton}>View Appointments</Button>
                </Link>
                </div>
            </div>
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
                            <span>{name}</span>
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