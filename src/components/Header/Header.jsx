import React from 'react'
import "./Header.css"
import {MdOutlineHolidayVillage} from "react-icons/md"
import logo from "../../assets/UniLife.svg"
import {AiOutlineHeart, AiOutlineMail} from "react-icons/ai"
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='header-container'>
      <Link to="/">
        <div className="header-left">
            <MdOutlineHolidayVillage className="header-icon" />
            <img src={logo} />
        </div>
        </Link>
        <div className="header-right">
            <Link className="header-link">
            <AiOutlineHeart className="header-link-icon"/>
            Shortlist
            </Link>
            <Link className="header-link">
              <AiOutlineMail className="header-link-icon" />
            Contact Us
            </Link>
        </div>
      
    </div>
  )
}

export default Header
