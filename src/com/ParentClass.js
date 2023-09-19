import React, { Component } from 'react'
import ChildClass from './ChildClass'

export default class ParentClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         active:true
      }
    }
    changeState=()=>{
        this.changeState({
            active:false
        });
    }
  render() {
    console.log("Parent Render Call")
    return (
      <div>
        {this.state.active ? <ChildClass/>: <h1>Component Deleted...</h1>}
        <button onClick={this.changeState()}>Change State</button>
      </div>
    )
  }
}
