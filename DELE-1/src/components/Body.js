import RestaurantContainer from "./RestaurantContainer";
import {useState,useEffect} from "react";

import resList from "../utils/mockData";

const handleClick = (searchText, listOfRestaurants) =>{
    // const filteredRes = listOfRestaurants?.data.include(searchText);
    const filteredRes = listOfRestaurants.filter((res) => {
        return res.info.name.includes(searchText);
    })
    return filteredRes;
}

const Body = () =>{
    const [listOfRestaurants, SetListOfRestaurants] = useState([]);
    const [listOfFilteredRestaurants, SetListOfFilteredRestaurants] = useState([]);
    const [btnText, SetBtnText] = useState("Filter Best Restaurants");
    const [searchText, SetSearchText] = useState("");


    // if(listOfRestaurants.length === 0){
    //     return <h1>loading....</h1>
    // }
    // console.log(listOfFilteredRestaurants)
    useEffect(() => {
        console.log("Updated listOfRestaurants:", listOfRestaurants);
    }, [listOfRestaurants]);
    
    useEffect(()=>{
        getRestaurants()
    }, []);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        const myjson = await data.json();
        // Optional Chaining
        // SetListOfRestaurants(json?.data?.cards?.card[5]?.card);
        
        // console.log(json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("Api Response", myjson);
        const restaurants = myjson?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        SetListOfRestaurants(restaurants);
        SetListOfFilteredRestaurants(restaurants);
        // console.log(listOfRestaurants);
        console.log("All",listOfRestaurants);
        console.log("fileterd",listOfFilteredRestaurants);
    }

    

    
    return(

        <div className="body">
            <div className="searchbar">
                <input type="search" name="search" id="search-box"  placeholder="Search a resturant or food...." value={searchText} onChange = {(e)=> SetSearchText(e.target.value)}/>
                <button className="search-btn" onClick={()=>{
                    const data =handleClick(searchText, listOfRestaurants)
                    SetListOfFilteredRestaurants(data);
                    SetSearchText("");
                    }}>
                Search</button>
                <button className="refresh" onClick = {()=>{
                    SetListOfFilteredRestaurants(listOfRestaurants);
                }}>Refresh</button>

            </div>
            <button className="filter-btn" onClick={()=>{
                if(btnText === "Filter Best Restaurants"){

                    const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating>4);
                    SetListOfFilteredRestaurants(filteredList);
                    SetBtnText("Show All Restaurants");
                }else{
                    SetListOfFilteredRestaurants(listOfRestaurants);
                    SetBtnText("Filter Best Restaurants");
                }
            }}
            >{btnText}</button>
            <RestaurantContainer resList={listOfFilteredRestaurants}/>
        </div>
    )
}

export default Body;