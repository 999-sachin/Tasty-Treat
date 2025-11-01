import { IMG_CDN_URL } from "../constants";
import { memo } from "react";

const getRatingType = (rating) => {
  if (!rating) return "";
  if (rating >= 4.0) return "green";
  if (rating > 3.0) return "yellow";
  return "red";
};

const RestaurantCard = ({
  id,
  name,
  cuisines = [],
  cloudinaryImageId,
  sla = {},
  avgRating,
  costForTwo = "NA",
  locality = "",
  aggregatedDiscountInfoV3,
}) => {
  const ratingType = getRatingType(avgRating);
  
  return (
    <div className="card">
      <div className="res-img">
        <img 
          src={IMG_CDN_URL + cloudinaryImageId} 
          alt={name}
          loading="lazy"
          width="100%"
          height="200"
        />
        {aggregatedDiscountInfoV3?.header && (
          <span className="img-discount-info">
            {aggregatedDiscountInfoV3.header}
            {aggregatedDiscountInfoV3.subHeader && (
              ` ${aggregatedDiscountInfoV3.subHeader.replace("₹", "")}`
            )}
          </span>
        )}
      </div>
      <div className="res-name">
        <h5 className="resName">{name}</h5>
        <div className="resName__details">
          <p>{cuisines.join(", ")}</p>
          {avgRating && (
            <p className={"ratings " + ratingType}>
              <i className="fa fa-star"></i>
              {avgRating}
            </p>
          )}
        </div>
        <p>{locality}</p>
      </div>
      <div className="res-info">
        <p>{sla.deliveryTime} mins</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
