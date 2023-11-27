
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TheHeader from './components/header';
import { PageServices } from './pages/ClinicServices';
import { TheAppointment } from './pages/Appointment';
import { AppBooking } from './pages/AppBooking';
import { LabAndDiag } from './pages/LabAndDiag';
import { Home } from './pages/Home';
import TheFooter from './components/footer';
import { PriAndSpe } from './pages/PriAndSpe';
import { ThePassword } from './pages/ForgotPassword'; 



function App() {
  return (
    <>
      <TheHeader/>
      <Routes>
        <Route index element={<Home/>} path='/home'/>
        {/* <Route index element={ISUD ANG <ABOUT/> na page ari}/> */}
        <Route index element={<PageServices/>} path='/services'/>
        <Route index element={<TheAppointment/>} path='/appointments'/>
        {/* <Route index element={ISUD ANG <CONTACT/> na page ari}/> */}
        
        <Route index element={<AppBooking/>} path='/appointments/booking'/>
        <Route index element={<ThePassword/>}path='/appointments/forgot-password'/>
        <Route index element={<LabAndDiag/>}path='/services/laboratory-and-diagnostics'/>
        <Route index element={<PriAndSpe/>}path='/services/primary-and-specialty-consultation'/>

      </Routes>
     <TheFooter/>
    </>
    
  );
}

export default App;
