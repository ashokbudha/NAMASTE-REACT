import React from "react";
import ReactDOM from "react-dom/client";

const headingText ="Namaste React by Akshay Saini."
//React Component
const Heading = () => (
    <h1>{headingText}</h1>
);

// this is also called component composition => putting react component inside another react component.
const HeadingContainer = () => (
    <div id = "container">
        
        <Heading/>  
        <h2>This is a sub-heading.</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// This is how we can render multiple components in the same container.
root.render(<HeadingContainer/>);