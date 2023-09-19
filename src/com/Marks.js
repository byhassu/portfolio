import React, { Component } from 'react'

export default class Marks extends Component {
     constructor(props){
        super(props);
        this.state={
            mrol:this.props.roll
        }
     }
static getDerivedStateFromProps(props,state){
    console.log("Get Derived State From Props")
    console.log(props,state)
    if(props!== state.mrol){
        return {mrol:props.roll}
    }
    return null

}
shouldComponentUpdate(nextProps,nextState){
    if (this.state.mrol < 7){

        console.log("Marks Should Update")
        console.log(nextProps,nextState)
        return true
    }
    console.log(nextProps,nextState)
        return false
}
 componentDidUpdate(prevProps,prevState,snapshot){
    console.log("Snapshot")
    console.log(prevProps,prevState,snapshot)
    
 }

  render() {
    console.log("Marks Render")
    return (
      <div>
        <h2>{this.state.mrol}</h2>
      </div>
    )
  }
}
