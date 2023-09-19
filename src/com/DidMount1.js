import React, { Component } from 'react'

export default class DidMount1 extends Component {
    componentDidMount(){
        console.log("Mounted1")
    }
    componentWillUnmount(){
      console.log("Unmiunt2")
  }
  render() {
    return (
      <div>
        <h1>Hello Unmount1</h1>
      </div>
    )
  }
}
