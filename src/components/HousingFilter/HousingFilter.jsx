import React, {useEffect} from 'react'
import "./HousingFilter.css"
import {useParams} from "react-router-dom"

function HousingFilter(props) {

  //get cityid from url
  const {cityid} = useParams();

  useEffect(
    ()=>{

      const buildPropertyFilter = (bedroom, bathroom, price, type) => {
        const query = {
          city_id: cityid,
          bedroom_count: bedroom,
          bathroom_count: bathroom,
          rent: price,
          property_type: type
        }
      }

    }, [HousingFilter]
    )


  return (
    <form className="housing-filter-form">
        <div className="filter-col">
        <label htmlFor="min-bedroom">Min Bedroom</label>
        <select name="min-bedroom" 
        id="min-bedroom" 
        className="housing-filter-select"
        // onChange={(e) => buildPropertyFilter(e.target.value)}
        
        >
          <option>Any bedroom</option>
          {props.bedArr.map((bedOption, index) => 
          (
          <option key={index}>{bedOption}</option>
        ))} 
        </select>
        </div>
        <div className="filter-col">
        <label htmlFor="min-bathroom">Min Bathroom</label>
        <select name="min-bathroom" id="min-bathroom" className="housing-filter-select">
          <option>Any bathroom</option>
          {props.bathArr.map((bathOption, index) => 
          (
          <option key={index}>{bathOption}</option>
        ))} 
        </select>
        </div>
        <div className="filter-col">
        <label htmlFor="max-price">Max Price</label>
        <select name="max-price" id="max-price" className="housing-filter-select">
          <option>Any price</option>
          {props.rentArr.map((priceOption, index) => 
          (
          <option key={index}>{priceOption}</option>
        ))} 
          </select>
        </div>
        <div className="filter-col">
        <label htmlFor="home-type">Home Type</label>
        <select name="home-type" id="home-type" className="housing-filter-select">
          <option>Any type</option>
          {props.housingArr.map((typeOption, index) => 
          (
          <option key={index}>{typeOption}</option>
        ))} 
        </select>
        </div>
    </form>
  )
}

export default HousingFilter
