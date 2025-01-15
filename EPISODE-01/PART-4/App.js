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

const parent = React.createElement("div", {id:"parent"},
    [React.createElement("div",{id: "child1"},
        [React.createElement("h1",{}, "This is H1 form class1"),
            React.createElement("h2", {}, "This is H2 form child1")
        ]
    ),
        React.createElement("div", {id: "child2"},
            [React.createElement('h1', {}, "This is H1 form child2"),
                React.createElement("h2", {}, "This is H2 form child2")
            ]
        )
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);