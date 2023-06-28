import React from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

// algorithm to seprate the list of restaurant that are searched.

function filterData(searchText, restaurants){
    const filterData = restaurants.filter((restaurant)=> restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
}

const Body = ()=>{
    
// const searchTxt = "KFC";

    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants , setFilteredRestaurants ] = useState([]);
    const [allRestaurants , setAllRestaurants] = useState([]);

    useEffect(()=>{
        getRestaurant();
    },[]);

    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }


    // early return
    if(!allRestaurants) return null;

    if(filteredRestaurants?.length ===0 ){
        return <h1>No restaurants matches your filter !!</h1>;
    }

    return (allRestaurants?.length === 0) ? (<Shimmer/>) :(
        <React.Fragment>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value={searchText} onChange ={(e)=>{
                setSearchText(e.target.value);
            }}/>
            
            <button className="search-btn" onClick={()=>{
                const data=filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
            }}>Search</button>
        </div>


        <div className="restaurant-list">
        {
            filteredRestaurants.map((restaurant)=>{
                return (<RestaurantCard {...restaurant.data} key={restaurant.data.id}/>);
            })
        }
        </div>
        </React.Fragment>
        );
}

export default Body;