
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TheHeader from './components/header';
import { PageServices } from './pages/ClinicServices';
import { TheAppointment } from './pages/Appointment';
import { AppBooking } from './pages/AppBooking';
import { LabAndDiag } from './pages/LabAndDiag';
import { PageAboutUs } from './pages/AboutUs';
import { Onsite } from './pages/OnsiteMedServ';
import { AppViewList } from './pages/AppList';
import { AppViewSpecific } from './pages/ViewSelectedAppointment';
import { AppModifySpecific } from './pages/AppModifySpecific';
import { MedStaffLoginPage } from './pages/MedstaffLogin';
import { MedstaffMain } from './pages/MedstaffRespondPage';
import { MedstaffViewBookings } from './pages/MedstaffViewBooking';
import { MedstaffHomePage } from './pages/MedstaffHomepage';
import { ProfilePage } from './pages/ProfilePage';
import { useEffect, useState } from 'react';
import { Home } from './pages/Home';
import { PriAndSpe } from './pages/PriAndSpe';
import { ThePassword } from './pages/ForgotPassword';
import { MedstaffViewSpecific } from './pages/MedstaffViewSelectedBooking';
import { MedStaffModifySpecific } from './pages/MedStaffModifySpecific';
import { PageContactUs } from './pages/ContactUs';
import { MedstaffAddMedRecord } from './pages/MedStaffAddMedrecord';
import { MedstaffAddDiag } from './pages/MedstaffAddDiagnosisPerMedRecord';
import { MedstaffDisableService } from './pages/MedstaffDisableService';
import TheFooter from './components/footer';




function App() {
  const [login, setLogin] = useState(false);
  const [patient, setPatient] = useState({});

  function handleLogin(ans){
    setLogin(ans);
  }

  function handlePatient(ans){
    setPatient(ans);
  }

  useEffect(()=>{
    
  }, [login])

  return (
    <>
      <TheHeader loggedIn ={login} handleLogin={handleLogin} patient={patient} handlePatient={handlePatient}/>
      <Routes>
        <Route index element={<Home/>} path='/home'/>
        <Route index element={<Home/>} path='/'/>
        <Route index element={<PageAboutUs/>} path='/aboutus'/>
        <Route index element={<PageServices/>} path='/services'/>
        <Route index element={<PageContactUs/>} path='/contact'/>
        <Route index element={<ThePassword/>}path='/appointments/forgot-password'/>
        

        <Route index element={<LabAndDiag/>}path='/services/laboratory-and-diagnostics'/>
        <Route index element={<Onsite/>}path='/services/on-site-medical-services'/>
        <Route index element={<PriAndSpe/>}path='/services/primary-and-specialty-consultation'/>
        
        <Route index element={<PageServices/>} path='/services'/>


        {/* PAGES THAT NEED LOGIN VERIFICATION */}
        <Route
          index
          path='/appointments'
          element={<TheAppointment loginHandler={handleLogin} handlePatient={handlePatient} patient ={patient}/>}
        />
        <Route index element={<AppBooking loggedIn ={login} patient={patient}/>} path='/appointments/booking'/>
        <Route index element={<AppViewList loggedIn ={login} patient={patient}/>} path='/appointments/view-appointments'/>
        <Route index element={<AppViewSpecific loggedIn ={login} patient={patient}/>} path={'/appointments/view-appointments/:aip'}/>
        <Route index element={<AppModifySpecific loggedIn ={login} patient={patient}/>}path='/appointments/modify-appointment/:aip'/>
        <Route index element={<ProfilePage loggedIn ={login} patient={patient}/>}path='/profile'/>
        

        {/* For medStaff */}
        <Route index element={<MedStaffLoginPage/>} path='/medstaff/login'/>
        <Route index element={<MedStaffLoginPage/>} path='/medstaff'/>
        <Route index element={<MedstaffHomePage/>} path='/medstaff/homepage'/>
        <Route index element={<MedstaffMain/>} path='/medstaff/respondbooking'/>
        <Route index element={<MedstaffViewBookings/>} path='/medstaff/view-all-bookings'/>
        <Route index element={<MedstaffViewSpecific/>} path='/medstaff/view-specific-booking/:aid'/>
        <Route index element={<MedStaffModifySpecific/>} path='/medstaff/modify-appointment/:aid'/>
        <Route index element={<MedstaffAddMedRecord/>} path='/medstaff/add-medrecord'/>
        <Route index element={<MedstaffAddDiag/>} path='/medstaff/add-diagnosis'/>
        <Route index element={<MedstaffDisableService/>} path='/medstaff/disable-service'/>
      </Routes>
      <TheFooter/>
    </>
    
  );
}

export default App;
