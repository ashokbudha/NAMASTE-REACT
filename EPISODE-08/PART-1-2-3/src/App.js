import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./components/Container";
import Counter from "./components/Counter";


class App extends React.Component{
    conponent(props){
        super(props);
    }

    render(){
        return(
            <>
            <h1>This is the app Component.</h1>
            <Container name="Ashok Budha"/>
            <Counter/>
            </>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);