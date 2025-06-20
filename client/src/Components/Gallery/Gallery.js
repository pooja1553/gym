import React from 'react'
import FirstImage from '../FirstImage'
import ThirdImage from '../ThirdImage/ThirdImage'
import { FaImage } from 'react-icons/fa';
import './Gallery.css';

function Gallery() {
  return (
    <>
    <div className="gallery">
   <FirstImage h1='Gallery' s='>' h3='Page' h2=' Gallery' />
   <ThirdImage/>
       <div className="third2">
         <div className="third-icon gallery2-1"><p className='icon-none'><FaImage/></p></div>
         <div className="third-icon gallery2-2"><p className='icon-none'><FaImage /></p></div>
         <div className="third-icon gallery2-3"><p className='icon-none'><FaImage /></p></div>
       </div>
    </div>
    </>
  )
}

export default Gallery