// TheHeader.jsx

import React from 'react';
import { Grid, Input } from '@mui/material';

import './footer.css'; // Import your CSS file
import ButtonAppBar from './navbar';

const TheFooter = () => {
  return (
    <div className="headerContainer">
      <Grid className="footerImage">
        <Grid item xs={12}>
          <img src="/Footer.png" alt="noPhoto" className="footerImage" />
        </Grid>
      </Grid>
    </div>
  );
};

export default TheFooter;
