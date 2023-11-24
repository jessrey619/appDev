import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


export const MedstaffViewBookings = () => {

    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        //TODO: Change into object patientID inig login
        axios.get(`http://localhost:8080/appointment/getAllAppointments`)
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

      const location = useLocation();
      const staffId = location.state?.staffId;
      const nav = useNavigate();
    
      // Check if staffId has a value
      if (!staffId) {
        // If staffId is undefined, show a confirmation dialog
        const isConfirmed = window.confirm("Invalid Entry. Do you want to go back to login?");
    
        // If the user clicks "OK," navigate to "/medstaff/login"
        if (isConfirmed) {
          nav("/medstaff/login");
        }
    
        // You can also return null or a message if you don't want to render anything in this case
        return null;
      }


    return(
        <div>
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
}