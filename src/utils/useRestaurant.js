import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FETCH_RESTAURANTS_URL } from "../constants";

const getUserLocation = () => {
  return new Promise((resolve) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ lat: latitude, lng: longitude });
        },
        () => {
          // Fallback to default location if permission is denied
          resolve({ lat: 22.718684, lng: 88.3530653 });
        }
      );
    } else {
      // Fallback if geolocation is not available
      resolve({ lat: 22.718684, lng: 88.3530653 });
    }
  });
};

const useRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [categoryMenu, setCategoryMenu] = useState([]);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userLocation = useSelector((store) => store.location.loc);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let location = userLocation;
        if (!location) {
          location = await getUserLocation();
        }

        const response = await fetch(
          `${FETCH_RESTAURANTS_URL}lat=${location.lat}&lng=${location.lng}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const json = await response.json();

        if (json?.data?.cards[0]?.card?.card?.title === "Location Unserviceable") {
          throw new Error("Location is unserviceable.");
        }

        const resData = checkJsonData(json);
        if (!resData) {
          throw new Error("Could not find restaurant data in the API response.");
        }
        
        const addr = json?.data?.cards[2]?.card?.card?.header?.title?.replace("chains", "");
        setAddress(addr);
        setCategoryMenu(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
        );
        setAllRestaurants(resData);
        setFilteredRestaurants(resData);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch restaurants:", err);
      } finally {
        setLoading(false);
      }
    };

    const checkJsonData = (jsonData) => {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        let checkData =
          jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        if (checkData) {
          return checkData;
        }
      }
      return null;
    };

    fetchData();
  }, [userLocation]);

  return { allRestaurants, filteredRestaurants, categoryMenu, address, error, loading, setFilteredRestaurants };
};

export default useRestaurant;