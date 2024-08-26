import React from 'react';


function Tool({name,age,skill}){
    return(
<div>
    <h2>HI I am {name}</h2>
    <h2>I am {age} year old and have no work experiance</h2>
    <h2> My major {skill} is </h2>
</div>

    )
}
//componet and default propes
Tool.defaultProps ={
    name:"vipin kumar maurya",
    age:27,
    skill:"react js"
}
export default Tool;