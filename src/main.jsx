import React from "react";
import ReactDOM from "react-dom/client";
import MyApp from "./MyApp"
import "./index.css";


console.log(React); // This is responsible for all react inbuilts functinns
console.log(ReactDOM); // This is responsible of rendering the react content into DOM.

//? To create React Root:
// Syntax: ReactDOM.createRoot( container Node )
let root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

//? To render content into the container
// syntax: reactRoot.render( content )
// render method will allow 1. strings ,  2. JSX Elements , 3. Components

root.render("Hello World!!!"); // string
root.render(<h1>Gyandeep Kumar</h1>); // jsx element


root.render(<MyApp></MyApp>); // Component
root.render(<MyApp />); // Component
