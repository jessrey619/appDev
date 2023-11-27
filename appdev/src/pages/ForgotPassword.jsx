import { useState } from "react";
import { Button, Input, alpha, createTheme, getContrastRatio } from "@mui/material";
import '../css/forgotpassword.css';
import { Link } from "react-router-dom";

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

  const handleClearEntries = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="background">
      <div className="forgotouterSquare" style={{   width:'30%', alignItems:'center', textAlign:'center', marginTop:'10px', padding:'0px 50px 50px 50px', boxShadow:'5px 5px 10px 0px'}}>
        <div className="innerSquare">
          <h2 style={{color:'white'}}>Forgot Password</h2>
          <hr />
          <br />
          <div className="inputDiv">
            <span style={{color:'whitesmoke'}}>ID Number:</span>
            <br />
            <Input
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <span style={{color:'whitesmoke'}}>Birthdate:</span>
            <br />
            <Input
              className="input2"
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
             background:'white',
              minWidth: '100px'
            }}
            onClick={handleClearEntries}
          >
            Clear Entries
          </Button>
          <Link to={"./booking"}>
            <Button
                    className="btnLogin"
                    style={{
                    fontSize: '10px',
                    color: 'black',
                    backgroundColor: 'rgb(237, 191, 7)',
                    minWidth: '100px',
                    background:'white'
                    }}
                >
                    Email me!
            </Button>
          </Link>
            
          <br /><br />
          <div className="forgotPassword">
            <span className="forgotPass" style={{color:'whitesmoke'}}>To go to login page, </span>
            <Link to="/appointments">
            <a href="forgot-password" className="btnClickHere" style={{color:'blue'}}>Click here</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
