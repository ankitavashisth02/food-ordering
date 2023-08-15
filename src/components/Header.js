import { useState } from "react";
import logo from "../assets/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedInUser = ()=>{
    // API call to check authentication
    return false;
}


const Title=() => {
    return(
        <a href="/">
    <img className="h-28 p-2" alt="logo" src={logo} />
    </a>
);
}

const Header = ()=>{

    const [ isLoggedIn , setIsLoggedIn] = useState(false);


    const isOnline = useOnline();


    return (

        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
        <Title/>
        <div className="nav-items">
        <ul className="flex py-10">
        <Link to="/"><li className="px-2">Home</li></Link>
        <Link to="/about"><li className="px-2">About</li></Link>
        <Link to="/contact"><li className="px-2">Contact</li></Link>
        <Link to="/instamart"><li className="px-2">Instamart</li></Link>
        <li className="px-2">Cart</li>
        </ul>
        </div>
        <h1>{isOnline ? "🟢" : "🔴"}</h1>

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