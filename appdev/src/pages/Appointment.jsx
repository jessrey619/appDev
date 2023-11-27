import { useState } from "react";
import { Button, Input, alpha, createTheme, getContrastRatio } from "@mui/material";
import '../css/appointments.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


export const TheAppointment = () => {
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
  const navigate = useNavigate();

  const handleClearEntries = () => {
    setUsername("");
    setPassword("");
  };

  const studentLoginHandler = async () => {
    try {
      const response = await axios.get('http://localhost:8080/stud/login', {
        params: {
          username: username,
          password: password,
        },
      });
        const stud = response.data;
  
      if (stud) {
        console.log('Login successful:', stud);
  
        navigate("/appointments/booking", { state: { sid: stud.sid } });
      } else {
        console.log('Login failed: Invalid username or password');
        alert("Invalid Username and Password");
      }
    } catch (error) {
      
      console.error('Login failed:', error);
      alert("An error occurred during login");
    }
  };
  
  
  return (
    <div className="background">
      <div className="outerSquare">
        <div className="innerSquare">
          <h2>User Authentication</h2>
          <hr />
          <br />
          <div className="inputDiv">
            <span>Username:</span>
            <br />
            <Input
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <span>Password:</span>
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
              backgroundColor: 'rgb(237, 191, 7)',
              minWidth: '100px'
            }}
            onClick={handleClearEntries}
          >
            Clear Entries
          </Button>
       
            <Button
              onClick={studentLoginHandler}
              className="btnLogin"
              style={{
                fontSize: '10px',
                color: 'black',
                backgroundColor: 'rgb(237, 191, 7)',
                minWidth: '100px'
              }}
            >
              Login
            </Button>
          

          <br /><br />
          <div className="forgotPassword">
            <span className="forgotPass">Forgot your password? </span>
            <Link to="/appointments/forgot-password">
              <a href="forgot-password" className="btnClickHere">Click here</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
