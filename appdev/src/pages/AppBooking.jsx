import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BasicSelect from '../components/DropDownSelect';
import DatePickerValue from '../components/DatePicker';
import TimePickerValue from '../components/Timepicker';
import '../css/appBooking.css';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../components/ModalBookingConfirmation';
import SuccessModal from '../components/ModalBookingSuccessful';

export const AppBooking = (props) => {
  const patientId = props.patient.sid;
  const nav = useNavigate();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState(null);
  const [compareDate, setCompareDate] = useState('');
  const [patientData, setPatientData] = useState({});
  const [name, setName] = useState('');
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/stud/getStudentById/${patientId}`)
      .then(response => {
        if (!(response.status === 200)) {
          console.error(response.statusText);
          throw new Error('Network response was not ok');
        }
        return response.data; // Extract the data from the response
      })
      .then(data => {
        setPatientData(data);
        setName(`${data.fname} ${data.lname}`);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  }, [patientId]);

  const handleBookAppointment = () => {
    nav('/appointments/booking', { state: { pid: patientId } })
  }

  const handleViewAppointment = () => {
    nav('/appointments/view-appointments', { state: { pid: patientId } })
  }

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

      // Open the confirmation modal before submitting
      setConfirmationModalOpen(true);
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  const handleSuccessClose = () => {
    // Close the success modal
    setSuccessModalOpen(false);

    // Change the URL after successful submission
    navigate('/appointments/view-appointments', { state: { pid: patientId } });
  };

  const handleConfirmation = async () => {
    // Close the confirmation modal
    setConfirmationModalOpen(false);
    setSuccessModalOpen(true);
  
    // Continue with the booking submission
    try {
      await axios.post("http://localhost:8080/appointment/insertAppointment", {
        date: date,
        time: time,
        pid: patientId,
        staffname: "",
        servtype: service,
        status: false,
        delete: false
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

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

  if (props.loggedIn !== true) {
    alert("You need to log in to access this page");
    setTimeout(() => {
      // Navigate to the login page or any other desired route
      navigate('/appointments');
    }, 0);
  }

  return (
    <div className="appBookBg">
      <div className="sideNav">
        <div className='sideNavButtons'>
          <Button className='btnBookApp' style={activeButton} onClick={handleBookAppointment}>Book Appointment</Button>
          <br /><br />
          <Button className='btnViewApp' style={inactiveButton} onClick={handleViewAppointment}>View Appointments</Button>
        </div>
      </div>
      <div className="mainBody">
        <div className="outsideOuterSquare">
          <h3>APPOINTMENT SERVICES</h3>
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
                    <DatePickerValue parentalCallback={handleDate} />
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

              {/* Render the ConfirmationModal component */}
              <ConfirmationModal
                open={confirmationModalOpen}
                onClose={() => setConfirmationModalOpen(false)}
                onConfirm={handleConfirmation}
              />

              {/* Render the SuccessModal component */}
              <SuccessModal
                open={successModalOpen}
                onClose={handleSuccessClose}  // Add this line
              />
              
              <br /><br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
