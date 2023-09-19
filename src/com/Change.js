import React, { Component } from 'react'

export default class Change extends Component {
    constructor(props){
        super(props)
        this.state={
            name:1,
            city:this.props.city
        }
    }
    changeCity(){
        this.setState({
            name:this.state.name+1,
            city:"New Delhi"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.city}</h1>
        <input type="button" value="Change" onClick={()=>this.changeCity()} />
      </div>
    )
  }
}
