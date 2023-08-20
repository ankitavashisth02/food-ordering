import {IMG_CDN_URL} from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = ({cloudinaryImageId, name, cuisines, lastMileTravelString}) =>{
    const { user } = useContext(UserContext);

    return(
        <div className="w-56 p-3 m-3 shadow-lg bg-pink-50">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h2>{lastMileTravelString}</h2>
            <h5 className="text-purple-300">{user.email}</h5>
        </div>
    );
}

export default RestaurantCard;