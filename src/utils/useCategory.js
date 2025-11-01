import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FETCH_CATEGORY_URL } from "../constants";

const useCategory = (categoryId) => {
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get user's location from Redux store
  const userLocation = useSelector((store) => store.location.loc);

  useEffect(() => {
    const fetchData = async () => {
      if (!categoryId) {
        setError("Category ID is required");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // Use user's location or fallback to a default
        const location = userLocation || { lat: 22.718684, lng: 88.3530653 };

        const response = await fetch(
          `${FETCH_CATEGORY_URL}${categoryId}&lat=${location.lat}&lng=${location.lng}`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch category data. Status: ${response.status}`
          );
        }

        const json = await response.json();
        if (!json?.data?.cards) {
          throw new Error("Invalid response format from category API");
        }

        const resData = json.data.cards
          .map((card) => card?.card?.card?.info)
          .filter(Boolean);

        const categoryInfo = {
          title: json.data?.cards[0]?.card?.card?.title,
          description: json.data?.cards[0]?.card?.card?.description,
          filteredRestaurants: resData,
        };

        setCategoryData(categoryInfo);
      } catch (err) {
        console.error("Error fetching category data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId, userLocation]);

  return { categoryData, loading, error };
};

export default useCategory;