import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer"
import Body from "./components/Body"
import About from "./components/About";
import Error from "./components/Error";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Restaurant from "./components/Restaurant";




const App = () => {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/services",
                element: <Services />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/cart",
                element: <Cart/>
            },
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/restaurants/resid",
                element:<Restaurant/>
            }
        ]
    }
    
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);