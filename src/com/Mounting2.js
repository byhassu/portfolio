import React, { Component } from 'react'


export default class Mounting2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Khan"
      }
      console.log("Mounting 2 Constructer invoked")
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
       
      </div>
    )
  }
}
