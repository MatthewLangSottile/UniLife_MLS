import React, {useState} from 'react'
import "./Header.css"
import {MdOutlineHolidayVillage} from "react-icons/md"
import logo from "../../assets/UniLife.svg"
import {AiOutlineHeart, AiOutlineMail} from "react-icons/ai"
import {Link} from "react-router-dom"
import Modal from "react-modal"
import contact from "../../assets/contact.svg"

function Header() {

  //state to control contact us modal
  const [isOpen, setIsOpen] = useState(false)

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
      justifyContent: "space-evenly"
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
            <Link className="header-link">
            <AiOutlineHeart className="header-link-icon"/>
            Shortlist
            </Link>
            <button className="header-link" onClick={()=> setIsOpen(true)}>
              <AiOutlineMail className="header-link-icon" />
            Contact Us
            </button>
            <Modal 
            isOpen={isOpen}
            onRequestClose={()=>setIsOpen(false)}
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
                <input className="name-input" type="text" id="name"/>
                <label className="email-label" htmlFor="email">Email</label>
                <input className="email-input" type="email" id="email"/>
                <label className="phone-label" htmlFor="phonenumber">Phone Number</label>
                <input className="phone-input" type="tel" id="phonenumber"/>
                <label className="message-label" htmlFor="message">Message</label>
                <textarea className="message-area" id="message" rows="4"></textarea>
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
