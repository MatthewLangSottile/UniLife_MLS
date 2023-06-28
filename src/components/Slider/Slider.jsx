import React from 'react'
import "./Slider.css"
import CoverImg from "../../assets/cover-img.png"
import CitySearch from '../CitySearch/CitySearch'



function Slider() {
  return (
    <div className="slider-container"
    style={{ backgroundImage:`url(${CoverImg})`}}>
      <div id="overlay"></div>
      {/* Make header and sub dynamic by page */}
      <h1 className="slider-header">Find student homes with bills included</h1>
      <h4 className="slider-header">A simple and faster way to search for student accommodation</h4>
      <CitySearch />
      {/* <form className="city-search-form">
        <select name="city-search-select" className="city-search-select">
          <option>Search by city</option>
        </select>
        <button className="city-search-button">Find Homes</button>
      </form> */}
      {/* CitySearch component or none or AccomodationFitler component */}
    </div>
  )
}

export default Slider
