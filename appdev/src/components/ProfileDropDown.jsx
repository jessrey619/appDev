import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export default function MenuListComposition(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);


  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const nav = useNavigate();
  const goToProfile = () => {
    setOpen(false)
    nav('/profile');
  }

  const login = () => {
    nav('/appointments');
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleLogout = () => {
    props.handleLogin(false);
    props.handlePatient({});
    setOpen(false)
    nav("/appointments")
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const buttonStyle = {
    color: 'black',
    backgroundColor: 'rgb(190,162,44)',
    fontSize: '15px',
    borderRadius: '20px',
    border: 'none',
    width: '100%',
    padding: '2px',
    transition: 'background-color 0.3s', // Add transition for smooth effect
    };

    const hoverStyle = {
        backgroundColor: 'rgb(254, 216, 57)',
    };

    if(props.loggedIn === true){
      return (
        <Stack direction="row" spacing={2} style={{backgroundColor:'rgb(190,162,44)', borderRadius:'20px', border:'2px solid black', width:'110px', textAlign:'center',alignContent:'center', padding:'0px'}}>
          <div style={{backgroundColor:'transparent', width:'100%', padding: '0px'}}>
          <button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                style={buttonStyle}
                onMouseOver={() => {
                    anchorRef.current.style.backgroundColor = hoverStyle.backgroundColor;
                }}
                onMouseOut={() => {
                    anchorRef.current.style.backgroundColor = buttonStyle.backgroundColor;
                }}
            >
                <img src='/profileIcon.png' style={{width:'13px', marginRight:'15px'}}/>
                Profile
                <img src='/profileDropDown.png' style={{width:'13px', marginLeft:'15px'}}/>
            </button>
    
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={goToProfile}>Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Stack>
      );
    }

    else{
      return (
        <Stack direction="row" spacing={2} style={{backgroundColor:'rgb(190,162,44)', borderRadius:'20px', border:'2px solid black', width:'110px', textAlign:'center',alignContent:'center', padding:'0px'}}>
          <div style={{backgroundColor:'transparent', width:'100%', padding: '0px'}}>
          <button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                style={buttonStyle}
                onMouseOver={() => {
                    anchorRef.current.style.backgroundColor = hoverStyle.backgroundColor;
                }}
                onMouseOut={() => {
                    anchorRef.current.style.backgroundColor = buttonStyle.backgroundColor;
                }}
            >
                <img src='/profileIcon.png' style={{width:'13px', marginRight:'15px'}}/>
                Menu
                <img src='/profileDropDown.png' style={{width:'13px', marginLeft:'15px'}}/>
            </button>
    
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={login}>Login</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Stack>
      );
    }
}
