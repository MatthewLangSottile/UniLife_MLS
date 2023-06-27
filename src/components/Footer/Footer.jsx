import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        Footer top
      </div>
      <div className="footer-bottom">
        <Link className="footer-link">
        Footer bottom
        </Link>
      </div>
    </div>
  )
}

export default Footer
