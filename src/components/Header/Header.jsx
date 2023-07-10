import React, {useState, useContext} from 'react'
import "./Header.css"
import {MdOutlineHolidayVillage} from "react-icons/md"
import logo from "../../assets/UniLife.svg"
import {AiOutlineHeart, AiOutlineMail} from "react-icons/ai"
import {Link} from "react-router-dom"
import Modal from "react-modal"
import contact from "../../assets/contact.svg"
import { Shortlist } from '../../contexts/Shortlist';
import HomeCard from '../HomeCard/HomeCard';


function Header(cityProperties) {

  //state to control contact us modal
  const [isContactOpen, setIsContactOpen] = useState(false)

   //state to control shortlist modal
   const [isShortlistOpen, setIsShortlistOpen] = useState(false)

   const {shortlist, setShortlist} = useContext(Shortlist)

  const customStyles = {
    content: {
      height: "714px",
      width: "936px",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      zIndex: "2"
    },
  };

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

  return (
    <div className='header-container'>
      <Link to="/">
        <div className="header-left">
            <MdOutlineHolidayVillage className="header-icon" />
            <img className="header-logo" src={logo} />
        </div>
        </Link>
        <div className="header-right">
            <button className="header-button" onClick={()=>setIsShortlistOpen(true)}>
            <AiOutlineHeart className="header-button-icon"/>
            Shortlist
            </button>
            <Modal 
            isOpen={isShortlistOpen}
            onRequestClose={()=>setIsShortlistOpen(false)}
            style={customStyles}
            contentLabel="Shortlist Modal"
            >
            <div className="shortlist-modal-toprow">
                <h2>Property Shortlist</h2>
                {/* {cityProperties.map((item) => 
        (
          <HomeCard item={item} 
          />
        ))}  */}
             <button onClick={()=>setShortlist([])}>Clear Shortlist</button>   
            </div>
            
          </Modal>
            <button className="header-button" onClick={()=> setIsContactOpen(true)}>
              <AiOutlineMail className="header-button-icon" />
            Contact Us
            </button>
            <Modal 
            isOpen={isContactOpen}
            onRequestClose={()=>setIsContactOpen(false)}
            style={customStyles}
            contentLabel="Contact Us Modal"
            >
            <div className="contact-modal-toprow">
                <h2>Contact us</h2>
                <img src={contact} />
            </div>
            <div className="contact-modal-desc">
                <p>Feel free to contact us if you have any questions.</p>
                <p>Looking forward to hear from you</p>
            </div>
            <form className="contact-us-form">
                <label className="name-label" htmlFor="name">Name</label>
                <input className="name-input" type="text" id="name" placeholder="Enter your name"/>
                <label className="email-label" htmlFor="email">Email</label>
                <input className="email-input" type="email" id="email" placeholder="Enter your email address"/>
                <label className="phone-label" htmlFor="phonenumber">Phone Number</label>
                <input className="phone-input" type="tel" id="phonenumber" placeholder="Enter your phone number"/>
                <label className="message-label" htmlFor="message">Message</label>
                <textarea className="message-area" id="message" rows="4" placeholder="Enter your message"></textarea>
                <label className="user-type-label" htmlFor="userTypeSelect">Are you a...</label>
                <select className="user-type-select" id="userTypeSelect">
                  <option>Student</option>
                  <option>Parent</option>
                  <option>Other</option>
                </select>
                <button className="form-submit" type="submit">Submit</button>
            </form>
          </Modal>
        </div>
      
    </div>
  )
}

export default Header
