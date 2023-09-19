import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        {/* <button onClick={this.props.callMethod}>ClickMe</button> */}
        <button onClick={()=>this.props.callMethod("Hassu","Khan")}>ClickMe</button>
      </div>
    )
  }
}
