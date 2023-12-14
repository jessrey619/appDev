import { useState } from "react";
import { Button, Input } from "@mui/material";
import '../css/appointments.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import ErrorAlertModal from "../components/loginErrorAlertModal";

export const TheAppointment = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
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
        console.log(props);
        console.log(typeof props.loginHandler);
        props.loginHandler(true);
        props.handlePatient(stud);
        console.log('Login successful:', stud);
        navigate("/appointments/booking", { state: { sid: stud.sid } });
      } else {
        console.log('Login failed: Invalid username or password');
        // Display the error alert modal
        setErrorAlert(true);
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Display the error alert modal
      setErrorAlert(true);
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

          {/* Render the ErrorAlertModal component */}
          <ErrorAlertModal open={errorAlert} onClose={() => setErrorAlert(false)} />

          <br /><br />
          <div className="forgotPassword">
            <span className="forgotPass">Forgot your password? </span>
            <Link to="/appointments/forgot-password" className="btnClickHere">
                Click Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
