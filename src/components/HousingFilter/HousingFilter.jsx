import React from 'react'
import "./HousingFilter.css"

function HousingFilter(cities) {
  return (
    <form className="housing-filter-form">
        <select name="min-bedroom" className="housing-filter-select">
          <option>Any bedroom</option>
      
        </select>
        <select name="min-bathroom" className="housing-filter-select">
          <option>Any bathroom</option>
          
        </select>
        <select name="max-price" className="housing-filter-select">
          <option>Any price</option>
          
        </select>
        <select name="home-type" className="housing-filter-select">
          <option>Any type</option>
          
        </select>
    </form>
  )
}

export default HousingFilter
