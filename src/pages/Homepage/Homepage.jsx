import React from 'react'
import "./Homepage.css"
import Slider from '../../components/Slider/Slider'
import SearchGlobe from '../../assets/searchglobe.svg'
import Compare from "../../assets/compare.svg"
import Bills from "../../assets/bills.svg"
import PhoneMan from "../../assets/phoneman.png"
import BestIcon from "../../assets/best.svg"
import Heart from "../../assets/heart.svg"




function Homepage() {
  return (
    <div className="homepage-container">
      <Slider />
      <h2 className="homepage-header">Student accommodations in our top cities</h2>
      <div className="top-cities-container"></div>
      <div className="hp-static-container">
        <div className="compare-container">
          <h2 className="compare-header">Compare all inclusive student homes</h2>
          <div className="compare-three-container">
            <div className="compare-item">
              <img src={SearchGlobe}/>
              <h3>Search</h3>
              <p>Find your dream home in the perfect area near your university</p>
            </div>
            <div className="compare-item">
              <img src={Compare}/>
              <h3>Compare</h3>
              <p>Compare student accommodation to find the right home for you.</p>
            </div>
            <div className="compare-item">
              <img src={Bills}/>
              <h3>Bills Included</h3>
              <p>Bills are included in all rent prices. No hidden fees.</p>
            </div>
          </div>
        </div>
        <div className="best-container">
          <div className="best-left-container">
            <div className="best-left-item">
              <img src={BestIcon} className="best-section-icon"/>
              <h3>Best selection</h3>
              <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
              </div>
            <div className="best-left-item">
            <img src={Heart} className="best-section-icon"/>
              <h3>Your favorite</h3>
              <p>Shortlist your favourite properties and send enquiries in one click.</p>
            </div>
            <button className="search-compare-button">Search & Compare</button>
         </div>
          <div className="best-right-container">
            <img src={PhoneMan} className="phone-man-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
