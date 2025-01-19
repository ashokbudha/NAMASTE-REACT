import RestaurantContainer from "./RestaurantContainer";
import {useState} from "react";

import resList from "../utils/mockData";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
    return filterData;
}


const Body = () =>{
    const [listOfRestaurants, SetListOfRestaurants] = useState(resList);
    const [SearchText,  SetSearchText] = useState("");

    return(
        <div className="body">
            <div className="searchbar">
                <input type="search" name="search" id="search-box"  placeholder="Search a resturant or food...." value = {SearchText} onChange={(e)=>{SetSearchText(e.target.value)}}/>
                <button className="search-btn" onClick={()=>{
                    const data = filterData(SearchText, listOfRestaurants);
                    SetListOfRestaurants(data);
                    SetSearchText("");
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={()=>{
               const filteredList = listOfRestaurants.filter((res)=> res.data.avgRating>4);
                SetListOfRestaurants(filteredList);
            }}
            >Filter Best Restaurants</button>
            <RestaurantContainer resList={listOfRestaurants}/>
        </div>
    )
}

export default Body;