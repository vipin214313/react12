import React from "react";


class MyComponent extends React.Component{

constructor(props){
    super(props);
this.state = { brand:"honda"};
}
changeBrand=()=>{
    this.setState({brand:"toyota"});
}
render(){
    return(
        <div>
            <h1> my car is {this.state.brand}</h1>
            <button onClick={this.changeBrand}>change brand</button>
        </div>
    )
}
}
export default MyComponent;