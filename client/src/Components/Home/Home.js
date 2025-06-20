import React from 'react';
import './Home.css'
import Second from '../Second';
import {FaChevronRight } from 'react-icons/fa';
import SecondImage from '../SecondImage';
import Plan from '../Plan';
import ThirdImage from '../ThirdImage/ThirdImage';
import Slide1 from '../Slide1';
import Slider1 from '../Slider1/Slider1';


function Home() {
  return (
    <>
    <div className="home">
      <div className="home--1">
    <Slider1/>
   </div>
       <Second/>
        <div className="home2">
        <div className='second-1'>
            <div>
            <p className='orange second-p1'>Our Classes
            </p>
            <p className='second-p2'>WHAT WE CAN OFFER
            </p>
            </div>
        </div>
        <div className="home2-1">
          <div className="home2-1-1">
            <img src="https://preview.colorlib.com/theme/gymlife/img/classes/class-1.jpg.webp" alt="" />
            <div className="home-p">
              <div className="home-p2">
                <p className='orange'>STRENGTH</p>
                <p>Weightlifting </p>
              </div>
              <div className="home-p2">
                <p><FaChevronRight/></p>
              </div>
            </div>
          </div>
          <div className="home2-1-1">
            <img src="https://preview.colorlib.com/theme/gymlife/img/classes/class-2.jpg.webp" alt="" />
            <div className="home-p">
              <div className="home-p2">
                <p className='orange'>Cardio</p>
                <p>Indoor cycling </p>
              </div>
              <div className="home-p2">  <p><FaChevronRight /></p></div>
            </div>
          </div>
          <div className="home2-1-1">
            <img src="https://preview.colorlib.com/theme/gymlife/img/classes/class-3.jpg.webp" alt="" />
            <div className="home-p">
              <div className="home-p2">
                <p className='orange'>STRENGTH</p>
                <p>Kettlebell power</p>
              </div>
              <div className="home-p2">  <p><FaChevronRight /></p></div>
            </div>
          </div>
         </div>
        <div className="home3">
        <div className="home2-1-1">
            <img src="https://preview.colorlib.com/theme/gymlife/img/classes/class-4.jpg.webp" alt="" />
            <div className="home-p">
              <div className="home-p2">
                <p className='orange'>Cardio</p>
                <p>Indoor cycling </p>
              </div>
              <div className="home-p2">  <p><FaChevronRight /></p></div>
            </div>
          </div>
          <div className="home2-1-1">
            <img src="https://preview.colorlib.com/theme/gymlife/img/classes/class-5.jpg.webp" alt="" />
            <div className="home-p">
              <div className="home-p2">
                <p className='orange'>STRENGTH</p>
                <p>Kettlebell power</p>
              </div>
              <div className="home-p2">  <p><FaChevronRight /></p></div>
            </div>
          </div>
          </div>
        </div>
        <SecondImage h2='registration now to get more deals' h4='Where health, beauty and fitness meet.' btn='APPOINTMENT'/>
        <Plan/>
        <ThirdImage/>
        <Slide1/>
        </div>
    </>
  )
}
export default Home