import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

const RestaurantMenu = () =>{
    // const params = useParams();
    // const {id} = params;
    // OR

    const {id} = useParams();

    const [restaurant , setRestaurant] = useState({});

    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=254108&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data.cards[0].card.card.info);
    }
    
    return(
        <div>
        <h1>Restaurant id : {id}</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h2>{restaurant.areaName}</h2>
        <h2>{restaurant.avgRating} stars</h2>
        <h2>{restaurant.costForTwo}</h2>
        </div>
    );
}

export default RestaurantMenu ;