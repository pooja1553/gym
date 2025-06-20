import React from 'react';
import './FourZeroFour.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';


function FourZeroFour() {
  return (
    <>
    <div className="four">
        <div className="four1">
            <p className='four2'>404</p>
            <p><b>Opps! This page Could Not Be Found!</b></p>
            <p className='grey'>Sorry bit the page you are looking for does not exist, have been removed or name changed</p>
            <input type="text" placeholder='Enter your Keyword' />
            <button><Link className='btn-four' to='/'><span><FaHome/></span>GO <span>BACK HOME</span></Link></button>
        </div>
    </div>
    </>
  )
}

export default FourZeroFour