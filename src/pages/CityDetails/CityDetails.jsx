import React, {useState, useEffect} from 'react'
import "./CityDetails.css"
import Slider from '../../components/Slider/Slider';
import axios from 'axios';
import {useParams} from "react-router-dom"
import CityInfoImg from "../../assets/cityinfoimage.png"
import HomeCard from '../../components/HomeCard/HomeCard';



function CityDetails() {

  //get cityid from url
  const {cityid} = useParams();
  
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
        
      })
      .catch(err => console.log(err))
    }, []
  ) 

 
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
        //"" for no change in this part of the query
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
          
          <h2>{cityProperties?.length} homes in {cityInfo?.name}</h2>
          <div className="city-properties-grid">
          
          {cityProperties.map((item) => 
        (
          <HomeCard item={item}
          cityProperties={cityProperties} 
          />
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
