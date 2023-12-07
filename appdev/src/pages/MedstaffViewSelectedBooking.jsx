
    import { Button } from '@mui/material';
    import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
    import axios from 'axios';
    import { useEffect, useState } from 'react';
    import '../css/appBooking.css';

    export const MedstaffViewSpecific = (props) => {
    const [appointments, setAppointments] = useState([]);
    const yes = useParams();
    
    const location = useLocation();
    const staffId = location.state?.staffId;

    useEffect(() => {
        
        axios.post(`http://localhost:8080/appointment/getChosenAppointment/${yes.aid}`)
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
    

    const navigate = useNavigate();

    const handleModifyBtn = () => {
        // Display a confirmation dialog
        const userConfirmed = window.confirm("Are you sure you want to continue with this action?");
        
        // Check if the user clicked OK
        if (userConfirmed) {
        // User confirmed, proceed with the action
        // ... Your action logic here
        
        navigate(`/medstaff/modify-appointment/${appointments.aip}`, { state: { staffId: staffId } });
        console.log("Action confirmed and executed");
        } else {
        // User canceled the action
        console.log("Action canceled");
        }
    };
    

    const handleCancelBtn = (appointment)=> {
        // Display a confirmation dialog
        const isConfirmed = window.confirm('Are you sure you want to cancel this booking?');
        
        // Check if the user confirmed
        if (isConfirmed) {
            axios.put(`http://localhost:8080/appointment/updateAppointment?aid=${appointment.aip}`, {
                // Include the parameters you want to send in the request body
                aid: appointment.aip,
                date: appointment.date,
                time: appointment.time,
                pid: appointment.pid,
                medstaff: appointment.staffName,
                status: false,
                delete: true
            })
            .then(response => {
                console.log(response);
                alert('Booking Cancelled');
                nav('/medstaff/view-all-bookings' , { state: { staffId: staffId }})
            })
            .catch(error => {
                console.error('Error updating appointment:', error);
            });
        } else {
            // User clicked "Cancel" in the confirmation dialog
            alert('Booking rejection canceled');
        }
    }

    const nav = useNavigate();

        return (
        <div className="appBookBg">
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
                                <img className='appViewSelectIcons' src="/medstaffIcon.png" alt="" /> <div className='appViewSelectContent'>{appointments.staffName}</div>
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
                        <Button className='appViewSelectBtnCancel' style={{backgroundColor: 'rgb(137, 56, 52)', marginTop:'3vh', color: 'white', marginBottom:'3vh'}}  
                            onClick={()=>{handleCancelBtn(appointments)}}>Cancel</Button>
    
                        <img className='appViewSelectImg' src='/viewAppointmentSpecific.png' alt='appSpecificPic'></img>
                    </div>
                </div>
    
                </div>
            </div>
            </div>
        </div>
        );

    
    };
