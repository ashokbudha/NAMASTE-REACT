import {LOGO_URL} from "../utils/constants";

const Header = () => (
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
           </ul>
       </nav>
    </div>
);

export default Header;

