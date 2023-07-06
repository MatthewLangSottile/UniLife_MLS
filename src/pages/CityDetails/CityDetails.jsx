import React, {useState, useEffect} from 'react'
import "./CityDetails.css"
import Slider from '../../components/Slider/Slider';
import axios from 'axios';
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import Bed from "../../assets/bed.svg"
import Bathtub from "../../assets/bathtub.svg"
import Homepin from "../../assets/homepin.svg"
import Home from "../../assets/home.svg"
import CityInfoImg from "../../assets/cityinfoimage.png"
// import HousingFilter from '../../components/HousingFilter/HousingFilter';



function CityDetails() {

  //get cityid from url
  const {cityid} = useParams();
  
  // //state to hold currently displayed properties
  // const [displayedProperties, setDisplayedProperties] = useState([])

  //state to hold current city property data object
  const [cityProperties, setCityProperties] = useState([])

  //state to hold city information 
  const [cityInfo, setCityInfo] = useState("")

  //state to hold formatted max rent prices
  const [rentPriceArr, setRentPriceArr] = useState([])
  //state to hold formatted housing types
  const [housingTypeArr, setHousingTypeArr] = useState([])
  //state to hold formatted min bathroom
  const [minBathArr, setMinBathArr] = useState([])
  //state to hold formatted min bedroom
  const [minBedArr, setMinBedArr] = useState([])

  //state to hold housingFilterQuery
  const [housingFilterQuery, setHousingFilterQuery] = useState("")

  const formatRent= (dataSet) => {
    let limited = dataSet.map((property) => property.rent);
    let dupeRem = [...new Set(limited)];
    let sorted = dupeRem.sort(function(a, b){return a-b});
    return sorted;
  }

  const formatBedrooms= (dataSet) => {
    let limited = dataSet.map((property) => property.bedroom_count);
    let dupeRem = [...new Set(limited)];
    let sorted = dupeRem.sort(function(a, b){return a-b});
    return sorted;
  }

  const formatBathrooms= (dataSet) => {
    let limited = dataSet.map((property) => property.bathroom_count);
    let dupeRem = [...new Set(limited)];
    let sorted = dupeRem.sort(function(a, b){return a-b});
    return sorted;
  }

  const formatHousing= (dataSet) => {
    let limited = dataSet.map((property) => property.property_type);
    let dupeRem = [...new Set(limited)];
    let sorted = dupeRem.sort();
    return sorted;
  }

  const buildPropertyFilter = (bedroom, bathroom, price, type) => {
          const query = {
          city_id: cityid,
          bedroom_count: bedroom,
          bathroom_count: bathroom,
          rent: price,
          property_type: type
        }
        console.log(query)
        // setHousingFilterQuery(query)
        
                    // submit request for filtered properties
                    axios.post("https://unilife-server.herokuapp.com/properties/filter", {query})
                    .then(function (response) {
                      console.log(response.data.message);
                      console.log(response.data.response)
                      setCityProperties(response.data.response)
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
          
      }

  

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


      setRentPriceArr(formatRent(res.data.response))
      setHousingTypeArr(formatHousing(res.data.response))
      setMinBathArr(formatBathrooms(res.data.response))
      setMinBedArr(formatBedrooms(res.data.response))
      // setDisplayedProperties(res.data.response)
      
        
      })
      .catch(err => console.log(err))
    }, []
  ) 

  //useeffect2 on HousingFilter query Change
  // useEffect (
  // () => {
  //           // submit email to api for subscription
  //           axios.post("https://unilife-server.herokuapp.com/properties/filter", {housingFilterQuery})
  //           .then(function (response) {
  //             console.log(response.data.message);
  //             setCityProperties(response.data)
  //           })
  //           .catch(function (error) {
  //             console.log(error);
  //           });
  //   }, [housingFilterQuery]
  // ) 

  return (
    <div className="city-details-page">
      
      <Slider path={location.pathname}/>
      <div className="city-details-container">
      <form className="housing-filter-form">
        <div className="filter-col">
        <label htmlFor="min-bedroom">Min Bedroom</label>
        <select name="min-bedroom" 
        id="min-bedroom" 
        className="housing-filter-select"
        //NC for no change in this part of the query
        onChange={(e) => buildPropertyFilter( e.target.value, "", "","")}
        >
          <option>Any bedroom</option>
          {minBedArr.map((bedOption, index) => 
          (
          <option key={index}>{bedOption}</option>
        ))} 
        </select>
        </div>
        <div className="filter-col">
        <label htmlFor="min-bathroom">Min Bathroom</label>
        <select 
        name="min-bathroom" 
        id="min-bathroom" 
        className="housing-filter-select"
        onChange={(e) => buildPropertyFilter("", e.target.value,  "","")}
        >
          <option>Any bathroom</option>
          {minBathArr.map((bathOption, index) => 
          (
          <option key={index}>{bathOption}</option>
        ))} 
        </select>
        </div>
        <div className="filter-col">
        <label htmlFor="max-price">Max Price</label>
        <select 
        name="max-price" 
        id="max-price" 
        className="housing-filter-select"
        onChange={(e) => buildPropertyFilter("", "", e.target.value, "")}
        >
          <option>Any price</option>
          {rentPriceArr.map((priceOption, index) => 
          (
          <option key={index}>{priceOption}</option>
        ))} 
          </select>
        </div>
        <div className="filter-col">
        <label htmlFor="home-type">Home Type</label>
        <select 
        name="home-type" 
        id="home-type" 
        className="housing-filter-select"
        onChange={(e) => buildPropertyFilter("", "", "", e.target.value)}
        >
          <option>Any type</option>
          {housingTypeArr.map((typeOption, index) => 
          (
          <option key={index}>{typeOption}</option>
        ))} 
        </select>
        </div>
    </form>
          {/* rentArr={rentPriceArr}
          housingArr={housingTypeArr}
          bathArr={minBathArr}
          bedArr={minBedArr}
          /> */}
          <h2>{cityProperties?.length} homes in {cityInfo?.name}</h2>
          <div className="city-properties-grid">
          {cityProperties.map((item) => 
        (
          <div className="city-properties-card" key={item._id}>
              <img className="city-prop-card-img" src={item?.images[0]} />
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
                    <p>{item?.address?.street}, {item?.address?.city}, {item?.address?.postcode}</p>
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
              <img src={CityInfoImg}/>
              </div> 
          </div>
      </div>
    </div>
  )
}

export default CityDetails
