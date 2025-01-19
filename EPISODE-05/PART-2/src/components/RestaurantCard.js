import {IMAGE_URL} from "../utils/constants";

export const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, deliveryTime, costForTwo, cloudinaryImageId, cuisines, avgRating} = resData?.data;

    return(
        <div className="res-card">
            <img src={IMAGE_URL} alt="" />
            {/* <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +cloudinaryImageId}alt="" /> */}
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}


export default RestaurantCard;
