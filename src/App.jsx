import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage';
import AllCitiesProvider from './contexts/AllCites'





function App() {

  return (
    <BrowserRouter>
    <Header />
    <AllCitiesProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      </AllCitiesProvider>
    <Footer />
    </BrowserRouter>
  )
}

export default App
 