import { IMG_CDN_URL } from "../constants";
import ItemQuantity from "./ItemQuantity";
import { FaRegStopCircle, FaRegCaretSquareUp } from "react-icons/fa";

const RestaurantMenu = ({ menuItems = [], restaurantInfo }) => {
  return (
    <div className="restaurant-menu">
      {menuItems.map((menuItem, index) => {
        // NEW LOGIC:
        // Determine the image source. If it has a cloudinaryImageId, use the Swiggy CDN.
        // Otherwise, use the local 'image' property from our mock data.
        const imageUrl = menuItem.cloudinaryImageId
          ? IMG_CDN_URL + menuItem.cloudinaryImageId
          : menuItem.image;

        return (
          <div className="menu-item" key={index}>
            <div className="menu-item-left">
              <h4>{menuItem.name}</h4>
              <p>{menuItem.description}</p>
              <ItemQuantity item={menuItem} restaurantInfo={restaurantInfo} />
            </div>
            <div className="menu-item-right">
              {/* Use the imageUrl we determined above */}
              {imageUrl && <img src={imageUrl} alt={menuItem.name} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;