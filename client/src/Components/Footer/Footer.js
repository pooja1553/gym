import React from 'react';
// import '../css/Footer.css';
import './Footer.css'

function Footer() {
  return (
    <>
    <footer>
      <div>
        <div className='foot1'>
            <div className='ft1'><i className="fa-solid fa-location-dot ft-icon"></i><span>333 Middle Winchendon Rd, Rindge, NH 03461</span></div>
            <div className='ft1'><i className="fa-solid fa-mobile-screen ft-icon"></i><span>125-711-811 125-668-886</span></div>
            <div className='ft1'><i className="fa-solid fa-envelope ft-icon"></i><span>Support gymcenter@gmail.com</span></div>
        </div>

        <div className='foot2'>
            <div className='ft2 ft2-image'><img src='https://preview.colorlib.com/theme/gymlife/img/logo.png.webp'/>
            <p>Your partner in fitness, strength, and wellness. Train with expert coaches, modern equipment, and personalized plans that fit your lifestyle..</p>
            <div className='foot-icon'><i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-solid fa-envelope"></i>
            </div></div>
            <div className='ft2'><h5>Useful links</h5>
            <ul className='foot-li'>
              <li>About</li>
              <li>Blog</li>
              <li>Classes</li>
              <li>Contact</li>
              </ul>
              </div>
            <div className='ft2'><h5>Support</h5>
            <ul className='foot-li'>
              <li>Login</li>
              <li>My account</li>
              <li>Subscibe</li>
              <li>Contact</li>
              </ul>
              </div>
            <div className='ft2 ft2-1'><h5>Tips & Guides</h5>
            <p>Physical fitness may help prevent depression, anxiety</p>
            <span>3 min read | 20 Comment</span>
            <p>Fitness: The best exercise to lose belly fat and tone up...</p>
            <span>3 min read | 20 Comment</span>
            </div>
        </div>
        </div>
    </footer>
    </>
  )
}

export default Footer