import React,{Component} from "react";
class Event extends Component{
    constructor(props){
        super(props);
        this.state={
            id:1,
            name:"Hassu",
            roll:this.props.roll
        }
        this.handleClick=this.handleClick.bind(this);

    }
    handleClick=(id,e)=>{
        console.log(id)
        console.log(e)
        
    }
    

    render(){
        return(
            <div>
                <h1>Hello,{this.state.name},{this.state.roll}</h1>
                <button onClick={e=>{
        this.handleClick(this.state.id,e)}}>Deleted</button>
            </div>
        )
    }
}
export default Event
