import { Component } from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import UserContext from "../utils/UserContext.js";


class About extends Component{
    constructor(props){
        super(props);
        
        console.log("parent-constructor");
    }

    componentDidMount(){
        // best place to call an API call

        console.log("parent-About component did mount");
    }

    render(){
        console.log("parent-render");
        return(
            <div>
            <hr/>
            <h1 className="text-center font-extrabold text-2xl">About us page</h1>

            <UserContext.Consumer>
                { ({user})=> <h4>Name : {user.name} <br/> Email : {user.email}</h4>
            }
            </UserContext.Consumer>

                <div>
                    {<Outlet/>}
                </div>
                <br/><br/>
            </div>
        );
    }
}

export default About;