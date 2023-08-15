import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantMenu = (id) =>{
    const [restaurantMenu , setRestaurantMenu ] = useState(null);

    // get data from api
    useEffect(()=>{
        getRestaurantMenu();
    },[])

    async function getRestaurantMenu(){
        const data = await fetch(FETCH_MENU_URL + id +"&submitAction=ENTER");
        const json = await data.json();

        setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    }

    // return restaurant menu data
    return restaurantMenu;
}

export default useRestaurantMenu;