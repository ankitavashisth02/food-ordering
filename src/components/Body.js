import React from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

// algorithm to seprate the list of restaurant that are searched.

// function filterData(searchText, restaurants){
//     const filterData = restaurants.filter((restaurant)=> restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
//     return filterData;
// }

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
        //console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // const isOnline = useOnline();

    // if(!isOnline){
    //     return <h1>🔴Offline , please check your internet connection.</h1>
    // }


    //not render component (early return)
    //if(!allRestaurants) return null;

    return (allRestaurants?.length === 0) ? (<Shimmer/>) :(
        <React.Fragment>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" value={searchText} onChange ={(e)=>{
                setSearchText(e.target.value);
            }}/>
            
            <button className="search-btn" onClick={()=>{
                //need to filter the data
                const data = filterData(searchText, allRestaurants);
                //update the state- restaurant
                setFilteredRestaurants(data);
            }}>Search</button>
        </div>


        <div className="restaurant-list">
        {
            filteredRestaurants.map((restaurant)=>{
                return (
                   <Link to={"/restaurant/"+ restaurant.info.id } key={restaurant.info.id}>
                    <RestaurantCard {...restaurant.info} />
                   </Link>
                    );
            })
        }
        </div>
        </React.Fragment>
        );
}

export default Body;