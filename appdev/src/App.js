
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TheHeader from './components/header';
import { PageServices } from './pages/ClinicServices';



function App() {
  return (
    <>
      <TheHeader/>
      <Routes>
        {/* <Route index element={ISUD ANG <HOME/> na page ari}/> */}
        {/* <Route index element={ISUD ANG <ABOUT/> na page ari}/> */}
        <Route index element={<PageServices/>} path='/services'/>
        {/* <Route index element={ISUD ANG <APPOINTMENT/> na page ari}/> */}
        {/* <Route index element={ISUD ANG <CONTACT/> na page ari}/> */}
      </Routes>
      
    </>
    
  );
}

export default App;
