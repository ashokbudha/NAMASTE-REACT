import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer"
import Body from "./components/Body"


const App = () => {
    return(
        <>
        <Header/>
        <SearchBar/>
        <Body/>
        <Footer/>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)