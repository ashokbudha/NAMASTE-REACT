import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constant";

const useBody = () =>{
    const [resInfo, setResInfo] = useState([]);
    useEffect(()=>{
        getData();
    }, [])

    async function getData() {
        try {
            const res = await fetch(SWIGGY_API);
            const my_json = await res.json();

            const restaurants = my_json?.data?.cards?.find((item) =>item?.card?.card?.id?.includes("restaurant_grid"))?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(restaurants);
            setResInfo(restaurants);
        }catch(err){
            console.error("ERROR: " , err);
        }
    }


    return(resInfo);
}


export default  useBody;