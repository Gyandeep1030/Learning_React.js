
import { useState } from "react";
import HOC from "./HOC";

const  S1 = (prop) => {
    console.log(prop.Count);
    let [Count , setCount] = useState(prop.Count);

    return ( 
    <center>
        <h1> First Counter -- {Count}</h1>
        <br/>
        <button onClick={() =>setCount(Count+1)}>Increse by 1</button>
        <button onClick={() =>setCount(prop.Count)}>Reset</button>
        <button onClick={() =>setCount(Count-1)}>Decrement by 1</button>

    </center> );
}

export default  HOC(S1);