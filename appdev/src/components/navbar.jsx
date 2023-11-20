
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, alpha, getContrastRatio, ThemeProvider } from '@mui/material/styles';
import { Input } from '@mui/material';
import { Link, useLocation } from "react-router-dom";
import './navStyle.css';
import MenuListComposition from './ProfileDropDown';

const goldBase = '#FFD700';
const goldMain = alpha(goldBase, 0.7);

const theme = createTheme({
  palette: {
    gold: {
      main: goldMain,
      light: alpha(goldBase, 0.5),
      dark: alpha(goldBase, 0.9),
      contrastText: getContrastRatio(goldMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});

const ButtonAppBar = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, margin: 0, padding: 0 }}>
        
        <AppBar position="static" className="appBar" style={{marginTop:'-5px', height:'60px' ,backgroundColor:'rgb(223, 190, 57)', border: '1px solid #000', borderTop: '2px solid #000'}}>
          <Toolbar className="toolbar" style={{marginTop:'0%', paddingLeft:'5%', paddingRight:'3%'}}>
            <Link to="/"><button id="btnHome" className="buttonStyle">Home</button></Link>
            <Link to="/aboutus"><button id="btnAbout" className="buttonStyle">About Us</button></Link>
            <Link to="/services"><button id="btnClinic" className="buttonStyle">Clinical Services</button></Link>
            <Link to="/appointments"><button id="btnAppointment" className="buttonStyle">Appointments</button></Link>
            <Link to="/contact"><button id="btnContact" className="buttonStyle">Contact Us</button></Link>

            <span style={{ marginLeft: 'auto' }}>
              <MenuListComposition />
              {/* <Input
                id="headerSearch"
                placeholder='Search'
                sx={{ bgcolor: 'white', paddingLeft: '10px',  }} />
              */}
            </span>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default ButtonAppBar;