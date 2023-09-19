import React, { Component } from 'react'

export default class Employee extends Component {
    constructor(){
        super()
        this.state={
            name:"Hassu Khan"
        }
    }
    changeName(){
        this.setState({
            name:"Welcome To Delhi"
        })
    
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input type="button" value="Click" onClick={()=>this.changeName()}/>
        
      </div>
    )
  }
}
