import React, {useState, useContext, useEffect} from 'react'
import "./CityDetails.css"
import Slider from '../../components/Slider/Slider';
// import { AllCities } from '../../contexts/AllCites';
import axios from 'axios';
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import Bed from "../../assets/bed.svg"
import Bathtub from "../../assets/bathtub.svg"
import Homepin from "../../assets/homepin.svg"
import Home from "../../assets/home.svg"

function CityDetails() {

  //get cityid from url
  const {cityid} = useParams();
  
  //state to hold currently displayed properties
  const [displayedProperties, setDisplayedProperties] = useState([])

  //state to hold current city property data object
  const [cityProperties, setCityProperties] = useState([])

  //state to hold city information 
  const [cityInfo, setCityInfo] = useState("")


  //useeffect1 on load, empty array at end
  useEffect (
    () => {
      //get/set cityInfo
      axios.get(`https://unilife-server.herokuapp.com/cities/${cityid}`)
      .then(result => {
        console.log(result.data.data[0])
        setCityInfo(result.data.data[0])
      })
      .catch(err => console.log(err))
      
      // get/set cityProperties
      axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityid}`)
      .then(res => {
        console.log(res.data.response)
        setCityProperties(res.data.response)
      })
      .catch(err => console.log(err))
    }, []
  ) 

  //useeffect2 on HousingFilter Change

  return (
    <div>
      <Slider path={location.pathname}/>
      <div className="city-details-container">
          <h2>{cityProperties.length} homes in {cityInfo.name}</h2>
          <div className="city-properties-grid">
          {cityProperties.map((item) => 
        (
          <div className="city-properties-card" key={item._id}>
              <img className="city-prop-card-img" src={item.images[0]} />
              <div className="city-prop-card-row2">
                  <div className="city-prop-card-row2-left">
                      <p>${item.rent}</p>
                      <p>pppw including bills</p>     
                  </div>
                  <div className="city-prop-card-row2-right">
                      <img src={Bed} className="bed-icon" />
                      <p>{item.bedroom_count}</p>
                      <img src={Bathtub} className="bath-icon" />
                      <p>{item.bathroom_count}</p>
                  </div>
              </div>
              <div className="city-prop-card-row3">
                  <div className="city-prop-card-row3-top">
                    <p>{item.property_type}</p>
                    <p>{item.furnished}</p>
                  </div>
                  <div className="city-prop-card-row3-bottom">
                    <img src={Homepin}/>
                    <p>{item.address.street}, {item.address.city}, {item.address.postcode}</p>
                  </div>
              </div>
              <Link to={`/homedetails/${item?._id}`} className="city-prop-card-row4">
                    <img src={Home}/>
                    <p>View Home</p>
              </Link>
          </div>
        ))} 
          </div>
          <div className="city-info-section">
              <div className="city-info-text">
                  <h2>Being a student in {cityInfo.name}</h2>
                  <p>{cityInfo.student_life}</p>
                  <p>{cityInfo.universities}</p>
              </div>
             <div className="city-info-image">
              STATIC IMAGE HERE
              </div> 
          </div>
      </div>
    </div>
  )
}

export default CityDetails
