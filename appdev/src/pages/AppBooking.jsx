import { Button } from '@mui/material'
import '../css/appBooking.css'
import { Link } from 'react-router-dom'
import TimePickerValue from '../components/Timepicker'
import DatePickerValue from '../components/DatePicker'
import { useEffect, useState } from 'react'
import BasicSelect from '../components/DropDownSelect'

export const AppBooking = () => {

    const name = "Rhadiel Gwapo Filler";
    const [date, setDate] = useState({});
    const [time, setTime] = useState({});
    const [service, setService] = useState({});

    const handleDate = (dateData) => {
        setDate(dateData);
    };

    const handleTime = (timeData) => {
        setTime(timeData);
    };

    const handleService = (serviceData) => {
        setService(serviceData);
    }

    useEffect(() => {
        console.log(date);
        console.log(time);
        console.log(service);
    }, [service,date,time]);

    const inactiveButton = {
        color:'black',
        // to change.. if appointment/booking.. change its color to rgb(254,216,57) else if appointment/view-appointments
        backgroundColor:'rgb(190,162,44)',
        padding: '20px',
        minWidth: '200px'
    }

    const activeButton ={
        color:'black',
        // to change.. if appointment/booking.. change its color to rgb(254,216,57) else if appointment/view-appointments
        backgroundColor:'rgb(254,216,57)',
        padding: '20px',
        border: 'solid 1px',
        minWidth: '200px'
    }

    return(
        
        <div className="appBookBg">
            <div className="sideNav">
                <div className='sideNavButtons'>
                    <Link to='/appointments/booking'><Button className='btnBookApp'
                        style={activeButton}
                    >Book Appoinment</Button></Link>
                    <br/><br/>
                    <Link to='/appointments/view-appointments'><Button className='btnViewApp'
                        style={inactiveButton}
                    >View Appoinments</Button></Link>
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
                                    <BasicSelect parentalCallback={handleService}/>
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
                                        <TimePickerValue parentalCallback={handleTime}/>
                                    </span>
                                </div>
                            </div>
                            <br/>

                            {/* TODO: Add Tol */}
                            <Button style={{color:'black', backgroundColor:'rgb(223, 190, 57)', width:'100px', boxShadow:'2px 2px 2px 0px'}}>Submit</Button>
                            <br/><br/>
                            {/* <Link to={"/"}><button className='btnBack'><img className='btnForms' src='../btnBack.png' alt='btnBack'/></button></Link>
                            <Link to={"/appointments/booking"}><button className='btnClear'><img className='btnForms' src='../btnClear.png' alt='btnClear'/></button></Link>
                            <button className='btnNext'><img className='btnForms' src='../btnNext.png' alt='btnNext'/></button>
                             */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}