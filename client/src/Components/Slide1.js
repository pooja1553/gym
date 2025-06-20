import React from 'react';
import '../css/Slide1.css';

function Slide1() {
  return (
    <>
       <div className='about4'>
      <div className='about4-1'>
        <div>
        <p className='orange uc'>Our Team</p>
        <h3 className='uc'> TRAIN WITH EXPERTS</h3>
        </div>
        <div className='about4-3'>
        <button>APPOINTMENT</button>
        </div>
      </div>
      {/* slide */}
      <div className='about5'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='slide1'>
        <div className='slides slide2-1'>
            <div className='slide-h'>
            {/* <div className='slide-h2'>
              <h4>a</h4>
              <h5>b</h5>
            </div> */}
            </div>
       </div>
       <div className='slides slide2-2'>
       <div className='slide-h'>
            {/* <div className='slide-h2'>
              <h4>a</h4>
              <h5>b</h5>
            </div> */}
            </div>
       </div>
       <div className='slides slide2-3'>
       <div className='slide-h'>
            <div className='slide-h2'>
              {/* <h4>a</h4>
              <h5>b</h5> */}
            </div>
            </div>
       </div>
     
      </div>
    
    </div>
    <div className="carousel-item">
    <div className='slide1'>
       <img className='slides ' src="https://preview.colorlib.com/theme/gymlife/img/team/team-4.jpg.webp" alt="..."/>
       <img className='slides ' src="https://preview.colorlib.com/theme/gymlife/img/team/team-5.jpg.webp" alt="..."/>
       <img className='slides ' src="https://preview.colorlib.com/theme/gymlife/img/team/team-6.jpg.webp" alt="..."/>
      </div>
     
    </div>
    <div className="carousel-item">
      
      <div  className='slide1'>
       <img className='slides ' src="https://preview.colorlib.com/theme/gymlife/img/team/team-6.jpg.webp"  alt="..."/>
       <img className='slides ' src="https://preview.colorlib.com/theme/gymlife/img/team/team-1.jpg.webp"  alt="..."/>
       <img className='slides ' src="https://preview.colorlib.com/theme/gymlife/img/team/team-2.jpg.webp"  alt="..."/>
      </div>
  
    </div>
  </div>
 
</div>
      </div>
    </div>
    </>
  )
}

export default Slide1