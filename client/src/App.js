import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import AboutUs from './Components/About/AboutUs';
import './App.css';

import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Class from './Components/Classes/Class';
import OurTeam from './Components/OurTeam/OurTeam';
import Navbar from './Components/Navbar/Navbar';
import Gallery from './Components/Gallery/Gallery';
import ClassTimeTable from './Components/ClassTimeTable/ClassTimeTable';
import Blog from './Components/Blog/Blog';
import FourZeroFour from './Components/FourZeroFour/FourZeroFour';
import Bmi from './Components/Bmi/Bmi';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Enroll from './Components/Enroll/Enroll';
// import Contact from './Components/Contact1/Contact';

function App() {
  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/ourteam' element={<OurTeam/>}/>
        <Route path='/classes' element={<Class/>}/>
      
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/classtimetable' element={<ClassTimeTable/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='four' element={<FourZeroFour/>}/>
        <Route path='/bmi' element={<Bmi/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='enroll' element={<Enroll/>}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
