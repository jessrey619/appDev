import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

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


const SuccessModal = ({ open, onClose,type }) => {
    if(type==="modifySuccess"){
        return (
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* Your existing modal content */}
                <Box sx={style}>
                    <div style={{display:'flex'}}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src='../confirmationIcon.png' style={{width:'100px'}}/>
                        </div>
                        <div style={{marginLeft:'5%'}}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            Modification Successful!
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Your appointment has been Modified successfully.<br/>
                                Waiting For Confirmation
                            </Typography>
                        </div>
                        
                    </div>
                    <div style={{textAlign:'center'}}>
                                <Button onClick={onClose} style={{ backgroundColor: "rgb(255,215,0)", color:'black', padding: '3px' }} sx={{ mt: 2 }}>
                                    Okay
                                </Button>
                    </div>
                </Box>
            </Modal>
        );
    }

    else{
        return (
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* Your existing modal content */}
                <Box sx={style}>
                    <div style={{display:'flex'}}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src='../confirmationIcon.png' style={{width:'100px'}}/>
                        </div>
                        <div style={{marginLeft:'5%'}}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            Booking Successful!
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Your appointment has been booked successfully.<br/>
                                Waiting For Confirmation
                            </Typography>
                        </div>
                        
                    </div>
                    <div style={{textAlign:'center'}}>
                                <Button onClick={onClose} style={{ backgroundColor: "rgb(255,215,0)", color:'black', padding: '3px' }} sx={{ mt: 2 }}>
                                    Okay
                                </Button>
                    </div>
                </Box>
            </Modal>
        );
    }
    
  };
  
  export default SuccessModal;
