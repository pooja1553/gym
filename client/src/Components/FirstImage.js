import React from 'react';
import '../css/FirstImage.css';

function FirstImage(props) {
  return (
    <>
    <div className='first-image'>
        <div className='first-1'>
        <h2>{props.h1}</h2>
       
        <div className='first-2'>
            <div>
               <span>Home</span>
               <span>{props.s}</span>
               <span>{props.h3}</span>
               <span>&gt;</span>
               <span className='orange'>{props.h2}</span>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default FirstImage