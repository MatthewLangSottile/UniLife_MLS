import React, {useState, useEffect} from 'react'
import "./HomeDetails.css"
import axios from 'axios'
import {MdOutlineBathtub} from "react-icons/md"
import {Link, useParams} from "react-router-dom"
import {IoIosArrowBack} from "react-icons/io"
import {LiaBedSolid} from "react-icons/lia"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineCheck} from "react-icons/ai"


function HomeDetails() {

  const {homeid} = useParams();

  //state to hold current property data object
  const [homeDetails, setHomeDetails] = useState([])
  //state to hold gallery featuredImage index
  const [featuredImage, setFeaturedImage] = useState(3)
  //state to hold bedroomPrices object
  const [homeBedroomPrices, setHomeBedroomPrices] = useState("")
  //state to hold keyfeatures array
  const [homeKeyFeatures, setHomeKeyFeatures] = useState([])
 
  
  //useeffect1 on load, empty array at end
  useEffect (
    () => {   
      // get/set homeDetails
      axios.get(`https://unilife-server.herokuapp.com/properties/${homeid}`)
      .then(res => {
        console.log(res.data)
        setHomeDetails(res.data)
        setHomeBedroomPrices(res.data.bedroom_prices)
        setHomeKeyFeatures(res.data.key_features)

        
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
      <div className="home-info">
          <div className="home-info-top">
            <div className="home-address">
            <h6>{homeDetails?.address?.street}, {homeDetails?.address?.city}, {homeDetails?.address?.postcode}</h6>
            </div>
            <div className="home-summary-grid">
                <div className="home-summary-item">
                       <p className="home-summary-heading">Bedrooms</p>
                       <div className="home-summary-detail with-icon">
                            <LiaBedSolid />
                            <p>{homeDetails?.bedroom_count}</p>
                        </div> 
                </div>
                <div className="home-summary-item">
                    <p className="home-summary-heading">Bathrooms</p>
                      <div className="home-summary-detail with-icon">
                          <MdOutlineBathtub />
                          <p>{homeDetails?.bathroom_count}</p>
                      </div>
                </div>
                <div className="home-summary-item">
                    <p className="home-summary-heading">Property Type</p>
                    <p className="home-summary-detail">{homeDetails?.property_type}</p>
                </div>
                <div className="home-summary-item">
                    <p className="home-summary-heading">Price</p>
                    <p className="home-summary-detail">${homeDetails?.rent}</p>
                </div>
                <div className="home-summary-item">
                    <p className="home-summary-heading">Furnished type</p>
                    <p className="home-summary-detail">{homeDetails?.furnished}</p>
                </div>
                <div className="home-summary-item">
                    <p className="home-summary-heading">Available from</p>
                    <p className="home-summary-detail">{homeDetails?.availability}</p>
                </div>

            </div>
            </div>
            <div className="home-info-buttons">
                  <button class="button-with-icon button-white"><AiOutlineHeart /> Shortlist</button>
                  <button>Book Viewing</button>
                </div>
      </div>
      <div className="home-description">
          <h6>Description</h6>
          <p>{homeDetails?.property_description}</p>
      </div>
      <div className="home-bedroom-prices">
          <h6>Bedroom Prices</h6>
          <div className="bedroom-prices-detail">
          {
          Object.entries(homeBedroomPrices).map((value, index) => (
            <div key={index} className="home-bedroom-price-item">
        <p>Bedroom {index+1}</p>
        <p>${value[1]}</p>
            </div>
    ))
    }
    </div>
      </div>
      <div className="home-key-features">
          <h6>Key features</h6>
          {
          homeKeyFeatures.map((item) => 
      (
          <div className="home-key-feature-item" key={item._id} value={item._id} >
             <AiOutlineCheck className="key-feature-check"/>
             <p>{item}</p>           
          </div>
        ))
        } 
      </div>

    </div>
  )
}

export default HomeDetails
