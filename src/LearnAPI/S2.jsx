import { useState } from "react";
import HOC from "./HOC";

const S2 = (prop) => {
    let [Count , setCount] = useState(0);

    return ( 
        <center>
        <h1> Second Counter -- {Count}</h1>
        <br/>
        <button onClick={() =>setCount(Count+1)}>Increse by 1</button>
        <button onClick={() =>setCount(prop.Count)}>Reset</button>
        <button onClick={() =>setCount(Count-1)}>Decrement by 1</button>

    </center> );
}

export default HOC(S2);