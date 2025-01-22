const Shimmer = () =>{
    return(
        <div className="shimmer-container">
            <div className="shimmer-buttons">
                <div className="input-container">
                    <input type="text" placeholder="Search a restaurant or food..." className="shimmer-input" />
                    <button className="shimmer-search-btn btn">Search</button>
                    <button className="shimmer-refresh-btn btn">Refresh</button>
                </div>
                <button className="shimmer-filter-btn btn">Filter Best Restaurants</button>
            </div>
            <div className="shimmer-items">
                <div className="shimmer-item"></div>
                <div className="shimmer-item"></div>
                <div className="shimmer-item"></div>
                <div className="shimmer-item"></div>
                <div className="shimmer-item"></div>
                <div className="shimmer-item"></div>
                <div className="shimmer-item"></div>
                <div className="shimmer-item"></div>
                <div className="shimmer-item"></div>
                <div className="shimmer-item"></div>
                <div className="shimmer-item"></div>
                <div className="shimmer-item"></div>
            </div>
        </div>
    )
}

export default Shimmer;