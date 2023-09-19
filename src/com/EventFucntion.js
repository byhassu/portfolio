import React from 'react'

export default function EventFucntion(props) {
    function Event(e){
        e.preventDefault()
        console.log("Buttun Clicked2")

    }
  return (
    <div>
    <h1>Hello From Function {props.name} </h1>
    <a href='https://youtube.com/' onClick={Event}>Click Function</a>
    </div>
  )
}
