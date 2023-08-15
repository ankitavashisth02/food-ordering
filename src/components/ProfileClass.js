import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Dummy Name",
            location : "Dummy Location",
        }
        console.log("child-constructor")
    }

    // async componentDidMount(){
        
    //     const data = await fetch(" https://api.github.com/users/ankitavashisth02");
    //     const json = await data.json();
    //     this.setState({
    //         userInfo :json,
    //     });

    //     console.log("child-component did mount")
    // }

    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("nameste react op");
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("component will unmount in this");
    }


    render(){
        console.log("child-render " + this.state.name);
        return (
            <div>
            <hr/>
            <h2>Profile class component</h2>
            <p>Name : {this.state.name}</p>
            </div>
            )
    }
}

export default Profile ;


/**
        <img src={this.state.userInfo?.avatar_url} />
        <p>Name : {this.state.userInfo?.name}</p>
        <p>Location : {this.state.userInfo?.location}</p>
 */