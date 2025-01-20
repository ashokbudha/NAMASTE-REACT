import RestaurantContainer from "./RestaurantContainer";
import {useState, useEffect} from "react";

import resList from "../utils/mockData";


const Body = () =>{
    const [listOfRestaurants, SetListOfRestaurants] = useState([]);
    // const [SearchText,  SetSearchText] = useState("");

    useEffect(() => {    
      getData();
    }, [])

    async function getData() {
        try{
            const res = await fetch( "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            const json = await res.json();
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;
            console.log(restaurants);
            SetListOfRestaurants(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    

    return(
        <div className="body">
            <div className="searchbar">
                <input type="search" name="search" id="search-box"  placeholder="Search a resturant or food...." />
                <button className="search-btn">Search</button>
            </div>
            <button className="filter-btn">Filter Best Restaurants</button>
            <RestaurantContainer resList={listOfRestaurants}/>
        </div>
    )
}

export default Body;