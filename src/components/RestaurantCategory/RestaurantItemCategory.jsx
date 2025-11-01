import RestaurantMenu from "../RestaurantMenu";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const RestaurantItemCategory = ({ itemCategory, restaurantInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const menuItems = itemCategory.itemCards;

  if (!menuItems || menuItems.length === 0) {
    return null;
  }
  
  return (
    <div className="item-category">
      <div className="item-category-header" onClick={toggleVisibility}>
        <p className="subheading-text">
          {itemCategory.title} ({menuItems.length})
        </p>
        {isVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {!isVisible && <div className="section-border"></div>}

      {isVisible && (
        <RestaurantMenu menuItems={menuItems} restaurantInfo={restaurantInfo} />
      )}
    </div>
  );
};
export default RestaurantItemCategory;
