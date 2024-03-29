import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from './components/Footer';
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from  "./components/Cart";
//import Instamart from "./components/Instamart";

const Instamart = lazy(()=> import("./components/Instamart"));

const AppLayout = ()=>{

    const [user, setUser]= useState({
        name: "Ankita Sharma",
        email: "support@gmail.com",
    })

   

    return(
        <Provider store = {store}>
        <UserContext.Provider value={
            {
                user :  user,
            }
        } >
            <Header />
            <Outlet /> 
            <Footer />
        </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,
        errorElement : <Error />,
        children :[
            {
                path: "/",
                element : <Body/>
            },
            {
                path: "/about",
                element : <About/>,
                children :[
                    {
                    path: "profile",
                    element: <Profile/>
                    },
                ]
            },
            {
                path: "/contact",
                element : <Contact />
            },
            {
                path: "/restaurant/:id",
                element : <RestaurantMenu />
            },
            {
                path: "/instamart",
                element : (
                    <Suspense fallback={<Shimmer/>}>
                        <Instamart/>
                    </Suspense>
                    ),
            },
            {
                path : "/cart",
                element : <Cart/>
            }
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);