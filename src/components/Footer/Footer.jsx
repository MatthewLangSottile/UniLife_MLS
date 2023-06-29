import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
import Facebook from "../../assets/facebook.svg"
import Twitter from "../../assets/twitter.svg"
import Instagram from "../../assets/instagram.svg"

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-left">
            <h2>Keep in touch</h2>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input type="email" placeholder="Your email"></input>
        </div>
        <div className="footer-top-right">
          <h2>Let's Socialize</h2>
          <Link className="footer-link-top">
          <img src={Facebook} />
          Facebook
          </Link>
          <Link className="footer-link-top">
          <img src={Twitter} />
          Twitter
          </Link>
          <Link className="footer-link-top">
          <img src={Instagram} />
          Instagram
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
        <Link className="footer-link-bottom">About Us</Link>
        <Link className="footer-link-bottom">Terms & Conditions</Link>
        <Link className="footer-link-bottom">Privacy & Cookie Policies</Link>
        </div>
        <div className="footer-bottom-right">
          <p className="copyright">2022</p>
          <p className="copyright">&copy; Unilife</p>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
