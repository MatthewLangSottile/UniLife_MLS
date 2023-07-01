import {useState, createContext, useEffect} from 'react'
import axios from "axios"
//create context
export const AllCities = createContext()

export default function AllCitiesProvider(props) {
    const [cities, setCities] = useState([])

    useEffect(
        ()=>{
          console.log("page loaded")
           //default api call for the cities
          //https://unilife-server.herokuapp.com/cities
        
          const fetchAllCityData = async () => {
            try {
              //first call for total number of cites
              const res = await  axios.get(`https://unilife-server.herokuapp.com/cities`)
              const totalCityCount = res?.data?.total
              console.log(totalCityCount)
              const result = await axios.get(`https://unilife-server.herokuapp.com/cities?limit=${totalCityCount}`)
              setCities(result?.data.response)  
              console.log(result?.data.response.name)
              
      
            }
            catch(err) {
              console.log(err)
            }
          }
        
        fetchAllCityData()

}, []
    )



   return (
    <AllCities.Provider value={{cities}}>
        {props.children}
    </AllCities.Provider>
   ) 
}