import RestaurantCard from "./RestaurantCard";


const RestaurantContainer = ({resList}) => {
    // const [resList,SetResList] = useState(resList);
    // console.log(resList);
    // if (!resList || resList.length === 0) {
    //     return <h2>No restaurants found or loading...</h2>;
    // }
    
    return(        
        <div className="res-container">
            {resList.map((item)=>{
                return(<RestaurantCard key={item.info.id} resData ={item}/>)
            })}
            
        </div>
        
    )
};

export default RestaurantContainer;