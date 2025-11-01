import { FaLeaf } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const RestaurantInfo = ({ name, cuisines = [], avgRating, costForTwoString }) => {
  return (
    <div className="restaurant-info">
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <div className="restaurant-meta">
        {avgRating && (
          <p className="rating">
            <AiFillStar /> {avgRating}
          </p>
        )}
        <p>
          <FaLeaf /> {costForTwoString}
        </p>
      </div>
    </div>
  );
};

export default RestaurantInfo;
