import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestuarant from "../utils/useRestaurant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    
    // const params = useParams();
    // const {id} = params;
    

    // const [restaurant , setRestaurant] = useState(null);
    //const [restaurantMenu , setRestaurantMenu] = useState(null);

    const { id } = useParams();

    const restaurant = useRestuarant(id);
    const restaurantMenu = useRestaurantMenu(id);

    // useEffect(()=>{
    //     getRestaurantInfo();
    // },[])

    // async function getRestaurantInfo(){
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId="+ id +"&submitAction=ENTER");
    //     const json = await data.json();
    //     setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    // }

    // useEffect(()=>{
    //     getRestaurantMenu();
    // },[])

    // async function getRestaurantMenu(){
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId="+ id +"&submitAction=ENTER");
    //     const json = await data.json();

    //     setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    // }
    
    return (!restaurant) ? <Shimmer/> :(
        <div className="menu">

            <div>
                <h1>About Restaurant :- </h1>
                <h3>Restaurant Id = {id}</h3>
                <img src={IMG_CDN_URL+ restaurant.cloudinaryImageId}/>
                <h3>{restaurant.name}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.areaName}</h3>
                <h3>{restaurant.cuisines.join(",")}</h3>
            </div>

            <div>
                <h1>Menu :</h1>
                <br/>
                <h2>{restaurantMenu?.title}</h2>
                <ul>
                {
                    (restaurantMenu?.itemCards).map((r)=>{
                        return <li>{r?.card?.info?.name}</li>
                    })
                }
                </ul>
            </div>

        </div>

        // <h4>{restaurantMenu?.itemCards[0]?.card?.info?.name}</h4>
        // <h4>{restaurantMenu?.itemCards[1]?.card?.info?.name}</h4>
        // <h4>{restaurantMenu?.itemCards[2]?.card?.info?.name}</h4>
        // <h4>{restaurantMenu?.itemCards[3]?.card?.info?.name}</h4>
        // <h4>{restaurantMenu?.itemCards[4]?.card?.info?.name}</h4>
        // <h4>{restaurantMenu?.itemCards[5]?.card?.info?.name}</h4>

    );
}

export default RestaurantMenu ;