import React, {useState} from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
import Facebook from "../../assets/facebook.svg"
import Twitter from "../../assets/twitter.svg"
import Instagram from "../../assets/instagram.svg"
import axios from "axios"



function Footer() {

const [subscribed, setSubscribed] = useState(false)
const [emailInputValue, setEmailInputValue] = useState("")

function submitNewsletterSub (e) {
            // submit email to api for subscription
            axios.post("https://unilife-server.herokuapp.com/subscriptions", {
              "email": e.target.value,
                      })
            .then(function (response) {
              console.log(response.data.message);
              //set boolean state to true
              setSubscribed(true);
              //set email box back to placeholder with zero length string
              setEmailInputValue("")
            })
            .catch(function (error) {
              console.log(error);
            });
}


function handleKeyDown(e) {
    //if the enter key is pressed, run the same event as if clicked away (blur)
    if (e.key === "Enter") {
      e.target.blur();
    }

  }




  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-top-left">
            <h2>Keep in touch</h2>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            
            <input type="email" 
            placeholder="Your email" 
            onBlur={submitNewsletterSub}
            onKeyDown={handleKeyDown}
            value={emailInputValue} 
            onChange={(e) => setEmailInputValue(e.target.value)}
            ></input>
            {
              subscribed &&
            <p className="subscribed-success">Done! Thanks for subscribing to our newsletter</p>
            }
        </div>
        <div className="footer-top-right">
          <h2>Let's Socialize</h2>
          <Link to="https://facebook.com"className="footer-link-top">
          <img src={Facebook} />
          Facebook
          </Link>
          <Link to="https://twitter.com"className="footer-link-top">
          <img src={Twitter} />
          Twitter
          </Link>
          <Link to="https://instagram.com"className="footer-link-top">
          <img src={Instagram} />
          Instagram
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
        <Link to="#" className="footer-link-bottom">About Us</Link>
        <Link to="#" className="footer-link-bottom">Terms & Conditions</Link>
        <Link to="#" className="footer-link-bottom">Privacy & Cookie Policies</Link>
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
