import { Button } from '@mui/material'
import '../css/priAndSpe.css'
import { Link } from 'react-router-dom'
import { PriLabDiag } from '../components/labdiagphotos'

export const PriAndSpe = () => {


    return(
        <div className='theRealBG'>
            <div className="labDiagBg">
                <div className="leftSide">
                    <h2>Primary and Specialty Consultation</h2>
                    <span>Primary and Specialty Consultation includes the basic services that is present on a  daily basis. </span>
                    <div className="content">
                        <div className="pair">
                            <div className="number">
                                <h1>1</h1>
                            </div>
                            <div className="numContent">
                                <h4 className='numContentHeading'>
                                Routine Check-ups:
                                </h4>
                                <div className='numContentContent'>
                                Primary care includes routine check-ups, preventive care, and health maintenance. This may involve vaccinations, screenings, and lifestyle counseling.
                                </div>
                            </div>
                        </div>

                        <div className="pair">
                            <div className="number">
                                <h1>2</h1>
                            </div>
                            <div className="numContent">
                                <h4 className='numContentHeading'>
                                Basic Health Services:
                                </h4>
                                <div className='numContentContent'>
                                Basic health services encompass fundamental healthcare provisions aimed at addressing primary health needs.
                                </div>
                            </div>
                        </div>

                        <div className="pair">
                            <div className="number">
                                <h1>3</h1>
                            </div>
                            <div className="numContent">
                            <h4 className='numContentHeading'>
                                Specialty Consultation:
                                </h4>
                                <div className='numContentContent'>
                                Discover essential health insights with our Basic Blood Tests, including assessments of hemoglobin levels, blood glucose, and cholesterol screening.
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
                    <div className='labDiagOuterSquare'>
                        <div className='labDiagInnerSquare'>
                            <div className='prelabDiagPhotos'>
                            <PriLabDiag Url="/checkup.png.png"/>
                            <PriLabDiag Url="/services.png.png"/>
                            <PriLabDiag Url="/consult.png.png"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}