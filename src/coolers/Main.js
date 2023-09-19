import React from 'react'
import Nav from './Nav'
import Card from './Card'
import Card1 from './Card1'
import Card2 from './card2'
import Contact from './Contact'


export default function Main() {
  return (
    <div className='main'>
        <Nav/>
        <Card/>
        <Card1/>
        <Card2/>
        <Contact/>
    </div>
  )
}
