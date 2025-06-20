import React from 'react';
import './ThirdImage.css';
import { FaImage } from 'react-icons/fa';

function ThirdImage() {
  return (
    <>
    <div className="third">
        <div className="third1">
            <div className="third2">
               <div className="third-icon third2-1"><p><FaImage/></p></div>
               <div className="third-icon third2-2"><p><FaImage /></p></div>
               <div className="third-icon third2-3"><p><FaImage /></p></div>
            </div>
            <div className="third2">
               <div className="third-icon third3-1"><p><FaImage/></p></div>
               <div className="third-icon third3-2"><p><FaImage /></p></div>
               <div className="third-icon third3-3"><p><FaImage /></p></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ThirdImage