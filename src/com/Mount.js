import React, { Component } from 'react'
import MountData from './MountData'

export default class Mount extends Component {
    constructor(props){
        super(props)
        console.log("Construcer Called")
        console.log(props)
        this.state={
          roll:"1001"

        }
    }
   static  getDerivedStateFromProps(props,state){
    console.log("Get Derived From Props")
    console.log(props,state)
    return null

   }
   componentDidMount(){
    console.log('Did Mount')
   }
  render() {
    console.log("Render")
    return (
      <div>
        <MountData name="Rahul"/>
      </div>
    )
  }
}
