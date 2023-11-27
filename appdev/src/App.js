
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
import { useState } from 'react';
import { Home } from './pages/Home';
import { PriAndSpe } from './pages/PriAndSpe';
import { ThePassword } from './pages/ForgotPassword';




function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <TheHeader/>
      <Routes>
        <Route index element={<Home/>} path='/home'/>
        <Route index element={<Home/>} path='/'/>
        <Route index element={<PageAboutUs/>} path='/aboutus'/>
        <Route index element={<PageServices/>} path='/services'/>
        <Route index element={<TheAppointment/>} path='/appointments'/>
        <Route index element={<ProfilePage/>}path='/profile'/>
        {/* <Route index element={ISUD ANG <CONTACT/> na page ari}/> */}

        <Route index element={<AppBooking/>} path='/appointments/booking'/>
        <Route index element={<AppViewList/>} path='/appointments/view-appointments'/>
        <Route index element={<AppViewSpecific/>} path={'/appointments/view-appointments/:aip'}></Route>
        <Route index element={<AppModifySpecific/>}path='/appointments/modify-appointment/:aip'/>
        <Route index element={<LabAndDiag/>}path='/services/laboratory-and-diagnostics'/>
        <Route index element={<Onsite/>}path='/services/on-site-medical-services'/>
        
        
        {/* <Route index element={ISUD ANG <ABOUT/> na page ari}/> */}
        <Route index element={<PageServices/>} path='/services'/>
        <Route index element={<TheAppointment/>} path='/appointments'/>
        {/* <Route index element={ISUD ANG <CONTACT/> na page ari}/> */}
        
        <Route index element={<AppBooking/>} path='/appointments/booking'/>
        <Route index element={<ThePassword/>}path='/appointments/forgot-password'/>
        <Route index element={<LabAndDiag/>}path='/services/laboratory-and-diagnostics'/>
        <Route index element={<PriAndSpe/>}path='/services/primary-and-specialty-consultation'/>

        {/* For medStaff */}
        <Route index element={<MedStaffLoginPage/>} path='/medstaff/login'/>
        <Route index element={<MedstaffHomePage/>} path='/medstaff/homepage'/>
        <Route index element={<MedstaffMain/>} path='/medstaff/respondbooking'/>
        <Route index element={<MedstaffViewBookings/>} path='/medstaff/view-all-bookings'/>
      </Routes>
      
    </>
    
  );
}

export default App;
