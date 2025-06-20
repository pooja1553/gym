import React from 'react';
import './Slider1.css';

function Slider1() {
  return (
    <>
    <div classNameName="home-slider">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="home-slide-1">
            <div className="home-slide-1-2">
                <p>SHAPE YOUR BODY</p>
                <h1>BE <span className='orange'>STRONG</span> </h1> <h1>TRAINING HARD</h1>
                <button>GET INFO</button>
            </div>
        </div>
    </div>
    <div classNameName="carousel-item">
        <div className="home-slide-2">
        <div className="home-slide-1-2">
                <p>SHAPE YOUR BODY</p>
                <h1>BE <span className='orange'>STRONG</span> </h1> <h1>TRAINING HARD</h1>
                <button>GET INFO</button>
            </div>
        </div>
    </div>
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
</div>
    </div>
    </>
  )
}

export default Slider1