import React, {useState, useEffect, useContext} from 'react'
import "./Homepage.css"
import Slider from '../../components/Slider/Slider'
import SearchGlobe from '../../assets/searchglobe.svg'
import Compare from "../../assets/compare.svg"
import Bills from "../../assets/bills.svg"
import PhoneMan from "../../assets/phoneman.png"
import BestIcon from "../../assets/best.svg"
import Heart from "../../assets/heart.svg"
import { AllCities } from '../../contexts/AllCites'
import {Link} from "react-router-dom"






function Homepage() {

  const {cities} = useContext(AllCities)

  

  return (
    <div className="homepage-container" >
      <Slider path={location.pathname}/>
      <h2 className="homepage-header">Student accommodations in our top cities</h2>
      <div className="top-cities-container">
      {cities.map((item, index) => 
      index < 9 && (
          <Link to={`/citydetails/${item?._id}`} className="top-cities-card" key={item._id} value={item._id} style={{backgroundImage: `url(${item.image_url})`}}>
            <div id="card-overlay"></div>
            <h5>{item.name}</h5>
            <p>{item.property_count} properties</p>
          </Link>
        ))} 
      </div>
      <div className="hp-static-container">
      <Link to="/seeallcities"><button className="all-cities-button">See All Cities</button></Link>
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
              <div className="best-left-item-left">
              <img src={BestIcon} className="best-section-icon"/>
              </div>
              <div className="best-left-item-right">
              <h3>Best selection</h3>
              <p>Best selection of student accommodations. Never been easier to find a home that’s right for you.</p>
                </div>
              </div>
            <div className="best-left-item">
              <div className="best-left-item-left">
            <img src={Heart} className="best-section-icon"/>
            </div>
            <div className="best-left-item-right">
              <h3>Your favorite</h3>
              <p>Shortlist your favourite properties and send enquiries in one click.</p>
              </div>
            </div>
            <button onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} className="search-compare-button">Search & Compare</button>
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
