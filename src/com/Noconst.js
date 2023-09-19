import React, { Component } from 'react'

export default class Noconst extends Component {
    state={
        name:"Raja"
    }
    changeName(){
        this.setState({
            name:"Chote"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input type="button" value="click" onClick={()=>this.changeName()} />
      </div>
    )
  }
}
