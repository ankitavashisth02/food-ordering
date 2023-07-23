import { Component } from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";


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
            <h1>about us page</h1>
            <p>this is nameste react live course.</p>
            
            <ProfileFunctionalComponent name={"Functional Child"}/>
            </div>
        );
    }
}

export default About;