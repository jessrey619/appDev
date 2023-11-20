import { Button } from '@mui/material'
import '../css/onsiteMed.css'

export const Onsite = () => {

    return(
        <div className='theRealBG'>
            <div className="onsiteBG">
                <div className="leftSide">
                    <h2>On-site Medical Services</h2>
                    <span style={{ fontStyle: 'italic', fontSize:'18px'}}>On-site Medical Services collectively contribute to creating a safe and healthy school environment.</span>
                    <div className="content">
                        <div className="pair">
                            <div className="number">
                                <h1>1</h1>
                            </div>
                            <div className="numContent">
                                <h3 className='contentTitle'>
                                First Aid and Minor Injury Care:
                                </h3>
                                <div className='description'>
                                Immediate assistance for minor injuries, cuts, bruises, and sprains. School clinic staff provide first aid to address injuries that may occur during school hours.
                                </div>
                            </div>
                        </div>

                        <div className="pair">
                            <div className="number">
                                <h1>2</h1>
                            </div>
                            <div className="numContent">
                                <h3 className='contentTitle'>
                                Illness Assessment and Management:
                                </h3>
                                <div className='description'>
                                Evaluation and management of common illnesses such as colds, flu, headaches, and stomachaches. School clinic professionals assess symptoms and provide basic medical care.
                                </div>
                            </div>
                        </div>

                        <div className="pair">
                            <div className="number">
                                <h1>3</h1>
                            </div>
                            <div className="numContent">
                            <h3 className='contentTitle'>
                                Counseling Services:
                                </h3>
                                <div className='description'>
                                Basic counseling services to support students dealing with stress, anxiety, or other emotional concerns.
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button style={{backgroundColor:'rgb(250,211,3)', boxShadow:'2px 2px 2px 2px rgb(137, 52, 59)', color: 'black'}}>Book an Appointment</Button>
                </div>



                <div className="rightSide">
                    <div className='darkSquare'>
                        <div className='lightSquare'>
                            <div className='Photos'>
                                <img className='onsiteImg' src='../onsite_firstAid.png' alt='FirstAidPic'></img>
                                <img className='onsiteImg' src='../onsite_illness.png' alt='IllnessPic'></img>
                                <img className='onsiteImg' src='../onsite_counseling.png' alt='CounsellPic'></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}