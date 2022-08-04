import { useState } from 'react'
import './App.css'
import Home from './components/Pages/Home'
import Carousel from './components/parts/Carousel'
import Footer from './components/parts/Footer'
import Navbar from './components/parts/Navbar'
import About from './components/Pages/About'
import {Routes, Route} from "react-router-dom";
import Contact from './components/Pages/Contact'
import Menu from './components/Pages/Menu'
import Services from './components/Pages/Services'
import Testimonial from './components/Pages/Testimonial'
import Reservation from './components/Pages/Reservation'


function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="menu" element={<Menu />}></Route>
        <Route path="service" element={<Services />}></Route>
        <Route path="testimonial" element={<Testimonial />}></Route>
        <Route path="reservation" element={<Reservation />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App
