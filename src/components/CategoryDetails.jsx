import { useParams, Link } from "react-router-dom";
import useCategory from "../utils/useCategory";
import RestaurantCard from "./RestaurantCard";
import { ShimmerCards } from "./Shimmer";
import ServiceUnreachable from "./ServiceUnreachable";

const CategoryDetails = () => {
  const { categoryId } = useParams();
  const { categoryData, loading, error } = useCategory(categoryId);

  if (error) {
    return <ServiceUnreachable message={error} />;
  }

  return loading || !categoryData ? (
    <ShimmerCards />
  ) : (
    <div className="container">
      <p className="breadcrumbs">
        <Link to={"/"} key="home">
          Home /
        </Link>{" "}
        {categoryData.title}
      </p>
      <h1 className="main-content-text">{categoryData.title}</h1>
      <p className="main-content-subtext">{categoryData.description}</p>
      <div className="restaurant-lists">
        {categoryData.filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.id}
            key={restaurant.id}
            className="restaurant-card-link"
          >
            <RestaurantCard {...restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
