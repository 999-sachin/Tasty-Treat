import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FETCH_MENU_URL } from "../constants";

const useRestaurantDetails = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userLocation = useSelector((store) => store.location.loc);

  useEffect(() => {
    if (!resId) return;

    const getRestaurantDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const location = userLocation || { lat: 25.5940947, lng: 85.1375645 }; // Fallback location

        const response = await fetch(
          `${FETCH_MENU_URL}${resId}&lat=${location.lat}&lng=${location.lng}`
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch restaurant details. Status: ${response.status}`
          );
        }
        const json = await response.json();

        const restaurantInfo = json.data?.cards[0]?.card?.card?.info;
        if (!restaurantInfo) {
          throw new Error("Restaurant info data structure is invalid");
        }

        const menuItemsList =
          json.data?.cards[2]?.["groupedCard"]?.cardGroupMap?.REGULAR?.cards;
        if (!menuItemsList) {
          throw new Error("Menu items data structure is invalid");
        }

        const itemCategory =
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const NestedItemCategory =
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

        const menu = menuItemsList
          .map((item) => {
            const card = item?.card?.card;
            if (
              card &&
              (card["@type"] === itemCategory ||
                card["@type"] === NestedItemCategory)
            ) {
              // Safely map over itemCards and extract the info object
              const processedItemCards =
                card.itemCards
                  ?.map((dish) => dish.card?.info)
                  .filter(Boolean) ?? [];

              return { ...card, itemCards: processedItemCards };
            }
            return undefined;
          })
          .filter(Boolean);

        setRestaurant({
          info: restaurantInfo,
          menu: menu,
        });
      } catch (err) {
        setError(err.message);
        console.error("Error fetching restaurant details:", err);
      } finally {
        setLoading(false);
      }
    };

    getRestaurantDetails();
  }, [resId, userLocation]);

  return { restaurantDetails: restaurant, loading, error };
};

export default useRestaurantDetails;