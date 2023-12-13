import { useEffect, useState } from "react"
import SelectPatientAndMedRecord from "../components/SelectPatientToSelectMedRecordDropDown"
import axios from "axios"
import '../css/medstaffButton.css'


export const MedstaffAddDiag = () =>{

    const [patientId,setPatientId] = useState(null)
    const [medRecId,setMedRecId] = useState(null)
    const [diagnosisId, setDiagnosisId] = useState(null)
    const [medtestId, setMedTestId] = useState(null)
    const [diagnoses, setDiagnoses] = useState({})
    const [medRecord, setMedRecord] = useState({})
    const [medtest, setMedTest] = useState({})
    const [editDiagnosis, setEditDiagnosis] = useState(false)
    const [addDiagnosis, setAddDiagnosis] = useState(false)
    const [addMedtest, setAddMedtest] = useState(false)
    const [editMedtest, setEditMedtest] = useState(false)
    const [diagnosisName, setDiagnosisName] = useState(null)
    const [diagDesc, setDiagDesc] = useState(null)
    const [medtestName, setMedtestName] = useState(null)
    const [medtestResult, setMedtestResult] = useState(null)
    const [reloader, setReloader] = useState(null)
    

    function getCurrentFormattedDate() {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const currentDate = new Date().toLocaleDateString('en-US', options);
        return currentDate;
    }

    const diagNameChangeHandler = (e) => {
        setDiagnosisName(e.target.value)
    }

    const diagDescChangeHandler = (e) => {
        setDiagDesc(e.target.value)
    }

    const medtestNameChangeHandler = (e) => {
        setMedtestName(e.target.value)
    }

    const medtestResultChangeHander = (e) => {
        setMedtestResult(e.target.value)
    }

    const reloaderHandler = () => {
        setReloader(Math.random*100)
    }

    const patientIdHandler = (selection) => {
        setPatientId(selection);
        setMedRecId("")
        setMedRecord({})
        setDiagnosisId("")
        setDiagnoses({})
        setMedTestId("")
    }

    const medRecHandler = (selection) => {
        setMedRecId(selection)
        setDiagnosisId("")
        setDiagnoses({})
        setMedTest({})
        setMedTestId("")
    }

    const diagnosisHandler = (selection) => {
        setDiagnosisId(selection)
        setMedTestId("")
    }

    const medtestHandler = (selection) => {
        setMedTestId(selection)
    }

    const handleAddMedrecordConfirm = async () => {
        try {
          // Check if patientId and medRecId are not their default values
          if (patientId) {
            // Display a confirmation dialog to the user
            const userConfirmed = window.confirm('Are you sure you want to add a new medrecord?');
        
            if (userConfirmed) {
              // Perform the POST request if the user confirms
              const response = await axios.post('http://localhost:8080/medrecords/insertmedrecord', {
                pid: patientId,
                date: getCurrentFormattedDate(),
              });
        
              // Handle the response as needed
              console.log('Medrecord added successfully:', response.data);
              reloaderHandler();
              alert("Med Record added successfully");
            } else {
              // User canceled the operation
              console.log('Operation canceled by the user');
            }
          } else {
            // Handle the case where patientId or medRecId is in its default state
            alert('Please select a patient and a medical record before adding a new medrecord.');
          }
        } catch (error) {
          console.error('Error adding medrecord:', error);
          // Optionally, handle errors or display an error message to the user
        }
    };
    
    const handleAddDiagnosisConfirm = async () => {
        const confirmed = window.confirm('Are you sure you want to add this diagnosis?');
      
        if (!confirmed) {
          // User canceled, do nothing
          return;
        }
      
        try {
          // Check if patientId, medRecId, diagname, and diagdesc are not in their default states
          if (patientId && medRecId && diagnosisName !== null && diagDesc !== null) {
            const response = await axios.post('http://localhost:8080/diagnosis/insertDiagnosis', {
              diagname: diagnosisName,
              description: diagDesc,
              patientId: patientId,
              mrid: medRecId
            });
      
            // Handle the response, e.g., display a success message
            console.log('Diagnosis added successfully:', response.data);
            alert("Diagnosis added successfully");
            reloaderHandler();
            setDiagnosisName("");
            setDiagDesc("");
          } else {
            // Handle the case where any of the required values are in their default state
            alert('Please make sure to fill in all the required information before adding a new diagnosis.');
          }
        } catch (error) {
          // Handle errors, e.g., display an error message
          console.error('Error adding diagnosis:', error);
        }
    };

    const handleAddMedTestConfirm = async () => {
        const confirmed = window.confirm('Are you sure you want to add this Medtest?');
      
        if (!confirmed) {
          // User canceled, do nothing
          return;
        }
      
        try {
          // Check if medRecId, medtestName, and medtestResult are not in their default states
          if (medRecId && medtestName !== null && medtestResult !== null) {
            const response = await axios.post('http://localhost:8080/medtest/insertMedtest', {
              testname: medtestName,
              result: medtestResult,
              date: getCurrentFormattedDate(),
              medRecordEntity: medRecId
            });
      
            // Handle the response, e.g., display a success message
            console.log('Medtest added successfully:', response.data);
            alert("Medtest added successfully");
            reloaderHandler();
            setMedtestName("");
            setMedtestResult("");
          } else {
            // Handle the case where any of the required values are in their default state
            alert('Please make sure to fill in all the required information before adding a new Medtest.');
          }
        } catch (error) {
          // Handle errors, e.g., display an error message
          console.error('Error adding Medtest:', error);
        }
    };

    const updateMedTestDelete = async (mid) => {
        try {
          const confirmed = window.confirm('Are you sure you want to delete this Medtest?');
          
          if (!confirmed) {
            // User canceled, do nothing
            return;
          }
          // Fetch the existing Medtest details
          const response = await axios.get(`http://localhost:8080/medtest/getMedTestByMid/${mid}`);
          const existingMedtest = response.data;
      
          // Update the delete variable
          existingMedtest.delete = true;
      
          // Send the updated Medtest details to the server
          const updateResponse = await axios.put(`http://localhost:8080/medtest/updateMedTest?mid=${mid}`, existingMedtest);
      
          // Handle the response, e.g., display a success message
          console.log('Medtest delete variable updated successfully:', updateResponse.data);
          alert("Medtest delete variable updated successfully");
        } catch (error) {
          // Handle errors, e.g., display an error message
          console.error('Error updating Medtest delete variable:', error);
        }
    };

    // FETCH MED RECORD
    useEffect(() => {
        const fetchDiagnoses = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/medrecords/getChosenMrid/${medRecId}`);
            setMedRecord(response.data);
          } catch (error) {
            console.error("Error fetching diagnoses:", error);
          }
        };
    
        fetchDiagnoses();
      }, [medRecId, patientId, reloader]);

      console.log(medRecord)
      console.log(diagnosisId);
    
    // FETCH DIAGNOSIS
    useEffect(() => {
        const fetchDiagnoses = async () => {
            try {
                if (medRecId && diagnosisId) {
                    const response = await axios.get(`http://localhost:8080/diagnosis/findByDid/${diagnosisId}`);
                    setDiagnoses(response.data);
                }
            } catch (error) {
                console.error("Error fetching diagnoses:", error);
            }
        };
    
        fetchDiagnoses();
    }, [medRecId, diagnosisId, reloader]);

    // FETCH MEDTESTS
    useEffect(()=> {
        const fetchMedtests = async () => {
            try {
                if (medRecId && diagnosisId) {
                    const response = await axios.get(`http://localhost:8080/medtest/getMedTestByMid/${medtestId}`);
                    setMedTest(response.data);
                }
            } catch (error) {
                console.error("Error fetching diagnoses:", error);
            }
        };
    
        fetchMedtests();
    }, [medRecId, medtestId, reloader])

    return(
        <div>
            <div style={{textAlign:'center', marginTop:'2%'}}><h1>View and Update Medrecords</h1></div>
            <div style={{width:'40%', marginLeft:'30%'}}>
                <SelectPatientAndMedRecord patientIdHandler={patientIdHandler} medRecHandler={medRecHandler} diagnosisHandler={diagnosisHandler} medTestHander={medtestHandler} reloader = {reloader}/>
            </div>
            
        <div style={{display:'flex', marginLeft:'30%', marginTop:'2%'}}>
        <div className="forMedRecord" style={{width:'20%', textAlign:'center'}}>
            {/* Check if there are medRecords */}
            <label style={{fontWeight:'bold', fontSize:'130%'}}>MedRecord</label>
            {medRecId !== null ? (
                <>
                    <p><span style={{fontWeight:'bold'}}>MedRecord ID: </span><br/>{medRecord.mrid}</p>
                    <p><span style={{fontWeight:'bold'}}>Date Modified: </span><br/>{medRecord.date}</p>
                </>
            ) : (
                <p>No MedRecords For this Patient</p>
            )}
            </div>

            <div className="forDiagnosis"style={{width:'20%', textAlign:'center'}} >
                {/* Check if there are diagnoses */}
                <label style={{fontWeight:'bold', fontSize:'130%'}}>Diagnosis</label>
                {diagnosisId !== null ? (
                
                    <div key={diagnoses.did}>
                    {/* Render diagnosis details */}
                    <p><span style={{fontWeight:'bold'}}>Diagnosis Name: </span><br/>{diagnoses.diagname}</p>
                    <p><span style={{fontWeight:'bold'}}>Description:</span><br/> {diagnoses.description}</p>
                    </div>
                
                ) : (
                <p>No diagnoses under this medrecord</p>
                )}
                {addDiagnosis && (
                    <>
                        <input onChange={diagNameChangeHandler} value={diagnosisName} placeholder="diagnosis name"/><br/>
                        <textarea onChange={diagDescChangeHandler} value={diagDesc} placeholder="description"/><br/>
                        <button className="confirm" onClick={handleAddDiagnosisConfirm}>Confirm</button><br/>
                    </>
                    
                )}

                {editDiagnosis && (
                    <>
                        <button>Delete</button><br/>
                    </>
                )}

                <button className="add" onClick={() => {setAddDiagnosis(!addDiagnosis) 
                        setEditDiagnosis(false)}}>
                    {addDiagnosis ? 'Cancel' : 'Add'}
                </button>
                <button className="edit" onClick={() => {setEditDiagnosis(!editDiagnosis)
                    setAddDiagnosis(false) }}>
                    {editDiagnosis? 'Cancel':'Edit'}
                </button>
            </div>

            <div className="forMedTests" style={{width:'20%', textAlign:'center'}}>
                    {/* Check if there are diagnoses */}
                    <label style={{fontWeight:'bold', fontSize:'130%'}}>MedTest</label>
                    {medtestId !== null ? (
                    
                        <div key={medtest.did}>
                        {/* Render diagnosis details */}
                        <p><span style={{fontWeight:'bold'}}>MedTest Name: </span><br/>{medtest.testname}</p>
                        <p><span style={{fontWeight:'bold'}}>MedTest Result: </span><br/>{medtest.result}</p>
                        <p><span style={{fontWeight:'bold'}}>Date:</span><br/> {medtest.date}</p>
                        </div>
                    
                    ) : (
                    <p>No Medtests under this medrecord</p>
                    )}
                    {addMedtest && (
                        <>
                            <input onChange={medtestNameChangeHandler} value={medtestName} placeholder="medtest name"/><br/>
                            <textarea onChange={medtestResultChangeHander} value={medtestResult} placeholder="result"/><br/>
                            <button className="confirm" onClick={handleAddMedTestConfirm}>Confirm</button><br/>
                        </>
                        
                    )}

                    {editMedtest && (
                        <>
                            <button onClick={()=>{updateMedTestDelete(medtestId)}}>Delete</button><br/>
                        </>
                    )}

                    <button className="add" onClick={() => {setAddMedtest(!addMedtest)
                        setEditMedtest(false)}}>
                        {addMedtest ? 'Cancel' : 'Add'}
                    </button>
                    <button className="edit" onClick={() => {setEditMedtest(!editMedtest)
                        setAddMedtest(false)}}>
                        {editMedtest? 'Cancel':'Edit'}
                    </button>
            </div>
        </div>
            
        
        </div>
    )
}