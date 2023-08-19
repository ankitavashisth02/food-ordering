import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = ()=>{
    const {user} = useContext(UserContext);

    return (
        <div className="border border-black p-2 m-2">
        <h1>footer</h1>
        <h1 className="font-bold">Build by {user.name} - {user.email}</h1>
        </div>
        );
}

export default Footer;