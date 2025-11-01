import { useParams } from "react-router-dom";
import { ShimmerLines } from "./Shimmer";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantInfo from "./RestaurantInfo";
import ServiceUnreachable from "./ServiceUnreachable"; // Import the component

const RestaurantDetails = () => {
  const { resId } = useParams();
  const { restaurantDetails, loading, error } = useRestaurantDetails(resId);

  if (error) return <ServiceUnreachable message={error} />;

  return loading || !restaurantDetails ? (
    <ShimmerLines />
  ) : (
    <div className="container">
      <RestaurantInfo {...restaurantDetails.info} />
      <RestaurantCategory menu={restaurantDetails.menu} restaurantInfo={restaurantDetails.info} />
    </div>
  );
};

export default RestaurantDetails;
