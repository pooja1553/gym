import React from 'react';
import './SecondImage2.css'
import { TbPlayerPlayFilled } from 'react-icons/tb';

function SecondImage2(props) {
  return (
    <>
    <div className='second-img-image'>
        <div className='second-img-1'>
            <h2>Exercise until the body obeys.</h2>
            <h4>Where health, beauty and fitness meet.</h4>
            <div className='second1-img'>
              <button><p><TbPlayerPlayFilled/></p></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default SecondImage2