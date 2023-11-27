import { Button, Grid, Input } from "@mui/material";
import { useEffect, useState } from "react";
import '../css/profilePage.css'
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
    const [appointments, setAppointments] = useState([{}]);
    const nav = useNavigate();

    const handleBookAppointment = () => {
        // need to add Profile SHit
        nav("/appointments/booking");
    }

    useEffect(()=>{

    },[])

    return (
        <div className="profileTheBg">
            <div className="profileBiggerSquare">
                <h2>PERSONAL INFORMATION</h2>
                <hr className="hr"/>
                <div className="profileBiggerSquareContents">
                    
                    <Grid container className="profileBiggerSquareContentsTopHalf">
                        <Grid item xs={4}>
                            <div  className="inputDisabledDisplayContainer" >
                                <div className="inputDisabledDisplay">{"Filler"}</div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div  className="inputDisabledDisplayContainer" >
                                <div className="inputDisabledDisplay">{"Filler"}</div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div  className="inputDisabledDisplayContainer" >
                                <div className="inputDisabledDisplay">{"Filler"}</div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>(Family Name) </Grid>
                        <Grid item xs={4}>(First Name) </Grid>
                        <Grid item xs={4}>(Middle Name) </Grid>
                    </Grid>
                    <Grid container className="profileBiggerSquareContentsBottomHalf">
                        <Grid item xs={4}>
                            <div  className="inputDisabledDisplayContainer" >
                                <div className="inputDisabledDisplay">{"Filler"}</div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div  className="inputDisabledDisplayContainer" >
                                <div className="inputDisabledDisplay">{"Filler"}</div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div  className="inputDisabledDisplayContainer" >
                                <div className="inputDisabledDisplay">{"Filler"}</div>
                            </div>
                        </Grid>
                        <Grid item xs={4}> Date of Birth</Grid>
                        <Grid item xs={4}> Age</Grid>
                        <Grid item xs={4}> Gender</Grid>
                    </Grid>
                    <div className="profileBiggerSquareContentsPakapin">
                        <span className="leftGuy">Patient ID: {"Filler"}</span> <span className="rightGuy">Patient Name: {"Filler"}</span>
                    </div>
                </div>
            </div>
            <div className="profileBottomHalf">
                <div className="profileBookedAppointments">
                    <h3 style={{margin: '0 auto', marginTop:'10px'}}>BOOKED APPOINTMENTS</h3>
                    <hr className="hr"/>
                    {"TO BE PUT THE APPOINTMENT LISTING"}

                </div>
                <div className="profileSpaceBtnBookAppointments">
                    <Button style={{color:'black', backgroundColor:'rgb(254,216,57)', border:'1px solid', paddingTop:'15%', paddingBottom:'15%', borderRadius:'10px'}}
                        onClick={handleBookAppointment}>Book Appointment</Button>
                </div>
            </div>
            

        </div>
    );
}