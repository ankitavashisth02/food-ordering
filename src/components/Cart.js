import Shimmer from "./Shimmer.js";
import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    const handleRemoveItem = ()=>{
        dispatch(removeItem());
    }

    return(!cartItems)? <Shimmer/> : (
        <div>

            <h1 className="text-center font-bold text-xl">Cart Items - {cartItems.length}</h1>

            <button className="bg-green-100 p-2 m-2" onClick={()=>{
                handleClearCart();
            }}>Clear Cart</button>

            <button className="bg-green-100 p-2 m-2" onClick={()=>{
                handleRemoveItem();
            }}>Remove Last Item</button>

            <div className="flex">
                {
                    cartItems.map(item => <FoodItem key={item?.card?.info?.id} { ...item?.card?.info }/> )
                }
            </div>
        </div>
    )
}

export default Cart;