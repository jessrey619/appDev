import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";


export const MedstaffMain = () => {
    const [reloader,setReloader] = useState(0);
    const [appointments, setAppointments] = useState([{}]);
    const [medStaff, setMedstaff] = useState({});
    const location = useLocation();
    const staffId = location.state.staffId;

    const acceptHandler = (appointment, medstaff) => {
        axios.put(`http://localhost:8080/appointment/updateAppointment?aid=${appointment.aip}`, {
            date: appointment.date,
            time: appointment.time,
            pid: appointment.pid,
            staffName: medstaff.name,
            servtype: appointment.servtype,
            status: true
        })
        .then(response => {
            console.log(response);
            alert("Booking Accepted");
            setReloader(Math.random() * 100);
        })
        .catch(error => {
            console.error('Error updating appointment:', error);
        });
    };

    const deleteHandler = (appointment) => {
        axios.delete(`http://localhost:8080/appointment/deleteAppointment/${appointment.aip}`)
        .then(response => {
            console.log(response);
            alert("Booking Rejected");
            setReloader(Math.random() * 100);
        })
        .catch(error => {
            console.error('Error updating appointment:', error);
        });
    };

    useEffect(()=>{
        axios.post(`http://localhost:8080/medstaff/getSingleMedStaff/${staffId}`)
            .then(response => {
                if (!(response.status === 200)) {
                console.error(response.statusText);
                throw new Error('Network response was not ok');
                }
                return response.data; // Extract the data from the response
            })
            .then(data => {
                setMedstaff(data);
            })
            .catch(error => {
                console.error('Error fetching appointments:', error);
            });
    },[])

    useEffect(()=>{
        axios.get(`http://localhost:8080/appointment/getAllAppointments/`)
            .then(response => {
                if (!(response.status === 200)) {
                console.error(response.statusText);
                throw new Error('Network response was not ok');
                }
                return response.data; // Extract the data from the response
            })
            .then(data => {
                setAppointments(data);
                // console.log(data);
            })
            .catch(error => {
                console.error('Error fetching appointments:', error);
            });
    },[reloader])

    return(
        <div style={{width:'60%', marginLeft:'20%'}}>
            <div style={{display:'flex', fontWeight:'bold', marginBottom:'10px', textAlign:'center'}}>
                <div style={{ marginRight: '10px', width:'25%'}}>Date</div>
                <div style={{ marginRight: '10px', width:'25%' }}>Time</div>
                <div style={{ marginRight: '10px', width:'25%' }}>Service</div>
                <div style={{ marginRight: '10px', width:'25%' }}>Response</div>
              </div>
              <div className='appListList'></div>
            {appointments.map((appointment) => {
                // Check if appointment.status is true
                if (appointment.status === false) {
                  return (
                      <div key={appointment.id} className='appListItem' style={{ display: 'flex' }}>
                        <div
                            style={{
                                width:'100%', display:'flex', alignItems:'center', border:'none', marginBottom:'10px', borderRadius:'10px', textAlign:'center', backgroundColor:'rgb(212, 201, 158)'
                            }}>
                            <div className='appListTxtForDate' style={{ marginRight: '10px', width:'25%' }}>{appointment.date}</div>
                            <div className='appListTxtForDate' style={{ marginRight: '10px', width:'25%' }}>{appointment.time}</div>
                            <div className='appListTxtForDate' style={{ marginRight: '10px', width:'25%' }}>{appointment.servtype}</div>
                            <div className='appListTxtForDate' style={{ marginRight: '0px', width:'12%', textAlign:'right' }}><button 
                                onClick={()=>acceptHandler(appointment,medStaff)}
                                    >Accept</button></div>
                            <div className='appListTxtForDate' style={{ marginRight: '10px', width:'12%', textAlign:'left'}}><button
                                onClick={()=>deleteHandler(appointment)}
                                    >Reject</button></div>
                        </div>
                    </div>
                    
                    );
                }
                // If appointment.status is false, don't render anything
                return null;
                })}
        </div>
    )
}