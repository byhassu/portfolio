import React, { Component } from 'react'
import ChildClass from './ChildClass'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    parentMethod=(childName,surName)=>{
        // alert("Hello From Parent" +childName +" "+" "+surName)
        alert(`Hello From Parent : Name =${childName} Surname:${surName}`)
    }
  render() {
    return (
      <div>
        {/* <ChildComponent callMethod={this.parentMethod}/> */}
        <ChildComponent callMethod={this.parentMethod}/>
      </div>
    )
  }
}
