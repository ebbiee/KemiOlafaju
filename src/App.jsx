// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./Navbar";
import BodySection from "./BodySection";
import About from "./About";
import Services from "./Services";
import Consultation from "./Consultation";
import Contact from "./Contact";



export default function App() {


  return (<>
  <NavBar />
  <Routes>
        <Route path="/" element={<BodySection />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  </>
  )
}


