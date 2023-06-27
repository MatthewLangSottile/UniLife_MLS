import React from 'react'
import "./Homepage.css"
import Slider from '../../components/Slider/Slider'




function Homepage() {
  return (
    <div className="homepage-container">
      <Slider />
      <h2 className="homepage-header">Student accommodations in our top cities</h2>
      <div className="top-cities-container"></div>
      <div className="hp-static-container"></div>
    </div>
  )
}

export default Homepage
