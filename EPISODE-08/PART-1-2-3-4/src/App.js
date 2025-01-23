import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./components/Container";
import Counter from "./components/Counter";


class App extends React.Component{
    constructor(props){
        super(props);
        // console.log("inside parent constructor");
    }
    componentDidMount(){
        // console.log("inside parent componentDidMount");
    }

    render(){
        // console.log("inside parent render");
        return(
            <>
            <h1>This is the app Component.</h1>
            <Container name="Ram "/>
            <Counter/>
            </>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);