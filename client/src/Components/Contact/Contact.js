import React, { useState } from 'react';
import FirstImage from '../FirstImage';
import './Contact.css'

function Contact() {
    const[sign,setSign]=useState({
      name:"",
      email:"",
      message:""
    })
    const handleChange = (event) => {
      let name = event.target.name
      let value = event.target.value;
      setSign({...sign,[name]:value});
    }
    const handleSubmit = async(event) => {
      event.preventDefault();
      const{name,email,website,message}=sign;
      try{
        const result = await fetch('/contact',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name,
            email,
            website,
            message
          })
        })
        console.log(result.status);
        if(result.status===400 || !result){
          window.alert("Message not sent. Try Again");
        }
        else{
          window.alert("Message sent successfully");
          setSign({
            name:"",
            email:"",
            website:"",
            message:""
          })
        }
      }catch(e){
        console.log(e);
      }
 }

  return (
    <>
    <FirstImage h1='Contact Us' h2='Contact us'  h3='> Pages'/>

    <div className='contact1'>
          
        <div className='contact1-1'>
            <div className='contact1-1-1'>
            <h5 className='orange'>CONTACT US</h5>
            <h3>GET IN TOUCH</h3>
            <div><i className="fa-solid fa-location-dot icolor"></i>333 Middle Winchendon Rd, Rindge,
            NH 03461<span></span></div>
            <div><i className="fa-solid fa-mobile-screen-button icolor"></i><span>125-711-811 | 125-668-886</span></div>
            <div><i className="fa-solid fa-envelope icolor"></i><span>
            Support.gymcenter@gmail.com</span></div>
            </div>
      
        <form className='contact1-2' onSubmit={handleSubmit} method='POST'>
             <input type="text" name='name' required placeholder='Enter your name' value={sign.name} onChange={handleChange}/>
             <input type="email" name='email'  required placeholder='Enter your email address' value={sign.email} onChange={handleChange}/>
             <input type="text" name='website'  required placeholder='Website' value={sign.website} onChange={handleChange}/>
             <textarea name="message" rows='5'  required placeholder='Enter feedback' value={sign.message} onChange={handleChange}></textarea>
             <button className='contact-btn' type='submit'>Send Message</button>
        </form>
    </div>
    </div>
    <div className='map1'>
    <iframe width="520" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=indore%20+(indore)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=e925097d1939d57dce44b7b90bc74aa1026c4d2f'></script>
    </div>
    </>
  )
}
export default Contact

