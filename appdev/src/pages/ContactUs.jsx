import React from 'react';
import { Grid, Paper, Typography, colors } from '@mui/material';

export const PageContactUs = () => {
  const pageServicesBodyStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgb(255, 237, 149)',
    paddingBottom: '5%',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust the height as needed
  };

  const outerGridStyle = {
    width: '300px', // Adjust the width as needed
    height:'100%',
    marginTop: '7%'
  };

  const innerPaperStyle = {
    padding:'20px',
    borderRadius: '15px',
    textAlign: 'center',
    backgroundColor: '#FFE479', // Adjust the background color
    height:'250px',
  };

  const yellowRectangleStyle = {
    backgroundColor: 'white', // Yellow color for the outer rectangle
    height: '100%', // Take up the full height of the grid
    borderRadius: '15px', // Adjust the border radius to match the inner paper

  };

  const imageStyle = {
    width: '50px', // Adjust the width as needed
    height: '50px', // Adjust the height as needed
    marginRight: '10px', // Adjust the spacing between image and text
  };

  return (
    <div className="pageServicesBody" style={pageServicesBodyStyle}>
      <Grid container spacing={1} style={containerStyle}>
        <Grid item xs={5} md={4} style={outerGridStyle}>
          <Grid elevation={3} style={innerPaperStyle}>
            <div style={yellowRectangleStyle}>
            {/* <img src={require('../pin.png')} style={imageStyle} alt="Pin Icon" /> */}
            <div style={{padding:'30px'}}>
              <img src={process.env.PUBLIC_URL + '/pin.png'} style={imageStyle} alt="Pin Icon" />
              <Typography variant="h6">Visit Us</Typography>
              <Typography variant="body1">We are looking forward to welcoming you to our clinic.</Typography>
              <Typography variant="subtitle1" style={{ color: 'red' }}>N. Bacalso Ave., Cebu City, Philippines 6000</Typography>
            </div>
            
            </div>
          </Grid>
        </Grid>
        
        <Grid item xs={5} md={4} style={outerGridStyle}>
          <Grid elevation={3} style={innerPaperStyle}>
            <div style={yellowRectangleStyle}>
            {/* <img src={require('../phone.png')} style={imageStyle} alt="Phone Icon" /> */}
            <div style={{padding:'20px'}}>
              <img src={process.env.PUBLIC_URL + '/phone.png'} style={imageStyle} alt="phone Icon" />
                <Typography variant="h6">Call Us</Typography>
                <Typography variant="body1">Our lines are always open for you.</Typography>
                <Typography variant="subtitle1" style={{ color: 'red' }}>(411-2000)</Typography>
                <Typography variant="subtitle1" style={{ color: 'red' }}>(261-77741)</Typography>
              </div>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={5} md={4} style={outerGridStyle}>
          <Grid elevation={3} style={innerPaperStyle}>
            <div style={yellowRectangleStyle}>
            {/* <img src={require('../email.png')} style={imageStyle} alt="Email Icon" /> */}
            <div style={{padding:'10px'}}>
              <img src={process.env.PUBLIC_URL + '/email.png'} style={imageStyle} alt="Email Icon" />
                <Typography variant="h6">Contact Us</Typography>
                <Typography variant="body1">
                  We have dedicated email addresses for you. Visit the Information Directory page and send inquiries to your
                  specific department.
                </Typography>
                <Typography variant="subtitle1" style={{ color: 'red' }}>example@gmail.com</Typography>
            </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
