import {IMG_CDN_URL} from "../constants";

const RestaurantCard = ({cloudinaryImageId, name, cuisines, lastMileTravelString}) =>{
    return(
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h2>{lastMileTravelString}</h2>
        </div>
    );
}

export default RestaurantCard;