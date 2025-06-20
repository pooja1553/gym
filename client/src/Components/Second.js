import React from 'react';
import '../css/Second.css';

function Second() {
  return (
    <>
    <div className='second'>
        <div className='second-1'>
            <div>
            <p className='orange second-p1'>Why chose us?</p>
            <p className='second-p2'>PUSH YOUR LIMITS FORWARD</p>
            </div>
        </div>
        <div className='second-2'>
            <div className='second-3'>
            <div className='s-icons'>
            <i className="fa-solid fa-train-tram s-icon"></i>
            </div>
           <h6>Modern equipment</h6>
           <p>Train with confidence using our advanced and high-quality fitness machines. From smart treadmills to strength stations, we ensure a safe and effective workout experience.</p>
            </div>
            <div className='second-3'>
            <div className='s-icons'>
            <i className="fa-solid fa-glass-water s-icon"></i>
            </div>
                <h6>Healthy nutrition plan</h6>
                <p>We provide personalized nutrition guidance to help you fuel your body and reach your fitness goals. Our plans are balanced, easy to follow, and designed by certified experts.</p>
            </div>
            <div className='second-3'>
            <div className='s-icons'>
            <i className="fa-solid fa-dumbbell s-icon"></i>
            </div>
                <h6>Proffesponal training plan</h6>
                <p>Get expert support with our certified trainers who create custom workout plans based on your goals, fitness level, and progress. Whether you're a beginner or advanced, we’ve got you covered.</p>
            </div>
            <div className='second-3'>
                <div className='s-icons'>
            <i className="fa-solid fa-heart-pulse s-icon"></i>
            </div>
                <h6>Unique to your needs</h6>
                <p>We believe fitness is personal. That’s why we tailor every plan—workouts, nutrition, and support—specifically to match your body, lifestyle, and goals.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Second