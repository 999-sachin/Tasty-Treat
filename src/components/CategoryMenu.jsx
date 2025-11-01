import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategoryMenu = ({ categoryMenu }) => {
  let CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

  // Ref for controlling the slider
  const sliderRef = useRef(null);

  const getCollectionId = (entityId = "") => {
    if (!entityId.includes("collection_id=")) return null;
    try {
      const url = new URL(entityId, "http://dummybase.com");
      return url.searchParams.get("collection_id");
    } catch (e) {
      console.error("Could not parse collection_id from entityId:", entityId);
      return null;
    }
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  // Slick slider settings
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="category">
      <div className="category-header">
        <h1 className="main-content-text">What's on your mind?</h1>

        <div className="category-controls">
          <button className="control-button" onClick={goToPrev}>
            <FaChevronLeft />
          </button>
          <button className="control-button" onClick={goToNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <Slider {...sliderSettings} className="category-menu" ref={sliderRef}>
        {categoryMenu !== undefined &&
          categoryMenu.map((item) => {
            const collectionId = getCollectionId(item?.entityId);
            if (!collectionId) return null;
            return (
              <Link
                to={"/restaurant/category/" + collectionId}
                key={item.id}
              >
                <div className="category_menu_item">
                  <img src={CDN_URL + item.imageId} alt={item.name} />
                </div>
              </Link>
            );
          })}
      </Slider>
    </div>
  );
};

export default CategoryMenu;