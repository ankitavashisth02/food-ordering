import { useState } from "react";
import logo from "../assets/foodvilla.png";
import { Link } from "react-router-dom";

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
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
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