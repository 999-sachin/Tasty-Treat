import RestaurantNestedItemCategory from "./RestaurantCategory/RestaurantNestedItemCategory";
import RestaurantItemCategory from "./RestaurantCategory/RestaurantItemCategory";
import CartNavigation from "./CartNavigation";
import { useSelector } from "react-redux";

const RestaurantCategory = ({ menu, restaurantInfo }) => {
  const cartCount = useSelector((store) => store.cart.totalItemsCount);
  
  return (
    <div className="menu">
      {menu.map((item, index) => (
        <div className="menu-category" key={index}>
          {item.categories ? (
            <RestaurantNestedItemCategory nestedCategory={item} restaurantInfo={restaurantInfo} />
          ) : (
            <RestaurantItemCategory itemCategory={item} restaurantInfo={restaurantInfo} />
          )}
        </div>
      ))}
      {cartCount > 0 && <CartNavigation />}
    </div>
  );
};

export default RestaurantCategory;
