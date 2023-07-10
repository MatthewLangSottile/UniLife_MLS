import React, {useContext, useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import Bed from "../../assets/bed.svg"
import Bathtub from "../../assets/bathtub.svg"
import Homepin from "../../assets/homepin.svg"
import Home from "../../assets/home.svg"
import { Shortlist } from '../../contexts/Shortlist';


function HomeCard(props) {

    //use context for global state
  //NOTE { } NOT []
  const {shortlist} = useContext(Shortlist)

  const [isInShortlist, setInShortlist] = useState(false)

   //need useEffect to set value for isInShortlist
 useEffect(
  ()=> {
    // is this property in the shortlist?
    //find will return the value if it found it or undefined if not found (which is false)
    setInShortlist(shortlist.find(item=>item.id === props?.item._id))
  }, [shortlist]
 )
  
  

  return (

          <div className="city-properties-card" key={props?.item._id}>
              <img className="city-prop-card-img" src={props?.item?.images[0]} />
              <div className="city-prop-card-row2">
                  <div className="city-prop-card-row2-left">
                      <p>${props?.item?.rent}</p>
                      <p>pppw including bills</p>     
                  </div>
                  <div className="city-prop-card-row2-right">
                      <img src={Bed} className="bed-icon" />
                      <p>{props?.item?.bedroom_count}</p>
                      <img src={Bathtub} className="bath-icon" />
                      <p>{props?.item?.bathroom_count}</p>
                  </div>
              </div>
              <div className="city-prop-card-row3">
                  <div className="city-prop-card-row3-top">
                    <p>{props?.item?.property_type}</p>
                    <p>{props?.item?.furnished}</p>
                  </div>
                  <div className="city-prop-card-row3-bottom">
                    <img src={Homepin}/>
                    <p>{props?.item?.address?.street}, {props?.item?.address?.city}, {props?.item?.address?.postcode}</p>
                  </div>
              </div>
              <Link to={`/homedetails/${props?.item?._id}`} className="city-prop-card-row4">
                    <img src={Home}/>
                    <p>View Home</p>
              </Link>
              
          </div>
     
  
  )
}

export default HomeCard
