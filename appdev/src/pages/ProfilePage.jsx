import { Button, Grid, Input } from "@mui/material";
import { useEffect, useState } from "react";
import '../css/profilePage.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ProfilePage = (props) => {
    const [appointments, setAppointments] = useState([{}]);
    const nav = useNavigate();
    const patient = props.patient;


    const handleBookAppointment = () => {
        // need to add Profile SHit
        nav("/appointments/booking");
    }

    const handleClickAppointment = (aid) => {
        nav(`/appointments/view-appointments/${aid}`, {state: patient.sid});
      }

    useEffect(()=>{
        axios.post(`http://localhost:8080/appointment/getAppointment/${patient.sid}`)
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
    console.log(patient.sid);
    },[])


    if (props.loggedIn !== true) {
        alert("You need to log in to access this page");
        setTimeout(() => {
          // Navigate to the login page or any other desired route
        nav('/appointments');
        }, 0);
    }

    else{
        return (
            <div className="profileTheBg">
                <div className="profileBiggerSquare">
                    <h2>PERSONAL INFORMATION</h2>
                    <hr className="hr"/>
                    <div className="profileBiggerSquareContents">
                        
                        <Grid container className="profileBiggerSquareContentsTopHalf">
                            <Grid item xs={4}>
                                <div  className="inputDisabledDisplayContainer" >
                                    <div className="inputDisabledDisplay">{patient.lname}</div>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div  className="inputDisabledDisplayContainer" >
                                    <div className="inputDisabledDisplay">{patient.fname}</div>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div  className="inputDisabledDisplayContainer" >
                                    <div className="inputDisabledDisplay">{patient.mname}</div>
                                </div>
                            </Grid>
                            <Grid item xs={4}>(Family Name) </Grid>
                            <Grid item xs={4}>(First Name) </Grid>
                            <Grid item xs={4}>(Middle Name) </Grid>
                        </Grid>
                        <Grid container className="profileBiggerSquareContentsBottomHalf">
                            <Grid item xs={4}>
                                <div  className="inputDisabledDisplayContainer" >
                                    <div className="inputDisabledDisplay">{patient.birthdate}</div>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div  className="inputDisabledDisplayContainer" >
                                    <div className="inputDisabledDisplay">{patient.age}</div>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div  className="inputDisabledDisplayContainer" >
                                    <div className="inputDisabledDisplay">{patient.gender}</div>
                                </div>
                            </Grid>
                            <Grid item xs={4}> Date of Birth</Grid>
                            <Grid item xs={4}> Age</Grid>
                            <Grid item xs={4}> Gender</Grid>
                        </Grid>
                        <div className="profileBiggerSquareContentsPakapin">
                        <span className="leftGuy">Patient ID: <span style={{fontWeight:'bold'}}>{patient.sid}</span></span>
                            <span className="rightGuy">
                            Patient Name: <span style={{fontWeight:'bold'}}>
                                {patient.fname.toUpperCase()} {patient.mname.toUpperCase()} {patient.lname.toUpperCase()}
                            </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="profileBottomHalf">
                    <div className="profileBookedAppointments">
                        <h3 style={{margin: '0 auto', marginTop:'10px'}}>BOOKED APPOINTMENTS</h3>
                        <hr className="hr"/>
                        {"TO BE PUT THE APPOINTMENT LISTING"}
                        {appointments.map((appointment) => {
                        // Check if appointment.status is true
                        if (appointment.status === true) {
                            return (
                            <button className='appListLinkToAppointment'
                            style={{width: '90%'}}
                                onClick={()=>{handleClickAppointment(appointment.aip)}}
                                >
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
                    <div className="profileSpaceBtnBookAppointments">
                        <Button style={{color:'black', backgroundColor:'rgb(254,216,57)', border:'1px solid', paddingTop:'15%', paddingBottom:'15%', borderRadius:'10px'}}
                            onClick={handleBookAppointment}>Book Appointment</Button>
                    </div>
                </div>
                
    
            </div>
        );
    }
    
}