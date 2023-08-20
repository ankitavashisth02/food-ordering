import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name , description , imageId , price}) =>{
    return(
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            <img src= { IMG_CDN_URL + imageId} />
            <h2 className="font-bold">Item : {name}</h2>
            <h2>Description : {description}</h2>
            <h2 className="font-bold">Amount : Rs {price}</h2>
        </div>
    );
}

export default FoodItem ; 