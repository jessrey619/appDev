import { Button } from '@mui/material'
import '../css/labAndDiag.css'
import { Link } from 'react-router-dom'

export const LabAndDiag = () => {


    return(
        <div className='theRealBG'>
            <div className="labDiagBg">
                <div className="leftSide">
                    <h2>Laboratory and Diagnostics</h2>
                    <span>Discover our modern Laboratory, where dedicated healthcare professionals provide precise and personalized health assessments with care and precision. </span>
                    <div className="content">
                        <div className="pair">
                            <div className="number">
                                <h1>1</h1>
                            </div>
                            <div className="numContent">
                                <h4 className='numContentHeading'>
                                Specialized Testing:
                                </h4>
                                <div className='numContentContent'>
                                Experience tailored care with our Specialized Testing services, encompassing allergy testing, COVID-19 testing, STI testing, and immunizations.
                                </div>
                            </div>
                        </div>

                        <div className="pair">
                            <div className="number">
                                <h1>2</h1>
                            </div>
                            <div className="numContent">
                                <h4 className='numContentHeading'>
                                    Wellness Screenings:
                                </h4>
                                <div className='numContentContent'>
                                Elevate your well-being through our Wellness Screenings, featuring personalized care with services such as blood pressure monitoring, weight management, and basic health check-ups
                                </div>
                            </div>
                        </div>

                        <div className="pair">
                            <div className="number">
                                <h1>3</h1>
                            </div>
                            <div className="numContent">
                            <h4 className='numContentHeading'>
                                Basic Blood Tests:
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
                            <div className='labDiagPhotos'>
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