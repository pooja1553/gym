import React from 'react';
import FirstImage from '../FirstImage';
// import '../css/Services.css'
import './Services.css'
import { Link } from 'react-router-dom';
import SecondImage from '../SecondImage';
import Plan from '../Plan';



function Services() {
  return (
    <>
    <FirstImage h1='Services' h2='Services'/>
    <div className='services'>
        <h5 className='orange'>What we do?</h5>
        <h6>PUSH YOUR LIMITS FORWARD</h6>
        <div className='services1'>
            <div className='services2'>
                <img src='https://preview.colorlib.com/theme/gymlife/img/services/services-1.jpg.webp' alt='image'/>
                <div className='services-box'>
                    <h4><b>Personal training</b></h4>
                    <p>Get one-on-one attention with our personal training programs. Our expert trainers design customized workout and nutrition plans based on your goals, track your progress closely, and keep you motivated every step of the way.</p>
                </div>
                <img src='https://preview.colorlib.com/theme/gymlife/img/services/services-2.jpg.webp' alt='image'/>
                <div className='services-box'>
                <h4><b>Group fitness classes</b></h4>
                    <p>Stay motivated and have fun with our high-energy group fitness classes! From yoga and Zumba to strength and cardio sessions, our classes are led by expert instructors and designed for all fitness levels.</p>
                </div>
            </div>
            
            <div className='services2'>
            <div className='services-box'>
                    <h4><b>Body building</b></h4>
                    <p>Transform your physique with our dedicated bodybuilding programs. Whether you're just starting or aiming for competition-level gains, we provide structured training plans, expert guidance, and nutritional support.</p>
                </div>
                <img src='https://preview.colorlib.com/theme/gymlife/img/services/services-3.jpg.webp' alt='image'/>
                <div className='services-box'>
                <h4><b>Strength training</b></h4>
                    <p>Build power, endurance, and muscle tone with our strength training programs. We offer guided sessions using free weights, machines, and bodyweight exercises—all tailored to your fitness level. </p>
                </div>
                <img src='https://preview.colorlib.com/theme/gymlife/img/services/services-4.jpg.webp' alt='image'/>
               
            </div>
        </div>
    </div>
    <SecondImage h2='Exercise until the body obeys.' h4='Where health, beauty and fitness meet.' btn='APPOINTMENT'/>
    <Plan/>
    </>
  )
}

export default Services