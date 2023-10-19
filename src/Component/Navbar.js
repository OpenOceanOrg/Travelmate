import "../Css/Navbar.css"
import React, { useState } from 'react'
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom"

const Navbar = () => {
  const[click,setClick] = useState(false);
  const handelClick = () => setClick(!click);
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <div className="logo-child" />
          <div className="travmate">TRavMAte</div>
        </div>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="home12">
            <Link to = "/">Home</Link>
          </li>
          <li className="service">
            <Link to = "/service">Service</Link>
          </li>
          <li className="people">
            <Link to = "/people">People</Link>
          </li>
          <li className="service">
            <Link to = "/hit">Hit Us Up</Link>
          </li>
          <li>
          <img className="avatar-icon" alt="" src="/img/avatar@2x.png" />
          </li>
        </ul>
        <div className="hamburger" onClick={handelClick}>
          {click ? (<ImCross size={20} style= {{color:"white"}}/>):(<FaHamburger size={20} style= {{color:"white"}}/>) 
            
          }
        
        </div>
    </div>
  
  )
}

export default Navbar