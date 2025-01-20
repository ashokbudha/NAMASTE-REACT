import RestaurantContainer from "./RestaurantContainer";
import {useState, useEffect} from "react";
import { SWIGGY_API } from "../utils/constant";
import Shimmer from "./Shimmer";

// add search funcitonality
// add refersh funcitonality
// add shimmer ui 
// make login logout button

const filterData = (searchText, listOfAllRestaurants)=>{
    const filterData = listOfAllRestaurants.filter((item)=>{
        console.log(item.info.name.toLowerCase());
       return item.info.name.toLowerCase().includes(searchText.toLowerCase());
    })
    console.log(filterData);
    return filterData;
}

const Body = () =>{
    const [listOfAllRestaurants, SetListOfAllRestaurants] = useState([]);
    const [listOfFilteredRestaurants, SetListOfFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(()=>{
        getData();
    }, [])

    async function getData() {
        try {
            const res = await fetch(SWIGGY_API);
            const my_json = await res.json();

            const restaurants = my_json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;

            SetListOfAllRestaurants(restaurants);
            SetListOfFilteredRestaurants(restaurants);

        }catch(err){
            console.error("ERROR: " , err);
        }
    }

    if(listOfAllRestaurants.length == 0){
        return <Shimmer />
    }


    return(
        
        <div className="body">
            <div className="searchbar">
                <input type="search" name="search" id="search-box"  placeholder="Search a resturant or food...." value = {searchText}  onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button className="search-btn" onClick={()=>{
                    const data = filterData(searchText,listOfAllRestaurants);
                    SetListOfFilteredRestaurants(data);
                    setSearchText("");
                    }}
                >Search</button>
                <button className="refresh-btn" onClick={()=>{
                    SetListOfFilteredRestaurants(listOfAllRestaurants);
                }}>Refresh</button>

            </div>
            <button className="filter-btn" onClick={()=>{
               const filteredList = listOfAllRestaurants.filter((res)=> res?.info?.avgRating>4);
               console.log("This is working");
                SetListOfFilteredRestaurants(filteredList);
            }}
            >Filter Best Restaurants</button>
            <RestaurantContainer resList={listOfFilteredRestaurants}/>
        </div>
    )
}

export default Body;