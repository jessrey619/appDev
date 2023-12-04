// TheHeader.jsx

import React, { useEffect } from 'react';
import { Grid, Input } from '@mui/material';

import './header.css'; // Import your CSS file
import ButtonAppBar from './navbar';

const TheHeader = (props) => {

  const loggedIn = props.loggedIn;

  

  return (
    <div className="headerContainer">
      <Grid className="headerImage">
        <Grid item xs={12}>
          <img src="/appDevHeader.png" alt="noPhoto" className="headerImage" />
        </Grid>
      </Grid>

      <ButtonAppBar loggedIn={loggedIn} handleLogin={props.handleLogin} patient={props.patient} handlePatient={props.handlePatient}/>
    </div>
  );
};

export default TheHeader;
