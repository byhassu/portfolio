import React, { Component } from 'react'

export default class DidMount2 extends Component {
    componentDidMount(){
        console.log("Mount2")
    }
    componentWillUnmount(){
        console.log("Unmiunt2")
    }
  render() {
    return (
      <div>
        <h1>Hello Unmount 2</h1>
      </div>
    )
  }
}
