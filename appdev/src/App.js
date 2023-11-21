
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




function App() {
  return (
    <>
      <TheHeader/>
      <Routes>
        {/* <Route index element={ISUD ANG <HOME/> na page ari}/> */}
        <Route index element={<PageAboutUs/>} path='/aboutus'/>
        <Route index element={<PageServices/>} path='/services'/>
        <Route index element={<TheAppointment/>} path='/appointments'/>
        {/* <Route index element={ISUD ANG <CONTACT/> na page ari}/> */}

        <Route index element={<AppBooking/>} path='/appointments/booking'/>
        <Route index element={<AppViewList/>} path='/appointments/view-appointments'/>
        <Route index element={<AppViewSpecific/>} path={'/appointments/view-appointments/:aip'}></Route>
        <Route index element={<AppModifySpecific/>}path='/appointments/modify-appointment/:aip'/>
        <Route index element={<LabAndDiag/>}path='/services/laboratory-and-diagnostics'/>
        <Route index element={<Onsite/>}path='/services/on-site-medical-services'/>
        
      </Routes>
      
    </>
    
  );
}

export default App;
