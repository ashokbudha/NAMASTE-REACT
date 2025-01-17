import React from "react";
import ReactDOM from "react-dom/client";


// using React.createElement

// const title = React.createElement("div", {class:"title"},[React.createElement("h1",{},"This is title 1"), React.createElement("h2", {}, "This is title 2"), React.createElement("h3",{},"This is title 3")]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(title);

// using jsx and react components and elements
const heading1 = <h1>Title 1</h1>
const heading2 = <h2>Title 2</h2>
const heading3 = <h3>Title 3</h3>

const Heading1 = () => (
    {heading1}
);

const Heading2 = () => (
    {heading2}
);

const Heading3 = () => (
    {heading3}
);

const idName = "title"
const HeadingContainer = () => (
    <div id={idName}>
        <Heading1 />
        <Heading2></Heading2>
        {Heading3()}
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingContainer />)