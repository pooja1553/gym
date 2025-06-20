import React, { useState } from 'react';
import './OurTeamExpert.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { CgMail } from 'react-icons/cg';

function OurTeamExpert() {
  
  return (
    <>
    <div className="teams">
      <div className='team1'>
        <div>
        <p className='orange uc'>Our Team</p>
        <h3 className='uc'> TRAIN WITH EXPERTS</h3>
        </div>
        <div className='team2'>
        <button>APPOINTMENT</button>
        </div>
      </div>
     
        <div className="teams3">
          <div className="teams-img teams3-1">
            <div className='showImage'>
              <h5>Athart Rachel</h5>
              <h6>Gym Trainer</h6>
              <p><FaFacebookF /><FaTwitter/><FaYoutube/><FaInstagram/><CgMail/></p>
            </div>
           </div>
          <div className="teams-img teams3-2">
          <div className='showImage'>
              <h5>Amit Khurana </h5>
              <h6>Gym Trainer</h6>
              <p><FaFacebookF /><FaTwitter/><FaYoutube/><FaInstagram/><CgMail/></p>
            </div>
          </div>
          <div className="teams-img teams3-3">
          <div className='showImage'>
              <h5>Vikram Singh</h5>
              <h6>Gym Trainer</h6>
              <p><FaFacebookF /><FaTwitter/><FaYoutube/><FaInstagram/><CgMail/></p>
            </div>
          </div>
          <div className="teams-img teams3-4">
          <div className='showImage'>
              <h5>Rohit Verma</h5>
              <h6>Gym Trainer</h6>
              <p><FaFacebookF /><FaTwitter/><FaYoutube/><FaInstagram/><CgMail/></p>
            </div>
          </div>
          <div className="teams-img teams3-5">
          <div className='showImage'>
              <h5>Neha Sharma </h5>
              <h6>Gym Trainer</h6>
              <p><FaFacebookF /><FaTwitter/><FaYoutube/><FaInstagram/><CgMail/></p>
            </div>
          </div>
          <div className="teams-img teams3-6">
          <div className='showImage'>
              <h5>Sneha Mehta</h5>
              <h6>Gym Trainer</h6>
              <p><FaFacebookF /><FaTwitter/><FaYoutube/><FaInstagram/><CgMail/></p>
            </div>
          </div>
        </div>
    
    </div>
  
    </>
  )
}

export default OurTeamExpert