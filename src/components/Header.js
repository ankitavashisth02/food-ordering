import { useState } from "react";
import logo from "../assets/foodvilla.png";

const loggedInUser = ()=>{
    // API call to check authentication
    return false;
}


const Title=() => {
    return(
        <a href="/">
    <img className="logo" alt="logo" src={logo} />
    </a>
);
}

const Header = ()=>{

    const [ isLoggedIn , setIsLoggedIn] = useState(false);


    return (

        <div className="header">
        <Title/>
        <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        </ul>
        </div>
        {
            // we can run any js expression, but cannot write statements;
            (isLoggedIn) ? (<button onClick={()=>{
                setIsLoggedIn(false);
            }}>Logout</button>) : (<button onClick={()=>{
                setIsLoggedIn(true);
            }}>Login</button>)
}
        
        </div>
        );
}

export default Header;