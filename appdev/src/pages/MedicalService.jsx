import { Button } from '@mui/material'
import '../css/MedicalService.css'
import { Link } from 'react-router-dom'

export const LabAndDiag = () => {


    return(
        <div className='theRealBG'>
            <div className="labDiagBg">
                <div className="leftSide">
                    <h2>Medical Services</h2>
                    <span>Daily Medical Services encompass essential primary and specialty consultations provided on a regular basis in a clinic setting. </span>
                    <div className="content">
                        <div className="pair">
                            <div className="number">
                                <h1>1</h1>
                            </div>
                            <div className="numContent">
                                <h4 className='numContentHeading'>
                                Emergency Care:
                                </h4>
                                <div className='numContentContent'>
                                A school clinic is outfitted with the necessary resources and trained personnel to promptly administer initial care for minor injuries and emergencies among students.
                                </div>
                            </div>
                        </div>

                        <div className="pair">
                            <div className="number">
                                <h1>2</h1>
                            </div>
                            <div className="numContent">
                                <h4 className='numContentHeading'>
                                    Health Services:
                                </h4>
                                <div className='numContentContent'>
                                Routine health assessments within educational institutions, incorporating vision, hearing, and dental screenings, are crucial for the early detection and management of potential health concerns among students.
                                </div>
                            </div>
                        </div>

                        <div className="pair">
                            <div className="number">
                                <h1>3</h1>
                            </div>
                            <div className="numContent">
                            <h4 className='numContentHeading'>
                                Health Education & Counseling:
                                </h4>
                                <div className='numContentContent'>
                                School clinics play a vital role in health education, teaching students about healthy choices and providing counseling services. Counselors in the clinic offer support for various health-related issues, including stress and mental health concerns.
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/appointments">
                    <Button style={{backgroundColor:'rgb(250,211,3)', boxShadow:'2px 2px 2px 2px rgb(137, 52, 59)', color: 'black'}}
                    >Book an Appointment</Button>
                    </Link>
                </div>



                <div className="rightSide">
                    <div className='MedicalServiceSquare'>
                        <div className='MedicalServiceInnerSquare'>
                            <div className='MedicalServicesPhotos'>
                                <img className='labDiagImg' src='../photoSample.png' alt='photo'></img>
                                <img className='labDiagImg' src='../photoSample.png' alt='photo'></img>
                                <img className='labDiagImg2' src='../photoSample.png' alt='photo'></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}