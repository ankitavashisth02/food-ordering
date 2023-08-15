import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestuarant = (id) => {
    const [ restaurant , setRestaurant ] = useState(null);

    // get data from api
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data = await fetch(FETCH_MENU_URL + id + "&submitAction=ENTER");
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    }

    // return restaurant info data
    return restaurant;
};


export default useRestuarant;