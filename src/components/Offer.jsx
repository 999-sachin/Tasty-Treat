import React, { useState, useEffect } from "react";
import { ShimmerCards } from "./Shimmer";
import useOnline from "../utils/useOnline";
import ServiceUnreachable from "./ServiceUnreachable";
import { IMG_CDN_URL } from "../constants";
import OffersCard from "./OffersCard";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

// Use an existing image from the project's assets so Vite can resolve the import.
import offersBanner from "../assets/img/image.png";

const Offers = () => {
    const { allRestaurants, loading, error } = useRestaurant();
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        if (allRestaurants.length > 0) {
            const offersData = allRestaurants
                .map(res => res.info)
                .filter(info => info.aggregatedDiscountInfoV3?.header);

            const uniqueOffers = offersData.reduce((acc, current) => {
                if (!acc.find(item => item.id === current.id)) {
                    acc.push(current);
                }
                return acc;
            }, []);
            setOffers(uniqueOffers);
        }
    }, [allRestaurants]);

    const isOnline = useOnline();

    if (!isOnline) {
        return (
            <div className="container">
                <h2>There is a problem with your internet connection. Please try again.</h2>
            </div>
        );
    }

    if (error) {
        return <ServiceUnreachable message={error} />;
    }

    return loading ? (
        <ShimmerCards />
    ) : (
        <>
            <div className="offer-container">
                <div className="offers-wrapper">
                    <div className="offers">
                        <div className="left">
                            <div className="top">Offers for you</div>
                            <div className="bottom">
                                Explore top deals and offers exclusively for you!
                            </div>
                        </div>
                        <img
                            src={offersBanner}
                            alt="offers"
                        />
                    </div>
                </div>
                <div className="restaurant-lists">
                    {offers.map((offer) => (
                        <div className="res-card" key={offer.id}>
                            <Link to={"/restaurant/" + offer.id}>
                                <OffersCard
                                    id={offer.id}
                                    name={offer.name}
                                    cloudinaryImageId={offer.cloudinaryImageId}
                                    locality={offer.locality}
                                    areaName={offer.areaName}
                                    header={offer.aggregatedDiscountInfoV3?.header}
                                    subHeader={offer.aggregatedDiscountInfoV3?.subHeader}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Offers;
