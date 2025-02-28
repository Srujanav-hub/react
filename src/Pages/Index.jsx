import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Aboutus from './Aboutus'
import Contact from './Contact'
import Services from './Services'
import Cart from './Cart'

const Index = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

      <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/services" element={<Services/>} />
        
      </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default Index
