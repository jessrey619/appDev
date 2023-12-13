import axios from "axios"
import { useEffect, useState } from "react"
import MedStaffSelect from "../components/MedStaffDropDown"
import { TextareaAutosize } from "@mui/material"


export const MedstaffAddMedRecord = (props) => {

    const [patientId, setPatientId] = useState(0)
    const [patientDetails, setPatientDetails] = useState({})
    const [diagname, setDiagname] = useState("");
    const [diagDesc, setDiagDesc] = useState("");
    const [testname, setTestname] = useState("");
    const [result, setResult] = useState("");

    

    const handlePatientSelect = (selection) => {
        setPatientId(selection)
    }

    const handleTestNameChange = (e) =>{
        setTestname(e.target.value)
    }

    const handleResultChange = (e) =>{
        setResult(e.target.value)
    }

    const handleDiagDescriptionChange = (e)=>{
        setDiagDesc(e.target.value)
        
    }

    const handleDiagNameChange = (e) =>{
        setDiagname(e.target.value)
    }

    const getCurrentFormattedDate = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(currentDate);
    const day = currentDate.getDate().toString().padStart(2, '0');

    const formattedDate = `${month} ${day}, ${year}`;

    return formattedDate;
};

    useEffect(()=>{
        axios.get(`http://localhost:8080/stud/getStudentById/${patientId}`)
      .then(response => {   
        console.log("this is the response: "+response)  
        if (!(response.status === 200)) {
          console.error(response.statusText);
          throw new Error('Network response was not ok');
        }
        return response.data; // Extract the data from the response
      })
      .then(data => {
        setPatientDetails(data);
      })
      .catch(error => {
        console.error('Error fetching student:', error);
      });
    },[patientId])

    const addMedRecord = async () => {
        // Validate if any field is empty or equal to 0
        if (
            patientId === 0 ||
            diagname.trim() === '' ||
            diagDesc.trim() === '' ||
            testname.trim() === '' ||
            result.trim() === ''
        ) {
            alert('All fields must be filled.');
            return;
        }

        try {
            const currentDate = getCurrentFormattedDate();

            const response = await axios.post('http://localhost:8080/medrecords/insertmedrecord', {
                pid: patientId,
                date: currentDate
            });

            // Assuming response.data contains the mrid field
            const mrid = response.data.mrid;

            const forDiagnosis = await axios.post('http://localhost:8080/diagnosis/insertDiagnosis', {
                diagname: diagname,
                description: diagDesc,
                patientId: patientId,
                mrid: mrid
            });

            console.log('Inserted Diagnosis:', forDiagnosis.data);

            const forMedTest = await axios.post('http://localhost:8080/medtest/insertMedtest', {
                testname: testname,
                result: result,
                date: currentDate,
                medRecordEntity: mrid
            });

            console.log('Inserted MedTest:', forMedTest.data);

            console.log('MedRecord added successfully. mrid:', mrid);
        } catch (error) {
            console.error('Error adding MedRecord:', error.response ? error.response.data : error.message);
        }
    };


    // Testers

    // console.log(patientDetails)

    return(
        <div style={{textAlign:'center', marginTop:'5%'}}>
        <h1>Add MedRecord</h1>
        
            <div style={{display:'flex', width:'30%', alignItems:'center', marginLeft:'35%', marginTop:'3%'}}>
                <div style={{ width: '20%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                Patient:
                </div>
            
                <div style={{width:'100%'}}>
                    <MedStaffSelect handlePatientSelect={handlePatientSelect}/>
                </div>
                <div>

                </div>
            </div>

            <div style={{display:'flex', width:'30%', alignItems:'center', marginLeft:'35%', marginTop:'2%'}}>
            {/* AUTOMATICALLY GET THE CURRENT DATE AND TURN IT INTO STRING */}
            <div className="diagnosis" style={{width:'50%', textAlign:'center'}}>
                <label>Diagnosis</label><br/>
                <input type="text" placeholder="diagnosis name" onChange={handleDiagNameChange}/><br/>
                <textarea placeholder="description" onChange={handleDiagDescriptionChange}/>
                {/* Patient ID naa nas taas*/}
            </div>

            <div className="medTest" style={{width:'50%', textAlign:'center'}}>
                <label>MedTest</label><br/>
                {/* auto nang date so inig input matic na */}
                <input placeholder="test name" onChange={handleTestNameChange}/><br/>
                <textarea placeholder="results" onChange={handleResultChange}/>
            </div>
            {/* PATIENT AUTOMATIC NA SA PATIENT NAME NAAS TAAS */}

            
            </div>
            <div style={{textAlign:'center', marginTop:'2%'}}>
            <button onClick={addMedRecord}>Add MedRecord</button>
            </div>
        

{/* TESTING AREA PAKITA RA */}
        
        </div>
    )
}