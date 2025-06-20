import React, { useState } from 'react';
import './Enroll.css'

function Enroll() {
  const[sign,setSign]=useState({
    name:"",
    email:"",
    ae:"",
    mobile:"",
    gender:"",
    address:"",
    plan:""
  })
  const handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value;
    setSign({...sign,[name]:value});
  }
  const handleSubmit = async(event) => {
    event.preventDefault();
    const{name,email,age,mobile,gender,address,plan}=sign;
    try{
      const result = await fetch('/enroll',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          email,
          age,
          mobile,
          gender,
          address,
          plan
        })
      })
      console.log(result.status);
      if(result.status===400 || !result){
        window.alert("Error in enrollment");
      }
      else{
        window.alert("Enrollment successfull");
        window.alert("We will contact you soon")
        setSign({
          name:"",
          email:"",
          age:"",
          mobile:"",
          gender:"",
          address:"",
          plan:""
        })
      }
    }catch(e){
      console.log(e);
    }
}
  return (
    <div>
          <div className='enroll '>
    <div className="contact1">
    <form className="contact2" method='POST' onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input type="text" name='name' required placeholder='Enter your full name' value={sign.name} onChange={handleChange}/>
        <label htmlFor="email">Email Address</label>
         <input type="email" name='email'  required placeholder='Enter your email' value={sign.email} onChange={handleChange}/>
        <label htmlFor="age">Age</label>
        <input type="number" name='age'  required placeholder='Enter your age' value={sign.age} onChange={handleChange}/>
        <label htmlFor="mobile">Mobile Number</label>
        <input type="number" name='mobile'  required placeholder='Enter your mobile number' value={sign.mobile} onChange={handleChange}/>
        <label htmlFor="gender">Gender</label>
        <input type="text" name='gender'  required placeholder='Enter your gender' value={sign.gender} onChange={handleChange}/>
        <label htmlFor="address">Address</label>
        <input type="text" name='address'  required placeholder='Enter your address' value={sign.address} onChange={handleChange}/>
        <label htmlFor='plan'>Membership Plan</label>
        <input type='number' name='plan' placeholder='Enter your membership plan month' value={sign.plan} onChange={handleChange}/>
        <button type='submit'>Enroll</button>
    </form>
    </div>
    </div>
    {/* <h1>{sign.name}:{sign.email}:{sign.age}{sign.mobile}:{sign.gender}:{sign.address}:{sign.plan}:</h1> */}
    </div>
  )
}

export default Enroll