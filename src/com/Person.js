import React from "react";
import PropTypes from 'prop-types';

function Person(props){

    return(
        <>
<h1>{props.name} Leaves Here</h1>
<h1>ROll No ={props.roll} </h1>
<h1>{props.fromDelhi.toString()} </h1>
<h1>{String(props.fromDelhi)} </h1>
<h1>{props.arr} </h1>
<h1>{props.arr[0]} </h1>
        </>
    )
}
Person.propTypes={
    name:PropTypes.string.isRequired,
    roll:PropTypes.number,
    fromDelhi:PropTypes.bool,
    arr:PropTypes.array
}

Person.defaultProps={
    name:'User',
   
}


export default Person