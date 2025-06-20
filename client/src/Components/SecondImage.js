import React from 'react';
import '../css/SecondImage.css';

function SecondImage(props) {
  return (
    <>
    <div className='second-image'>
        <div className='second-1'>
            <h2>{props.h2}</h2>
            <h4>{props.h4}</h4>
            <div className='second1'>
              <button>{props.btn}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default SecondImage