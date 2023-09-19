import React from 'react'
import { Link } from 'react-router-dom'


export default function Card1() {
  return (
    <>
    <div className='card1' >
    
    <h1 className='maintxt'>Hi, I am Md Hasnain <br></br>
    I am into  <span className='maintxt2'>Frontend Developer</span></h1>
    
    
    <p className='mainp'>
    I am a final year student of B.tech of Truba college of science and technology Bhopal <br></br>
    I have many skills like... <span style={{color:"chartreuse"}}> python,DJango,HTML,CSS,Bootstrap,JavaScript ,ReactJs</span> and I am also familiar with other skills. So I am looking an organization where I can enhance my skills as per as organization growths
      </p>
   
    <p className='botm'>
      <span className='t300'>Skills</span> <span className='t50'>Certification</span> <span className='t1000'>Internship</span> <br></br>
      <span className='lst' >Python,React <span className='lst lstpd' > Python,Web Development </span><span className='lst lstpd'  >From NCRTC</span></span>
    </p>
    <span className='more' >
    <Link to="/About" className='more2' >Know More</Link>
    </span>
   
      
         
       
    </div>
    </>
  )
}
