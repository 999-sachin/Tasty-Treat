import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import CategoryMenu from "./CategoryMenu";
import { ShimmerCards } from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import NotFound from "./NotFound";
import ServiceUnreachable from "./ServiceUnreachable";
import useRestaurant from "../utils/useRestaurant";
import PlacesAutocomplete from "./PlacesAutocomplete";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {
    allRestaurants,
    filteredRestaurants,
    categoryMenu,
    address,
    error,
    loading,
    setFilteredRestaurants,
  } = useRestaurant();

  const handleSearchChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    const data = filterData(newSearchText, allRestaurants);
    setFilteredRestaurants(data);
  };
  
  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <div className="container">
        <h2>There is a problem with your internet connection. Please try again.</h2>
      </div>
    );
  }

  if (error) {
    return <ServiceUnreachable message={error} />;
  }

  return (
    <>
      <div className="search-container">
        <PlacesAutocomplete />
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      {loading ? (
        <ShimmerCards />
      ) : (
        <>
          {filteredRestaurants.length === 0 ? (
            <NotFound
              setSearchText={setSearchText}
              setFilteredRestaurants={setFilteredRestaurants}
              allRestaurants={allRestaurants}
            />
          ) : (
            <>
              {categoryMenu && <CategoryMenu categoryMenu={categoryMenu} />}
              <h1 className="main-content-text">{address || "Restaurants near you"}</h1>
              <div className="restaurant-lists">
                {filteredRestaurants.map((restaurant) => (
                  <Link
                    to={"/restaurant/" + restaurant.info.id}
                    key={restaurant.info.id}
                    className="restaurant-card-link"
                  >
                    <RestaurantCard {...restaurant.info} />
                  </Link>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Body;
