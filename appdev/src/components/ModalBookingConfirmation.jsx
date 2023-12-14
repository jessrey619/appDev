import React from 'react';
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

const ConfirmationModal = ({ open, onClose, onConfirm, type }) => {
    if(type==="modify"){
        return(
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Confirm Action
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to Modify this Appointment?
                    </Typography>
                    <Button onClick={onClose} variant="contained" color="error" sx={{ mt: 2, marginRight: 2 }}>
                        Cancel
                    </Button>
                    <Button onClick={onConfirm} variant="contained" style={{backgroundColor:'gold', color:'black'}} sx={{ mt: 2 }}>
                        Confirm
                    </Button>
                </Box>
            </Modal>
        )
    }
    else if(type==="modify2"){
        return(
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Confirm Modification
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you Sure with the Inputted Data to Proceed Modification?
                    </Typography>
                    <Button onClick={onClose} variant="contained" color="error" sx={{ mt: 2, marginRight: 2 }}>
                        Cancel
                    </Button>
                    <Button onClick={onConfirm} variant="contained" style={{backgroundColor:'gold', color:'black'}} sx={{ mt: 2 }}>
                        Confirm
                    </Button>
                </Box>
            </Modal>
        )
    }
    else if (type === "cancel") {
        return (
          <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Cancel Appointment
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Are you sure you want to Cancel this Appointment?
              </Typography>
              <Button onClick={onClose} variant="contained" color="error" sx={{ mt: 2, marginRight: 2 }}>
                Cancel
              </Button>
              <Button onClick={onConfirm} variant="contained" style={{ backgroundColor: 'gold', color: 'black' }} sx={{ mt: 2 }}>
                Confirm
              </Button>
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
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Confirm Action
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Are you sure you want to proceed with this action?
                </Typography>
                <Button onClick={onClose} variant="contained" color="error" sx={{ mt: 2, marginRight: 2 }}>
                  Cancel
                </Button>
                <Button onClick={onConfirm} variant="contained" style={{backgroundColor:'gold', color:'black'}} sx={{ mt: 2 }}>
                  Confirm
                </Button>
              </Box>
            </Modal>
          );
    }
 
};

export default ConfirmationModal;
