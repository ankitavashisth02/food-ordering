import {IMG_CDN_URL} from "../constants";

const RestaurantCard = ({cloudinaryImageId, name, cuisines, lastMileTravelString}) =>{
    return(
        <div className="w-56 p-3 m-3 shadow-lg bg-pink-50">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h2>{lastMileTravelString}</h2>
        </div>
    );
}

export default RestaurantCard;