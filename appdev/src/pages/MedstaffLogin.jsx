import { Button, Input } from "@mui/material";
import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const MedStaffLoginPage = () => {
    const navigate = useNavigate();

    const medStaffLoginHandler = async () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await axios.get('http://localhost:8080/medstaff/login', {
                params: {
                    username: username,
                    password: password,
                },
            });

            // Assuming the response contains the user data
            const medStaff = response.data;

            // Do something with the medStaff data, e.g., store it in state or local storage
            console.log('Login successful:', medStaff);

            // Use navigate to change the URL to "/admin/homepage" and pass staffId as a state
            navigate("/admin/homepage", { state: { staffId: medStaff.staffId } });

        } catch (error) {
            // Handle login error, e.g., show an error message to the user
            console.error('Login failed:', error);
            alert("Invalid Username and Password");
        }
    };

    return (
        <div className="adminLoginOuterSquare" style={{ width: '100%', textAlign: 'center', marginTop: '10%' }}>
            <div className="adminLoginInnerSquare" style={{ width: '30%', marginLeft: '35%', backgroundColor: 'white', height: '200px', paddingTop: '100px' }}>
                <Input id="username" placeholder="Username" /><br />
                <Input id="password" type="password" placeholder="Password" /><br />
                <Button onClick={medStaffLoginHandler}>Login</Button>
            </div>
        </div>
    );
};
