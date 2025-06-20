import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slider.css'

function Sliders() {
   
    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    <div className="sliders">
    <div className='slider-h'>
        <div>
        <p className='orange uc'>Our Team</p>
        <h3 className='uc'> TRAIN WITH EXPERTS</h3>
        </div>
        <div className='slider-btn'>
        <button>APPOINTMENT</button>
        </div>
      </div>
    <Slider {...settings}>
      <div >
        <div className="slider1">
            <div className=" slider1-1" ><div className='slider-show'><h4>Athart Rachel</h4><p>Gym Trainer</p></div></div>
            <div className=" slider1-2"><div className='slider-show'><h4>Athart Rachel</h4><p>Gym Trainer</p></div></div>
            <div className=" slider1-3" ><div className='slider-show'><h4>Athart Rachel</h4><p>Gym Trainer</p></div></div>
        </div>
      </div>
      <div>
      <div className="slider1">
            <div className=" slider1-3"><div className='slider-show'><h4>Athart Rachel</h4><p>Gym Trainer</p></div></div>
            <div className=" slider1-4"><div className='slider-show'><h4>Athart Rachel</h4><p>Gym Trainer</p></div></div>
            <div className=" slider1-5"><div className='slider-show'><h4>Athart Rachel</h4><p>Gym Trainer</p></div></div>
        </div>
      </div>
      <div>
      <div className="slider1">
            <div className=" slider1-5"><div className='slider-show'><h4>Athart Rachel</h4><p>Gym Trainer</p></div></div>
            <div className=" slider1-6"><div className='slider-show'><h4>Athart Rachel</h4><p>Gym Trainer</p></div></div>
            <div className=" slider1-1"><div className='slider-show'><h4>Athart Rachel</h4><p>Gym Trainer</p></div></div>
        </div>
      </div>
     
    </Slider>
    </div>
    </>
  )
}

export default Sliders