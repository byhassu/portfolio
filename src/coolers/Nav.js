import React from 'react'
import Card from './Card'
import img1 from './d2.png'
import { Link } from 'react-router-dom'
import About from './About'

export default function Nav() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light k">
  <div className="container-fluid">
  <img src={img1} className='img'></img>
    <Link className="navbar-brand" to="/"><span className='ac' >Hasnain</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        
        <li className="nav-item dropdown">
          
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

          </ul>
        </li>
        
       
        <li>
          <a href="https://www.linkedin.com/in/md-hasnain-738484235/" style={{marginLeft:"10px",textDecoration:"none",color:"darkblue",fontWeight:"bold"}}>My Linkedin</a>
        </li>
        <li>
          <a href='#contact' className='contact' style={{marginLeft:"10px",textDecoration:"none",color:'green'}}>Hire me</a>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-danger" type="submit">Search Now</button>
      </form>
    </div>
  </div>
</nav>


    </>
  )
}
