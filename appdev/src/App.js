
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TheHeader from './components/header';
import { PageServices } from './pages/ClinicServices';
import { TheAppointment } from './pages/Appointment';
import { AppBooking } from './pages/AppBooking';
import { LabAndDiag } from './pages/LabAndDiag';
import { AppViewList } from './pages/AppList';



function App() {
  return (
    <>
      <TheHeader/>
      <Routes>
        {/* <Route index element={ISUD ANG <HOME/> na page ari}/> */}
        {/* <Route index element={ISUD ANG <ABOUT/> na page ari}/> */}
        <Route index element={<PageServices/>} path='/services'/>
        <Route index element={<TheAppointment/>} path='/appointments'/>
        {/* <Route index element={ISUD ANG <CONTACT/> na page ari}/> */}

        <Route index element={<AppBooking/>} path='/appointments/booking'/>
        <Route index element={<AppViewList/>} path='/appointments/view-appointments'/>
        <Route index element={<LabAndDiag/>}path='/services/laboratory-and-diagnostics'/>
      </Routes>
      
    </>
    
  );
}

export default App;
