import React from 'react';
import '../css/Slide2.css';

function Slide2() {
  return (
    <>
    <div className="slide">
    <div className='Slide2-h'>
        <h3 className='orange'>Testimonial</h3>
        <h6>Our cilent say</h6>
    </div>
    <div className=' Slide-2'>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active">
        <div className='slide-2'>
            <img src='https://preview.colorlib.com/theme/gymlife/img/testimonial/testimonial-1.jpg.webp'/>
            <div className='slide2-span'>
            <span>I joined the gym with a goal to build muscle and improve my strength.</span>
            <span>The professional trainers provided me with a customized bodybuilding plan that matched my needs perfectly.</span>
            <span>The environment is motivating, and the modern equipment makes every workout enjoyable. </span>
            {/* <p>"  I’ve seen noticeable gains and feel more confident than ever!"</p> */}
            </div>
            <h5>Neha Sharma</h5>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
        </div>
      {/* <img src="..." className="d-block w-100" alt="..."/> */}
    </div>
    <div className="carousel-item">
    <div className='slide-2'>
            <img src='https://preview.colorlib.com/theme/gymlife/img/testimonial/testimonial-2.jpg.webp'/>
            <div className='slide2-span'>
            <span>As a beginner, I was nervous about joining a gym. But from the very first day, the trainers made me feel welcomed and supported.</span>
            <span>They created a personalized fitness and nutrition plan that was easy to follow. </span>
            <span>Within weeks, I noticed a boost in my energy and overall fitness. I’m proud of the progress I’ve made</span>
            </div>
            <h5>Marshmello Gomez</h5>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
        </div>
      {/* <img src="..." className="d-block w-100" alt="..."/> */}
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
    </>
  )
}

export default Slide2