import { useEffect } from "react";

const Restaurant = () =>{

    useEffect(()=>{
        getData();
    },[])

    async function getData(){
        // const res = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=506324");
        // const json = await res.json();
        // console.log(json);
    }
    return(<h1>This is restaurant.</h1>)
}
export default Restaurant;