import React from 'react'
import FirstImage from '../FirstImage'
import './ClassTimeTable.css'

function ClassTimeTable(props) {
  return (
    <>
    <div className="classtime">
        <FirstImage h1='Timetable' s='>' h3=' Pages' h2=' Services'/>
        <div className="classtime1">
            <div className="classtime1-1">
                <p className='orange1'>Find Your Time</p>
                <p className='classtime-p'>Find Your Time</p>
            </div>
            <div className="classtime2-1">
                <span>All event</span>
                <span>/</span>
                <span> Fitness tips</span>
                <span>/</span>
                <span> Motivation</span>
                <span>/</span>
                <span> Workout</span>
            </div>
        </div>
     <div className='Page'>
    <div className="page">
        <div className="page1"><h4></h4></div>
        <div className="page1"><h4>Monday</h4></div>
        <div className="page1"><h4>Tuesday</h4></div>
        <div className="page1"><h4>Wednesday</h4></div>
        <div className="page1"><h4>Thursday</h4></div>
        <div className="page1"><h4>Friday</h4></div>
        <div className="page1"><h4>Saturday</h4></div>
        <div className="page1"><h4>Sunday</h4></div>
    </div>
    <div className="page2">
        <div className="page-1 page3 page-org"><h5>6.00am - 8.00am</h5><span></span></div>
        <div className="ph page-2 page3"><h5>WEIGHT LOOSE</h5><span>RLefew D. Loee</span></div>
        <div className="ph page-3 page3"><h5>Cardio</h5><span>RLefew D. Loee</span></div>
        <div className="ph page-2 page3"><h5>Yoga</h5><span>Keaf Shen</span></div>
        <div className="ph page-3 page3"><h5>Fitness</h5><span>Kimberly Stone</span></div>
        <div className="ph page-2 page3"><h5></h5><span></span></div>
        <div className="ph page-3 page3"><h5>Boxing</h5><span>Rachel Adam</span></div>
        <div className="ph page-2 page3"><h5>Body Building</h5><span>Robert Cage</span></div>
    </div>
    <div className="page2">
        <div className="page-1 page3 page-org"><h5>10.00am - 12.00am</h5><span></span></div>
        <div className="ph page-3 page3"><h5></h5><span></span></div>
        <div className="ph page-2 page3"><h5>	
        Fitness</h5><span>Kimberly Stone</span></div>
        <div className="ph page-3 page3"><h5>WEIGHT LOOSE</h5><span>RLefew D. Loee</span></div>
        <div className="ph page-2 page3"><h5>Cardio</h5><span>RLefew D. Loee</span></div>
        <div className="ph page-3 page3"><h5>Body Building</h5><span>Robert Cage</span></div>
        <div className="ph page-2 page3"><h5>Karate</h5><span>Donald Grey
        </span></div>
        <div className="ph page-3 page3"><h5></h5><span></span></div>
    </div>
    <div className="page2">
        <div className="page-1 page3 page-org"><h5>5.00pm - 7.00pm</h5><span></span></div>
        <div className="ph page-2 page3"><h5>Boxing</h5><span>Rachel Adam</span></div>
        <div className="ph page-3 page3"><h5>Karate</h5><span>Donald Grey</span></div>
        <div className="ph page-2 page3"><h5>Body Building</h5><span>Robert Cage</span></div>
        <div className="ph page-3 page3"><h5></h5><span></span></div>
        <div className="ph page-2 page3"><h5>	
        Yoga</h5><span>Keaf Shen</span></div>
        <div className="ph page-3 page3"><h5>Cardio</h5><span>RLefew D. Loee</span></div>
        <div className="ph page-2 page3"><h5>Fitness</h5><span>Kimberly Stone</span></div>
    </div>
    <div className="page2">
        <div className="page-1 page3 page-org"><h5>7.00pm - 9.00pm</h5><span></span></div>
        <div className="ph page-3 page3"><h5>Cardio</h5><span>RLefew D. Loee</span></div>
        <div className="ph page-2 page3"><h5></h5><span></span></div>
        <div className="ph page-3 page3"><h5>Boxing</h5><span>Rachel Adam</span></div>
        <div className="ph page-2 page3"><h5>Yoga</h5><span>Keaf Shen</span></div>
        <div className="ph page-3 page3"><h5>Karate</h5><span>Donald Grey</span></div>
        <div className="ph page-2 page3"><h5>Boxing</h5><span>Rachel Adam</span></div>
        <div className="ph page-3 page3"><h5>WEIGHT LOOSE</h5><span>RLefew D. Loee</span></div>
    </div>
    </div>
    </div>
    </>
  )
}

export default ClassTimeTable