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
            <h1>About us page</h1>
            <p>This is nameste react live course.</p>
                <div>
                    {<Outlet/>}
                </div>
            </div>
        );
    }
}

export default About;