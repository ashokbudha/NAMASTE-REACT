import RestaurantCard from "./RestaurantCard";


const RestaurantContainer = ({resList}) => {
    // const [resList,SetResList] = useState(resList);

    return(        
        <div className="res-container">
            {resList.map((item)=>{
                return(<RestaurantCard key={item.info.id} resData ={item}/>)
            })}
            
        </div>
        
    )
};

export default RestaurantContainer;