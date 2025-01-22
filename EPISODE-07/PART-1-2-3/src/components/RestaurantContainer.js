import {Link} from "react-router";

import RestaurantCard from "./RestaurantCard";



const RestaurantContainer = ({resList}) => {
    // const [resList,SetResList] = useState(resList);
    

    return(        
        <div className="res-container">
            
            {resList.map((item)=>{
                return(<Link key={item.info.id} to="restaurants/resid"><RestaurantCard  resData ={item}/></Link>)
            })}
            
        </div>
        
    )
};

export default RestaurantContainer;