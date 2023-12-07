import { Link } from 'react-router-dom';
import '../css/clinicServices.css'
import {Grid} from '@mui/material';

export const PageServices = () =>{


    
    return(
        <div className="pageServicesBody">
            <h1 className="ourServices">
                Our Services
            </h1>
            <span className='servicesDescription' style={{textAlign:'center', marginBottom:'2%'}}>
                The Cebu Institute of Technology-University Clinic is a multi-specialty, full service clinic that serves a wide range of medical services.<br/>
                Click on each icon to learn more about these services.
            </span>
            <div className='clinicOuterRectangle' >
                <Grid className='clinicInnerRectangle' container>
                    <Grid className='btnContainers'item xs={4}>
                        <Link to="/appointments">
                            <button className='btnService'><img className='logoService' src='../medLogo1.png' alt='MedServButton'/></button>
                        </Link>
                    </Grid>
                    <Grid className='btnContainers' item xs={4}>
                        <Link to="/appointments">
                            <button className='btnService'><img className='logoService' src='../medLogo3.png' alt='MedServButton'/></button>
                        </Link>
                    </Grid>
                    <Grid className='btnContainers' item xs={4}>
                        <Link to="/services/laboratory-and-diagnostics">
                            <button className='btnService'><img className='logoService' src='../medLogo2.png' alt='MedServButton'/></button>
                        </Link>
                    </Grid>
                    
                    
                        <Grid className='txtButton' item xs={4}>
                                <span>Primary and Specialty<br/> Consultation</span>
                        </Grid>
                        <Grid className='txtButton' item xs={4}>
                                <span>Online Consultation</span>
                        </Grid>
                        <Grid className='txtButton' item xs={4}>
                                <span>Laboratory and <br/>Diagnostics</span>
                        </Grid>
                        

                        {/* bottom half */}
                    <Grid container>
                        <Grid className='btnContainers' item xs={6} style={{paddingLeft:'18%', maxHeight:'100px'}}>
                            <Link to="/services/medical-service">
                                <button className='btnService'><img className='logoService' src='../medLogo4.png' alt='MedServButton'/></button>
                            </Link>
                        </Grid>
                        <Grid className='btnContainers' item xs={6} style={{paddingRight:'18%'}}>
                            <Link to="/services/on-site-medical-services">
                                <button className='btnService'><img className='logoService' src='../medLogo5.png' alt='MedServButton'/></button>
                            </Link>
                        </Grid>
                        <Grid className='txtButton' item xs={6} style={{paddingLeft:'18%'}}>
                                <span>Medical Services</span>
                            </Grid>
                            <Grid className='txtButton' item xs={6} style={{paddingRight:'18%'}}>
                                <span>On-site Medical<br/> Services</span>
                            </Grid>
                    </Grid>
                </Grid>
            </div>

        </div>
        
    )
}