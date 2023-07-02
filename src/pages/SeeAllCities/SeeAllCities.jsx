import React from 'react'
import "./SeeAllCities.css"
import Slider from '../../components/Slider/Slider';


function SeeAllCities() {

  // console.log(location.pathname)

  return (
    <div>
      See all cities test
      <Slider path={location.pathname} />
      
          </div>
  )
}

export default SeeAllCities
