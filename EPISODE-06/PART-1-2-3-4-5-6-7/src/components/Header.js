import { LOGO_URL } from "../utils/constant";
import {useState} from "react";

const Header = () => {
    const [loginText, SetLoginText] = useState("Login");

    const handleClick = () =>{
        if(loginText == "Login"){
            SetLoginText("Logout");
        }
        else{
            SetLoginText("Login");
        }
    }

    return(
        <div className="header">
       <div className="logo">
           <img src={LOGO_URL} alt="logo" />
       </div>
       <nav className="navbar">
           <ul>
               <li>Home</li>
               <li>About</li>
               <li>Services</li>
               <li>Cart</li>
               <li>Contact</li>
               <li onClick={handleClick}>{loginText}</li>
           </ul>
       </nav>
    </div>
    )
};

export default Header;

