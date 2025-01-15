// Forming the nested element as below :
//  <div id = "parent">
//      <div id = "child1">
//          <h1> </h1>
//          <h2> </h2>
//      </div>
//      <div id = "child2">
//          <h1> </h1>
//          <h2> </h2>
//      </div>
//  </div>


const heading_1 = React.createElement("h1",{}, "Heading 1");
const heading_2 = React.createElement("h2", {}, "Heading 2");
const child1 = React.createElement("div", {id:"child1"},[heading_1, heading_2]);
const child2 = React.createElement("div", {id:"child2"},[heading_1, heading_2]);
const parent = React.createElement("div",{id:"parent"},[child1, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
