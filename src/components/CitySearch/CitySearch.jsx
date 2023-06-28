import React from 'react'
import "./CitySearch.css"

function CitySearch() {
  return (
       <form className="city-search-form">
        <select name="city-search-select" className="city-search-select">
          <option>Search by city</option>
        </select>
        <button className="city-search-button">Find Homes</button>
      </form> 
  )
}

export default CitySearch
