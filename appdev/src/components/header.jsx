// TheHeader.jsx

import React from 'react';
import { Grid, Input } from '@mui/material';

import './header.css'; // Import your CSS file
import ButtonAppBar from './navbar';

const TheHeader = () => {
  return (
    <div className="headerContainer">
      <Grid className="headerImage">
        <Grid item xs={12}>
          <img src="/appDevHeader.png" alt="noPhoto" className="headerImage" />
        </Grid>
      </Grid>

      <ButtonAppBar/>
    </div>
  );
};

export default TheHeader;
