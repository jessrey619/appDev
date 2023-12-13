import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


export const AllServicesDropDown = (props) => {
    const [services, setServices] = useState([])
    const [selectedService, setSelectedService] = useState()
    const [selectedServiceAvailabiliy, setSelectedServiceAvailability] = useState()
    const [selectedServiceData, setSelectedServiceData] = useState([])
    const [reloader, setReloader] = useState()

    const handleChange = (e) =>{
        setSelectedService(e.target.value)
    }

    props.handler(selectedService)
    

    // Get All Services
    useEffect(() => {
        axios.get(`http://localhost:8080/service/getAllServices`)
            .then(response => {
                if (!(response.status === 200)) {
                console.error(response.statusText);
                throw new Error('Network response was not ok');
                }
                return response.data; // Extract the data from the response
            })
            .then(data => {
                setServices(data);
            })
            .catch(error => {
                console.error('Error fetching appointments:', error);
        });
    }, [reloader]);

    // get service data
    useEffect(() => {
        axios.get(`http://localhost:8080/service/${selectedService}`)
            .then(response => {
                if (!(response.status === 200)) {
                console.error(response.statusText);
                throw new Error('Network response was not ok');
                }
                return response.data; // Extract the data from the response
            })
            .then(data => {
                setSelectedServiceData(data);
                setSelectedServiceAvailability(data.available)
            })
            .catch(error => {
                console.error('Error fetching appointments:', error);
        });
    }, [selectedService]);

    const updateServiceAvailability = async (serviceId, newAvailability) => {
        try {
          // Display a confirmation dialog
          const userConfirmed = window.confirm('Are you sure you want to update the service availability?');
      
          if (!userConfirmed) {
            // If the user cancels the operation, do nothing
            console.log('Service availability update cancelled.');
            return;
          }
          const response = await axios.patch(
            `http://localhost:8080/service/${serviceId}/updateAvailability`,
            null,
            {
              params: { newAvailability },
            }
          );
      
          if (response.status === 200) {
            // Success
            setReloader(Math.random()*100)
            console.log('Service availability updated successfully:', response.data);
            // You can handle the updated data or UI changes here
          } else {
            console.error(`Error updating service availability: ${response.status} - ${response.statusText}`);
            // Handle the error as needed
          }
        } catch (error) {
          console.error('Error updating service availability:', error.message);
          // Handle the error as needed
        }
    };
    
    return(
        <>
            <div>
                <label>Services</label>
                <Box sx={{ minWidth: 120, backgroundColor: 'white' }}>
                <FormControl fullWidth>
                <Select
                    id="demo-simple-select"
                    value={selectedService}
                    onChange={handleChange}
                >
                    {services.map((service) => (
                    <MenuItem
                        key={service.sid}
                        value={service.sid}
                        style={{ color: service.available ? 'black' : 'red' }}
                    >
                        ({service.sid}) {service.servname} : <span style={{fontWeight:'bold'}}>{service.available ? " Available" : ' Unavailable'}</span>
                    </MenuItem>
                    ))}
                </Select>
                </FormControl>
                </Box>
            </div>

            {selectedServiceAvailabiliy ? (
                <Button onClick={()=>{updateServiceAvailability(selectedService, false)}}>Disable Service</Button>
            ): 
            (
                <Button onClick={()=>{updateServiceAvailability(selectedService, true)}}>Enable Service</Button>
            )
            }
            
        </>
    )
}