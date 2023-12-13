import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function SelectPatientAndMedRecord(props) {
  const [selectedMedrecord, setSelectedMedrecord] = React.useState("");
  const [patients, setPatients] = React.useState([]);
  const [selectedPatient, setSelectedPatient] = React.useState()
  const [medrecord, setMedRecord] = React.useState([{}])
  const [selectedDiagnosis, setSelectedDiagnosis] = React.useState(null)
  const [diagnoses, setDiagnoses] = React.useState([{}])
  const [selectedMedTest, setSelectedMedtest] = React.useState(null)
  const [medtests, setMedTests] = React.useState([{}])


  const handleChange = (event) => {
    setSelectedPatient(event.target.value);
    // Reset selectedMedrecord, selectedDiagnosis, and selectedMedTest when Patient changes
    setSelectedMedrecord("");
    setSelectedDiagnosis(null);
    setSelectedMedtest(null);
    props.patientIdHandler(event.target.value);
  };
  
  const handleMedRecChange = (event) => {
    setSelectedMedrecord(event.target.value);
    // Reset selectedDiagnosis and selectedMedTest when MedRecord changes
    setSelectedDiagnosis(null);
    setSelectedMedtest(null);
    props.medRecHandler(event.target.value);
  };

  const handleDiagnosisChange = (event) => {
    setSelectedDiagnosis(event.target.value)
    props.diagnosisHandler(event.target.value)
  }

  const handleMedtestChange = (event) => {
    setSelectedMedtest(event.target.value)
    props.medTestHander(event.target.value)
  }

  //   GET ALL PATIENTS 
  React.useEffect(() => {
    axios.get(`http://localhost:8080/stud/getAllStudents`)
    .then(response => {     
        if (!(response.status === 200)) {
        console.error(response.statusText);
        throw new Error('Network response was not ok');
        }
        return response.data; // Extract the data from the response
    })
    .then(data => {
      setPatients(data);
    })
    .catch(error => {
        console.error('Error fetching appointments:', error);
    });
}, []);

    // GET MED RECORD VIA PATIENTID
  React.useEffect(() => {
    axios.get(`http://localhost:8080/medrecords/findMedRecordByPid/${selectedPatient}`)
      .then(response => {     
        if (!(response.status === 200)) {
          console.error(response.statusText);
          throw new Error('Network response was not ok');
        }
        return response.data; // Extract the data from the response
      })
      .then(data => {
        setMedRecord(data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  }, [selectedPatient, props.reloader]);

  // GET DIAGNOSES VIA MEDRECORD
  React.useEffect(() => {
    axios.get(`http://localhost:8080/diagnosis/findDiagnosisByMrid/${selectedMedrecord}`)
      .then(response => {     
        if (!(response.status === 200)) {
          console.error(response.statusText);
          throw new Error('Network response was not ok');
        }
        return response.data; // Extract the data from the response
      })
      .then(data => {
        setDiagnoses(data);
      })
      .catch(error => {
        console.error('Error fetching appointments:', error);
      });
  }, [selectedMedrecord, props.reloader]);

  // GET Medtest VIA MEDRECORD
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/medtest/findMedtestByMrid/${selectedMedrecord}`);
        if (response.status === 200) {
          setMedTests(response.data);
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching MedTests:', error.message);
      }
    };
  
    fetchData();
  }, [selectedMedrecord, selectedDiagnosis, props.reloader]);

  console.log("HEY HEY HYE")
  console.log(medtests)

  return (
    <div style={{ marginTop: '50px' }}>
      <div>
        <label>Patient</label>
        <Box sx={{ minWidth: 120, backgroundColor: 'white' }}>
          <FormControl fullWidth>
          <Select
            id="demo-simple-select"
            value={selectedPatient}
            onChange={handleChange}
          >
            
            
            {patients.map((patient) => (
              <MenuItem key={patient.sid} value={patient.sid}>
                ({patient.sid}) {patient.fname} {patient.lname}
              </MenuItem>
            ))}
          </Select>
          </FormControl>
        </Box>
      </div>

      <div>
        <label>MedRecord</label>
        <Box sx={{ minWidth: 120, backgroundColor: 'white' }}>
          <FormControl fullWidth>
            <Select
              id="demo-simple-select"
              value={selectedMedrecord}
              onChange={handleMedRecChange}
            >
            
              {medrecord.length === 0 ? (
                <MenuItem value="" disabled>
                  No MedRecords
                </MenuItem>
              ) : (
                
                medrecord.map((medrec) => (
                  <MenuItem key={medrec.mrid} value={medrec.mrid}>
                    ({medrec.mrid}) {medrec.date}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>
        </Box>
      </div>

      <div>
        <label>Diagnosis</label>
        <Box sx={{ minWidth: 120, backgroundColor: 'white' }}>
          <FormControl fullWidth>
            <Select
              id="demo-simple-select"
              value={selectedDiagnosis}
              onChange={handleDiagnosisChange}
            >
              {diagnoses.length === 0 ? (
                <MenuItem value="" disabled>
                  No Diagnoses
                </MenuItem>
              ) : (
                diagnoses.map((diagnosis) => (
                  <MenuItem key={diagnosis.diagnosisId} value={diagnosis.diagnosisId}>
                    ({diagnosis.diagnosisId}) {diagnosis.diagname}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>
        </Box>
      </div>

      <div>
        <label>MedTest</label>
        <Box sx={{ minWidth: 120, backgroundColor: 'white' }}>
          <FormControl fullWidth>
            <Select
              id="demo-simple-select"
              value={selectedMedTest}
              onChange={handleMedtestChange}
            >
              {medtests.length === 0 ? (
                <MenuItem value="" disabled>
                  No MedTests
                </MenuItem>
              ) : (
                medtests
                  .filter((medtest) => !medtest.delete)
                  .map((medtest) => (
                    <MenuItem key={medtest.mid} value={medtest.mid}>
                      ({medtest.mid}) {medtest.testname}
                    </MenuItem>
                  ))
              )}
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
}
