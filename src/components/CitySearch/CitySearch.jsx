import React, {useState, useEffect,useContext} from 'react'
import "./CitySearch.css"
import { AllCities } from '../../contexts/AllCites'
import {Link} from "react-router-dom"



function CitySearch() {

  //use context for cities dropdown options
  const {cities} = useContext(AllCities)

//state for seleted city
const [selectedCityId, setSelectedCityId] = useState("")


function handleSelectedCity (e) {
  setSelectedCityId(e.target.value)
}



  return (
       <form className="city-search-form">
        <select name="city-id" className="city-search-select" onChange={handleSelectedCity}>
          <option >Search by city</option>
          {cities.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
        </select>
        {
        selectedCityId === "" ?
        <button type="submit" className="city-search-button">Find Homes</button>
        :
        <Link to={`/citydetails/${selectedCityId}`}><button type="submit" className="city-search-button">Find Homes</button></Link>
        }
      </form> 
  )
}

export default CitySearch
