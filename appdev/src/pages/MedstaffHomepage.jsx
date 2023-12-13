import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export const MedstaffHomePage = () => {
  const location = useLocation();
  const staffId = location.state?.staffId;
  const nav = useNavigate();

  // Check if staffId has a value
  if (!staffId) {
    // If staffId is undefined, show a confirmation dialog
    const isConfirmed = window.confirm("Invalid Entry. Do you want to go back to login?");

    // If the user clicks "OK," navigate to "/medstaff/login"
    if (isConfirmed) {
      nav("/medstaff/login");
    }

    // You can also return null or a message if you don't want to render anything in this case
    return null;
  }

  // Render the component content if staffId has a value
  return (
    <div style={{ textAlign: "center", marginTop:'10%' }}>
      <Button
        style={{
            width: '200px',
            backgroundColor:'cornsilk',
            marginBottom:'10px',
            color:'black'
        }}
        onClick={() => {
          nav("/medstaff/respondbooking", { state: { staffId: staffId } });
        }}
      >
        Respond To Bookings
      </Button>
      <br />
      <Button
        style={{
            width: '200px',
            backgroundColor:'cornsilk',
            color:'black',
            marginBottom:'10px',
        }}
        onClick={() => {
          nav("/medstaff/view-all-bookings", { state: { staffId: staffId } });
        }}
      >
        View All Bookings
      </Button>
      <br />
      <Button
        style={{
            width: '200px',
            backgroundColor:'cornsilk',
            color:'black',
            marginBottom:'10px',
        }}
        onClick={() => {
          nav("/medstaff/add-medrecord", { state: { staffId: staffId } });
        }}
      >
        Add MedRecord
      </Button>
      <br />
      <Button
        style={{
            width: '200px',
            backgroundColor:'cornsilk',
            marginBottom:'10px',
            color:'black'
        }}
        onClick={() => {
          nav("/medstaff/add-diagnosis", { state: { staffId: staffId } });
        }}
      >
        View and Update MedRecords
      </Button>
      <br />
      <Button
        style={{
            width: '200px',
            backgroundColor:'cornsilk',
            marginBottom:'10px',
            color:'black'
        }}
        onClick={() => {
          nav("/medstaff/disable-service", { state: { staffId: staffId } });
        }}
      >
        Disable Service
      </Button>
    </div>
  );
};
