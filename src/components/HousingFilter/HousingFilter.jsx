import React from 'react'
import "./HousingFilter.css"


function HousingFilter({cityProperties}) {


  return (
    <form className="housing-filter-form">
        <select name="min-bedroom" className="housing-filter-select">
          <option>Any bedroom</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
        <select name="min-bathroom" className="housing-filter-select">
          <option>Any bathroom</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
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
