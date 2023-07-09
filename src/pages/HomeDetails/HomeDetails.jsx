import React, {useState, useEffect} from 'react'
import "./HomeDetails.css"
import axios from 'axios'
import Bed from "../../assets/bed.svg"
import Bathtub from "../../assets/bathtub.svg"
import {Link, useParams} from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"


function HomeDetails() {

  const {homeid} = useParams();

  //state to hold current property data object
  const [homeDetails, setHomeDetails] = useState([])
  const [featuredImage, setFeaturedImage] = useState(3)
 
  
  //useeffect1 on load, empty array at end
  useEffect (
    () => {   
      // get/set homeDetails
      axios.get(`https://unilife-server.herokuapp.com/properties/${homeid}`)
      .then(res => {
        console.log(res.data)
        setHomeDetails(res.data)

        // setImageGallery(buildImageGalleryArray(res.data.images))
        
        // let bedprices = res.data.bedproom_prices
        // for (var key in bedprices) {
        //   if (bedprices.hasOwnProperty(key)) {
        //     bedprices[key]
        //   }
        // }
             
      })
      .catch(err => console.log(err))
    }, []
  ) 



  return (
    <div className="home-details-container">
      <Link to={`/citydetails/${homeDetails?.city_id?._id}`} className="back-to-search" ><IoIosArrowBack />Back to Search </Link>
      <div className="home-image-gallery">
          <img className="home-featured-image" src={homeDetails?.images?.[featuredImage]} />
          <div className="home-image-selection">
              <img className="home-single-image" src={homeDetails?.images?.[0]} onClick={() => setFeaturedImage(0)} />
              <img className="home-single-image" src={homeDetails?.images?.[1]} onClick={() => setFeaturedImage(1)} />
              <img className="home-single-image" src={homeDetails?.images?.[2]} onClick={() => setFeaturedImage(2)} />
              <img className="home-single-image" src={homeDetails?.images?.[3]} onClick={() => setFeaturedImage(3)} />

          </div>
      </div>
      <div className="home-details">
            <div className="home-address">
            <h6>{homeDetails?.address?.street}, {homeDetails?.address?.city}, {homeDetails?.address?.postcode}</h6>
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
                <div className="home-icon-buttons">
                  <button>Shortlist</button>
                  <button>Book Viewing</button>
                </div>
            </div>
      </div>
      <div className="home-description">
          <h6>Description</h6>
          <p>{homeDetails?.property_description}</p>
      </div>
      <div className="home-bedroom-prices">
          <h6>Bedroom Prices</h6>
          
      </div>
      <div className="home-key-features">
          <h6>Key features</h6>
          {/* Map for the number of key features */}
      </div>

    </div>
  )
}

export default HomeDetails
