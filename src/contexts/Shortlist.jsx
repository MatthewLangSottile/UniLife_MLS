import {useState, createContext, useEffect} from 'react'
//create context
export const Shortlist = createContext()

export default function ShortlistProvider(props) {

    const [shortlist, setShortlist] = useState([])

    useEffect(
        ()=>{
          console.log("shortlist context loaded")
           
        
          const storedShortlist = localStorage.getItem('shortlistProperties')
        
          if (storedShortlist) {
            setShortlist(JSON.parse(storedShortlist))
          }
        }, []
        )

        useEffect(
            ()=>{
              console.log("shortlist context loaded")
               
              localStorage.setItem('shortlistProperties', JSON.stringify(shortlist))
              console.log(shortlist)
            
            }, [shortlist]
            )      

        
        const addProperty = (propertyToAdd) => {
            setShortlist(() => [...shortlist, propertyToAdd])
        }

        const removeProperty = (propertyId) => {
            setShortlist(() => shortlist.filter(item=>item._id === propertyId))
            
        }



   return (
    <Shortlist.Provider value={{shortlist, addProperty, removeProperty, setShortlist}}>
        {props.children}
    </Shortlist.Provider>
   ) 
}