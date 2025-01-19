import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RestaurantContainer from "./components/RestaurantContainer";
import Footer from "./components/Footer"


const App = () => {
    return(
        <>
        <Header/>
        <SearchBar/>
        <RestaurantContainer/>
        <Footer/>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)