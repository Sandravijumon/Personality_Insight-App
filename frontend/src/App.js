import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import Questionnaire from './Components/Questionnaire';
import Articles from './Components/Articles';
import Results from './Components/Results';
import Booking from './Components/Booking';
import AdminLogin from './Components/AdminLogin';
import WelcomePage from './Components/WelcomePage';
import About from './Components/About';
import PersonalityCards from './Components/PersonalityCards';
import AddEmployee from './Components/AddEmployee';
import ViewEmployees from './Components/ViewEmployees';
import TherapistAppointments from './Components/TherapistAppointments';
import TherapistLogin from './Components/TherapistLogin';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage/>} />
                <Route path="/adminlogin" element={<AdminLogin/>} />
                <Route path="/add" element={<AddEmployee/>} />
                <Route path="/view" element={<ViewEmployees/>} />
                <Route path="/therapist/appointments" element={<TherapistAppointments/>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/quiz" element={<Questionnaire/>} />
                <Route path="/articles" element={<Articles/>} />
                <Route path="/predict" element={<Results/>} />
                {/* <Route path="/consultation" element={<Booking/>} /> */}
                <Route path="/about" element={<About/>} />
                <Route path="/personality" element={<PersonalityCards/>} />
                <Route path="/book" element={<Booking/>} />
                <Route path="/therapistlogin" element={<TherapistLogin/>} />
                <Route path="/results" element={<Results/>} />
                

               
                
            </Routes>
        </Router>
    );
};

export default App;
