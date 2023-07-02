import React, {useState, useEffect,useContext} from 'react'
import "./CitySearch.css"
import { AllCities } from '../../contexts/AllCites'



function CitySearch() {

  const {cities} = useContext(AllCities)

  //state for cities dropdown options
const [options, setOptions] = useState([])
//state for seleted option
const [selectedOption, setSelectedOption] = useState(1)
const [selectedCity, setSelectedCity] = useState()






  return (
       <form className="city-search-form">
        <select name="city-id" className="city-search-select">
          <option>Search by city</option>
          {cities.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
        </select>
        <button type="submit" className="city-search-button">Find Homes</button>
      </form> 
  )
}

export default CitySearch
