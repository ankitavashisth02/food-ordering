// import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";

const Profile=(props)=>{
    const [ count, setCount ] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("nameste react")
        },1000)
        console.log("useeffect");

        return()=>{
            clearInterval(timer);
            console.log("useeffect return");
        }

    },[]);

    console.log("render");
    
    return(
        <div>
        <hr/>
            <h2>Imported functional Profile</h2>
            <p>Name : {props.name}</p>
            <p>Count : {count}</p>
            <button onClick={()=>{
                setCount(1);
            }} >Count</button>
        </div>
    )
}

export default Profile;