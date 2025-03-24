import { Component } from "react";
import PureChild from "./PureChild";
import RegularChild from "./RegularChild";

class PureParent extends Component{
    constructor(props){
        super(props)
        this.state = {Counter : 0}
    }

    render(){
        console.log("I am Parent")
        return(
        <center>
            <h1> I am Parent Class </h1>
            <h2>Counter : {this.state.Counter}</h2>
            <button onClick = {() => this.setState({Counter : this.state.Counter + 1})}>Increment</button>

            <PureChild/>
            <RegularChild/>
        
        </center>)
    }
}

export default PureParent;