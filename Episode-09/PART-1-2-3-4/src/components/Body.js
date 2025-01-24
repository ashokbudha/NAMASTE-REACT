import RestaurantContainer from "./RestaurantContainer";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";

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
    
    const resInfo = useBody();

    useEffect(()=>{
        SetListOfAllRestaurants(resInfo);
        SetListOfFilteredRestaurants(resInfo);
    },[resInfo]);
    
    const onlineStatus  = useOnlineStatus();

    if(onlineStatus === false){
        return(<h2> You are offline. Try connecting after connecting to internet.</h2>);
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