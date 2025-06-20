import React from 'react';
import FirstImage from '../FirstImage';
import Second from '../Second';
import Slide1 from '../Slide1';
import SecondImage from '../SecondImage';
import Slide2 from '../Slide2';
import './AboutUs.css'

function AboutUs() {
  return (
    <>
    <FirstImage h1='ABOUT US' h2='About' />
    <Second/>
    <div className='about1'>
      <div className='about2'>
        <img src='https://preview.colorlib.com/theme/gymlife/img/about-us.jpg.webp' alt=''/>
      </div>
      <div className='about3'>
        <h6 className='orange'>About Us</h6>
        <h3>What we have done</h3>
        <p>We have helped hundreds of members transform their lives through expert bodybuilding training and customized fitness programs. From beginners to professionals, our results speak for themselves.</p>
        <span>Body building</span><span className='percentage'>80%</span>
        <div>
        <progress value='80' max='100'></progress>
        </div>
        <div>
        <span>Training</span><span className='percentage'>85%</span>
        </div>
        <progress value='85' max='100'></progress>
        <div>
        <span>Fitness</span><span className='percentage'>75%</span>
        </div>
        <progress value='75' max='100'></progress>
       
      </div>
    </div>

 <Slide1/>

 <SecondImage h2='registration now to get more deals' h4='Where health, beauty and fitness meet.' btn='APPOINTMENT'/>

 <Slide2/>
    </>
  )
}

export default AboutUs;