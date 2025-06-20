import React from 'react';
import '../css/Plan.css';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Plan() {
    const navigate = useNavigate();
    const handleChange = () =>{
        navigate('/enroll')
    }
  return (
    <>
    <div className='plan'>
        <h5 className='orange'>Our Plan</h5>
        <h6>Choose your pricing plan</h6>

        <div className='plan2'>
            <div className='plan3'>
                <div className="plan3-1">
                <h3>1 Month Unlimited</h3>
                <h2 className='orange'><FaIndianRupeeSign/>1,200</h2>
                <p className='plan-p'>SINGLE CLASS</p>
                <ul>
                    <li className='plan-li'>Free riding</li>
                    <li className='plan-li'>Unlimited equipments</li>
                    <li className='plan-li'>Personal trainer</li>
                    <li className='plan-li'>Weight losing classes</li>
                    <li className='plan-li'>Month to mouth</li>
                    <li className='plan-li'>No time restriction</li>
                </ul>
                <i className="fa-solid fa-image plan-i"></i>
                <button className='plan-btn' onClick={handleChange}>ENROLL NOW</button>
            </div>
            </div>
            <div className='plan3'>
                <div className="plan3-1">
                <h3>6 Month unlimited</h3>
                <h2  className='orange'><FaIndianRupeeSign/>5,500</h2>
                <p  className='plan-p'>SINGLE CLASS</p>
                <ul>
                    <li className='plan-li'>Free riding</li>
                    <li className='plan-li'>Unlimited equipments</li>
                    <li className='plan-li'>Personal trainer</li>
                    <li className='plan-li'>Weight losing classes</li>
                    <li className='plan-li'>Month to mouth</li>
                    <li className='plan-li'>No time restriction</li>
                </ul>
                <i className="fa-solid fa-image  plan-i"></i>
              <button className='plan-btn' onClick={handleChange}>ENROLL NOW</button>
            </div>
            </div>
            <div className='plan3'>
                <div className="plan3-1">
                <h3>12 Month unlimited</h3>
                <h2  className='orange'><FaIndianRupeeSign/>9,999</h2>
                <p  className='plan-p'>SINGLE CLASS</p>
                <ul>
                    <li className='plan-li'>Free riding</li>
                    <li className='plan-li'>Unlimited equipments</li>
                    <li className='plan-li'>Personal trainer</li>
                    <li className='plan-li'>Weight losing classes</li>
                    <li className='plan-li'>Month to mouth</li>
                    <li className='plan-li'>No time restriction</li>
                </ul>
                
                <i className="fa-solid fa-image  plan-i"></i>
                
                 <button className='plan-btn' onClick={handleChange}>ENROLL NOW</button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Plan