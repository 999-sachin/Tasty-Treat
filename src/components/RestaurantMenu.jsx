
import { IMG_CDN_URL } from "../constants";
import ItemQuantity from "./ItemQuantity";
import { FaRegStopCircle, FaRegCaretSquareUp } from "react-icons/fa";

const RestaurantMenu = ({ menuItems = [], restaurantInfo }) => {
  return (
    <div className="restaurant-menu">
      {menuItems.map((menuItem) => (
        <div className="menu-item" key={menuItem.id}>
          <div className="menu-item-left">
            <h4>{menuItem.name}</h4>
            <p>{menuItem.description}</p>
            {/* Pass restaurantInfo to ItemQuantity */}
            <ItemQuantity item={menuItem} restaurantInfo={restaurantInfo} />
          </div>
          <div className="menu-item-right">
            {menuItem.cloudinaryImageId && (
              <img
                src={IMG_CDN_URL + menuItem.cloudinaryImageId}
                alt={menuItem.name}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;