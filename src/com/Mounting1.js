import React, { Component } from 'react'
import Mounting2 from './Mounting2'

export default class Mounting1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Hassu"
      }
      console.log("Mounting 1 Constructer invoked")
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps")

        console.log(props)
        console.log(state)
        return null
    }
    componentDidMount(){
        console.log("Did Mount")
    }
  render() {
    console.log("Render")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        {/* <Mounting2 city="Patna"/> */}
      </div>
    )
  }
}
