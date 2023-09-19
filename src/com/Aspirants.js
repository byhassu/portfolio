import React, { Component } from 'react'
import Marks from './Marks';

export default class Aspirants extends Component {
    constructor(){
        super();
        this.state={
            roll:101
        }
    }
    clickHandle=()=>{
        console.log("Button Clicked")
        this.setState({
            // roll:"102"
            roll:this.state.roll+1
        })

    }
  render() {
    console.log("Aspirant Render")
    return (
      <div>
        <Marks roll={this.state.roll}/>
        <button onClick={this.clickHandle}>Change Roll</button>
      </div>
    )
  }
}
