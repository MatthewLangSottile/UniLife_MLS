import React, {useContext} from 'react'
import "./SeeAllCities.css"
import Slider from '../../components/Slider/Slider';
import { AllCities } from '../../contexts/AllCites';
import { Link } from 'react-router-dom';




function SeeAllCities() {

  const {cities} = useContext(AllCities)

  return (
    <div className="see-all-cities-container">
      <Slider path={location.pathname} />
      <h2>Search by City</h2>
      <div className="all-city-search-grid">
      {cities.map((item) => 
      (
          <Link to={`/citydetails/${item?._id}`} className="all-city-grid-item" key={item._id} value={item._id} >
            
            <h3>{item.name}</h3>
            
          </Link>
        ))} 
      </div>
      
          </div>
  )
}

export default SeeAllCities
