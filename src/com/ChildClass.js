import React, { Component } from 'react'

export default class ChildClass extends Component {
    componentWillUnmount(){
        console.log("Component Will Unmount")
    }
  render() {
    return (
      <div>
        <h1>Hey Hassu Khan</h1>
      </div>
    )
  }
}
