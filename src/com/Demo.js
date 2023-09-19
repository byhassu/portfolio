
import React,{Component} from "react";
 export default class Demo extends Component{
   constructor(props){
    super(props)
    this.state={
        name:"Hassu"
    }
   }
   Change(){
    this.setState({
        name:"Khan"
    })
   }

    render(){
        return(
            <div>
            <h1>{this.state.name}</h1>
            <button onClick={()=>this.Change()}>Click Me</button>

            </div>

        )
    }
}



