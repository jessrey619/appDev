import { useState } from "react";
import { AllServicesDropDown } from "../components/MedstaffDisableService";


export const MedstaffDisableService = () => {

    const [selectedService, setSelectedService] = useState() 

    const selectedServiceHandler = (input) => {
        setSelectedService(input)
    }

    return(
        <>
            <AllServicesDropDown handler={selectedServiceHandler}/>
        </>
    )
}