import { LOGO_URL } from "../utils/constant";
import {useState} from "react";
import {Link} from "react-router";

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
            <Link to="/">
               <li>Home</li>
            </Link>
            <Link to="/about">
               <li>About</li>
            </Link>
            <Link to="/services">
               <li>Services</li>
            </Link>
            <Link to = "/cart">
               <li>Cart</li>
            </Link>
            <Link to = "/contact">
               <li>Contact</li>
            </Link>
            <Link to="/login" >
               <li onClick={handleClick}>{loginText}</li>
            </Link>
           </ul>
       </nav>
    </div>
    )
};

export default Header;

