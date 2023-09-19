import React from 'react'
import { BrowserRouter,Route,Routes  } from 'react-router-dom'

import "./all.css"

import Main from './Main'
import Card from './Card'
import About from './About'
export default function All() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/> {/* 👈 Renders at /app/ */}
        <Route path="/About" element={<About/>}/> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
        
        
    </>
  )
}
