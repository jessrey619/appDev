import React from 'react';
import { Grid, Typography} from '@mui/material';
import '../css/home.css';
import { light } from '@mui/material/styles/createPalette';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'


export const Home = () => {
  return (
    <div className="pageServicesBody">
   
      <img
        src="/sht.png"
        alt="Clinic"
        className="clinicImage"
        style={{ maxWidth: '100%', height: 'auto' }}
      />

      <span className="servicesDescription" style={{ textAlign: 'center', marginTop: '3%', marginBottom:'2%', fontWeight:'bold', fontSize:'40'}}>
        The Cebu Institute of Technology-University Clinic is a multi-specialty, full-service clinic that serves a wide range
        of medical services.
        <br />
       
      </span>

        <Grid className="innerRectangle" style={{color:''}}container item xs ={10} borderRadius={10}>  
          <Grid item xs={10} sm={6}>
            <Typography variant="body1" fontWeight="600" fontSize={30} marginTop={4}>
              We're here to provide top-quality medical services and support your academic journey.
            </Typography>
            <Link to="/appointments">
                    <Button style={{backgroundColor:'rgb(250,211,3)', boxShadow:'2px 2px 2px 2px rgb(137, 52, 59)', color: 'black', marginLeft:'0%', marginTop:'10px'}}
                    >Book an Appointment</Button>
                    </Link>
          </Grid>
          
          <Grid item xs={12} sm={6} style={{ backgroundColor: '#FFEFA1', padding: '20px', borderRadius:'20px'}}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '100px' }}>
            
            <Typography variant="body1" color="black" fontWeight="600">
            Make an Appointment
            </Typography>
            <Typography variant="body1" color="black" fontWeight="600">
            Monday - Friday   
            </Typography>
            <Typography variant="body1" color="black" fontWeight="200">
            Your time, Your Care 
            </Typography>
            <Typography variant="body1" color="black" fontWeight="200"  marginBottom={3} marginLeft={1}> 
            8:00am - 4:00pm
            </Typography> 
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '100px' }}>
          
            <Typography variant="body1" color="black" fontWeight="600">
            Visit the clinic
            </Typography>
            <Typography variant="body1" color="black" fontWeight="600">
            Saturday 
            </Typography>
            <Typography variant="body1" color="black" fontWeight="200">
            We're here for you
            </Typography>
            <Typography variant="body1" color="black" fontWeight="200"  marginBottom={3} marginLeft={1}> 
            8:00am - 12:00nn
            </Typography> 
          </div>
          </Grid >
        </Grid>
        
      </div>
  );
};

