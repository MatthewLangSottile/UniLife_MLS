import React, {useState, useEffect} from 'react'
import "./HomeDetails.css"
import axios from 'axios'
import Bed from "../../assets/bed.svg"
import Bathtub from "../../assets/bathtub.svg"
import {Link, useParams} from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"


function HomeDetails() {

  const {homeid} = useParams();

  //state to hold current cuproperty data object
  const [homeDetails, setHomeDetails] = useState([])

  //useeffect1 on load, empty array at end
  useEffect (
    () => {   
      // get/set homeDetails
      axios.get(`https://unilife-server.herokuapp.com/properties/${homeid}`)
      .then(res => {
        console.log(res.data)
        setHomeDetails(res.data)
             
      })
      .catch(err => console.log(err))
    }, []
  ) 
  return (
    <div className="home-details-container">
      <Link className="back-to-search" to="/citydetails/:cityid"><IoIosArrowBack />Back to Search </Link>
      <div className="home-image-gallery">
          Image gallery
      </div>
      <div className="home-details">
            <div className="home-address">
            <h2>{homeDetails?.address?.street}, {homeDetails?.address?.city}, {homeDetails?.address?.postcode}</h2>
            </div>
            <div className="home-icon-summary">
                <div className="home-icon-summary-TL">
                    <div className="home-icon-value">
                      <p className="home-icon-heading">Bedrooms</p>
                       <img src={Bed} /><p>{homeDetails?.bedroom_count}</p>
                    </div>
                </div>
                <div className="home-icon-summary-TM">
                    <p className="home-icon-heading">Bathrooms</p>
                      <div className="home-icon-value">
                      <img src={Bathtub}/><p>{homeDetails?.bathroom_count}</p>
                    </div>
                </div>
                <div className="home-icon-summary-TR">
                    <p className="home-icon-heading">Property Type</p>
                    <p className="home-icon-value">{homeDetails?.property_type}</p>
                </div>
                <div className="home-icon-summary-BL">
                    <p className="home-icon-heading">Price</p>
                    <p className="home-icon-value">{homeDetails?.rent}</p>
                </div>
                <div className="home-icon-summary-BM">
                    <p className="home-icon-heading">Furnished type</p>
                    <p className="home-icon-value">{homeDetails?.furnished}</p>
                </div>
                <div className="home-icon-summary-BR">
                    <p className="home-icon-heading">Available from</p>
                    <p className="home-icon-value">{homeDetails?.availability}</p>
                </div>

            </div>
      </div>
      <div className="home-description">
          Description
      </div>
      <div className="home-bedroom-prices">
          Bedroom prices
      </div>
      <div className="home-key-features">
          Key features
      </div>

    </div>
  )
}

export default HomeDetails
