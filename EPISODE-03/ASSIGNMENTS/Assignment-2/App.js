import React from "react";
import ReactDOM from "react-dom/client";


const Logo = () => (
   <img id="logo" src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Blue_Logo_Design_1_1024x1024.png?v=1677204650" alt="logo" />
);

const SearchBar = () => (
    <input type="search" id ="searchBar" placeholder="Serch.."></input>
);

const UserIcon = () =>(
    <img id="user-icon" src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" alt="user icon" />
);

const Header = () => (
    <div id="header">
        <Logo />
        <SearchBar></SearchBar>
        {UserIcon()}
    </div>
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);