import { useState } from "react";
import { Button, Input, alpha, createTheme, getContrastRatio } from "@mui/material";
import '../css/forgotpassword.css';
import { Link } from "react-router-dom";
import axios from 'axios';

export const ThePassword = () => {
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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleClearEntries = () => {
    setUsername("");
    setPassword("");
    setError(null); // Clear any previous errors
  };

  const handleUpdatePassword = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/stud/updatePassword/${username}`, {
        newPassword: password,
      });
      console.log('Password updated successfully:', response.data);
      window.alert('Password updated successfully');

    // Optionally, you can reset the form or clear the inputs
      handleClearEntries();
      // Optionally, provide user feedback on success
    } catch (error) {
      console.error('Error updating password:', error);
      setError("Failed to update password. Please try again."); // Set error state
    }
  };

  return (
    <div className="background">
      <div className="forgotouterSquare" style={{ width: '30%', alignItems: 'center', textAlign: 'center', marginTop: '10px', padding: '0px 50px 50px 50px', boxShadow: '5px 5px 10px 0px' }}>
        <div className="innerSquare">
          <h2 style={{ color: 'white' }}>Forgot Password</h2>
          <hr />
          <br />
          <div className="inputDiv">
            <span style={{ color: 'whitesmoke' }}>Username:</span>
            <br />
            <Input
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <span style={{ color: 'whitesmoke' }}>New Password:</span>
            <br />
            <Input
              className="input2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>

          <Button
            className="btnClearEntries"
            style={{
              fontSize: '10px',
              color: 'black',
              background: 'white',
              minWidth: '100px'
            }}
            onClick={handleClearEntries}
          >
            Clear Entries
          </Button>

          <Button
            onClick={handleUpdatePassword}
            className="btnLogin"
            style={{
              fontSize: '10px',
              color: 'black',
              backgroundColor: 'rgb(237, 191, 7)',
              minWidth: '100px',
              background: 'white'
            }}
          >
            Update
          </Button>

          <br /><br />
          <div className="forgotPassword">
            <span className="forgotPass" style={{ color: 'whitesmoke' }}>To go to the login page, </span>
            <Link to="/appointments" className="btnClickHere">
              <span style={{ color: 'blue' }}>Click here</span>
            </Link>
          </div>

          {error && (
            <div style={{ color: 'red', marginTop: '10px' }}>
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
