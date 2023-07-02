import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage';
import AllCitiesProvider from './contexts/AllCites'
import SeeAllCities from './pages/SeeAllCities/SeeAllCities';
import CityDetails from './pages/CityDetails/CityDetails';
import HomeDetails from './pages/HomeDetails/HomeDetails';








function App() {

  return (
    <BrowserRouter>
    <Header />
    <AllCitiesProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/seeallcities" element={<SeeAllCities />} />
        <Route path="/citydetails/:cityid" element={<CityDetails />} />
        <Route path="/homedetails/:homeid" element={<HomeDetails />} />
      </Routes>
      </AllCitiesProvider>
    <Footer />
    </BrowserRouter>
  )
}

export default App
 