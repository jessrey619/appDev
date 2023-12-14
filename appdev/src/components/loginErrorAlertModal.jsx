import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ErrorAlertModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          An Error Occurred During Login
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {/* You can customize the error message here if needed */}
        </Typography>
        <button onClick={onClose} style={{backgroundColor:"rgb(255,215,0)", padding:'3px'}} sx={{ mt: 2 }}>
          Okay
        </button>
      </Box>
    </Modal>
  );
};

export default ErrorAlertModal;
