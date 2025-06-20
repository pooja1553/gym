import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from 'react-icons/ri';

function Navbar() {
    const [menu,setMenu] = useState(false);
    const [dropDown,setDropDown] = useState(true);
    const handleToggleButton = () => {
        setMenu(!menu);
    }
    const handleDropDown=()=>{
        setDropDown(!dropDown)
    }
  return (
    <>
    <header>
    <div className='navbar'>
        <nav>
            <div className="nav1">
               <img src="https://preview.colorlib.com/theme/gymlife/img/logo.png.webp" alt="" />
            </div>
            <div className="nav2">
                <ul className={menu ? 'mobile' : 'web'}>
                    <li><Link className='link n-link' to='/'>Home</Link></li>
                    <li><Link className='link n-link' to='/about-us'>About Us</Link></li>
                    <li><Link className='link n-link' to='/classes'>Classes</Link></li>
                    <li><Link className='link n-link' to='/services'>Services</Link></li>
                    <li><Link className='link n-link' to='/ourteam'>Our Team</Link></li>
                    <li><Link className='link n-link dd' to='#'>Pages</Link><span className='n-link dd-icon' onClick={handleDropDown}><RiArrowDropDownLine/></span>
                    <div className={dropDown?'drop-down-hide':'drop-down-show'}>
                        <ul>
                            <li><Link className='drop-down-link n-link' to='/about-us'>About us</Link></li>
                            <li><Link className='drop-down-link n-link' to='/classtimetable'>Classes timetable</Link></li>
                            <li><Link className='drop-down-link n-link' to='/bmi'>Bmi calculate</Link></li>
                            <li><Link className='drop-down-link n-link' to='/ourteam'>Our Team</Link></li>
                            <li><Link className='drop-down-link n-link' to='/gallery'>Gallery</Link></li>
                            <li><Link className='drop-down-link n-link' to='/blog'>Our blog</Link></li>
                            <li><Link className='drop-down-link n-link' to='/four'>404</Link></li>

                        </ul>
                    </div>
                    </li>
                    <li><Link className='link n-link' to='/contact'>Contact</Link></li>
                    <li><Link className='link n-link' to='/login'>Login</Link></li>
                    <li><Link className='link n-link' to='/sign-up'>SignUp</Link></li>
                    {/* <li><Link className='link n-link' to='/contact'>Contact1</Link></li> */}
                </ul>
            </div>
           
                <button className='nav-icon bar' onClick={handleToggleButton}>
                  <FaBars />
                </button>
         
        </nav>
    </div>
    </header>
    </>
  )
}

export default Navbar