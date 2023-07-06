import React from 'react'
import "./Slider.css"
import CoverImg from "../../assets/cover-img.png"
import CitySearch from '../CitySearch/CitySearch'
// import HousingFilter from '../HousingFilter/HousingFilter';



function Slider(props) {
  
  return (
    <div className="slider-container"
    style={{ backgroundImage:`url(${CoverImg})`}}>
    <div id="overlay"></div>
        {
            props.path === "/" ?
            <div className="slider-content">
            <h1 className="slider-header">Find student homes with bills included</h1>
            <h4 className="slider-header">A simple and faster way to search for student accommodation</h4>
            <CitySearch />
            </div>
            :
            props.path === "/seeallcities" ?
            <div className="slider-content">
            <h1 className="slider-header">Student Accomodation</h1>
            <h4 className="slider-header">UniLife have student accommodation available across the UK.
            Whatever you're after, we can help you find the right student accommodation for you. </h4>
            </div>
            :
            props.path.slice(0,12) === "/citydetails" && 
            <div className="slider-content">
            <h1 className="slider-header">Search Accomodation</h1>
            <h4 className="slider-header">Whatever you're after, we can help you find the right student accommodation for you. </h4>
            {/* <HousingFilter /> */}
            </div>
          }
    </div>
  )
}

export default Slider
