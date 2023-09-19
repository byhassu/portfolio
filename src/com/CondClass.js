import React, { Component } from 'react'
import Component2 from './Component2'

export default class CondClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Hassu"
      }
    }
    
  render() {
//    const name="Hassu"
   if (this.name=='Hassu'){
    return <Component2/>
   }
  }
}
