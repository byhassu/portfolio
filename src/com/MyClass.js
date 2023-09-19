import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class MyClass extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h1>Hello {this.props.roll}</h1>
         {this.props.children}
         <MyClass2/>
      </div>
    )
  }
}



export  class MyClass2 extends Component {
  render() {
    return (
      <div>
      <h1>Hassu From Delhi</h1>
      
        
      </div>
    )
  }
}
MyClass.propTypes={
    name:PropTypes.string,
    roll:PropTypes.number,
}