import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const RestaurantContainer = () => {
    return(
        <div className="res-container">
           
            {resList.map((item)=>{
                return(<RestaurantCard key={item.data.id} resData ={item}/>)
            })}
            
        </div>
    )
};

export default RestaurantContainer;