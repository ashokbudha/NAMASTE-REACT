import RestaurantContainer from "./RestaurantContainer";
import {useState} from "react";

import resList from "../utils/mockData";

const Body = () =>{
    const [listOfRestaurants, SetListOfRestaurants] = useState(resList);
    return(
        <div className="body">
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