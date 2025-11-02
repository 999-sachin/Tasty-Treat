import { useState } from "react";
import { Link } from "react-router-dom";
import { address } from "../constants";
import { BiHomeHeart } from "react-icons/bi";
import { HiOfficeBuilding } from "react-icons/hi";
import { BsFillCreditCardFill, BsQuestionCircleFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";

// Helper function to get the correct icon based on address type
const getAddressIcon = (addressType) => {
  switch (addressType) {
    case "Home":
      return <BiHomeHeart size="1.5rem" />;
    case "Office":
      return <HiOfficeBuilding size="1.5rem" />;
    default:
      return <BsQuestionCircleFill size="1.5rem" />; // A fallback icon for "Others"
  }
};

const Checkout = () => {
  const [userAddress, setUserAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="container checkout">
      <p className="heading-text">Checkout</p>
      <div className="address-container">
        <p className="subheading-text">Select your address</p>
        <div className="all-address">
          {address.map((addr) => (
            <div
              key={addr.id} // Use stable ID for key
              className={
                userAddress?.id === addr.id
                  ? "address checkout-selected"
                  : "address"
              }
              onClick={() => setUserAddress(addr)}
            >
              <p>{getAddressIcon(addr.AddressType)}</p>
              <p>{addr.Name}</p>
              <p>{addr.Mobile}</p>
              <p>{addr.Address}</p>
            </div>
          ))}
        </div>
        {userAddress && (
          <div className="payment mtop20">
            <p className="subheading-text">Choose Payment Method</p>
            <div className="payment-method">
              <button
                className={
                  paymentMethod === "COD"
                    ? "payment-option checkout-selected"
                    : "payment-option"
                }
                onClick={() => setPaymentMethod("COD")}
              >
                <FaHandsHelping color="green" /> COD
              </button>
              <button
                className={
                  paymentMethod === "Credit Card"
                    ? "payment-option checkout-selected"
                    : "payment-option"
                }
                onClick={() => setPaymentMethod("Credit Card")}
              >
                <BsFillCreditCardFill color="green" /> Credit Cards
              </button>
            </div>
          </div>
        )}
      </div>
      {userAddress && paymentMethod && (
        <Link to="/order-summary" className="place-order mtop20">
          Place Order
        </Link>
      )}
    </div>
  );
};

export default Checkout;