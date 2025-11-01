import { useMemo } from "react";
import { getCartTotal } from "../utils/totalPrice";
import ItemQuantity from "./ItemQuantity";

const formatPrice = (price) => {
  if (!price) return "₹0";
  return `₹${(price / 100).toFixed(2)}`;
};

const CartItems = ({ cartItems = {} }) => {
  const totalAmount = useMemo(() => getCartTotal(cartItems), [cartItems]);
  const items = Object.values(cartItems);

  if (items.length === 0) {
    return (
      <div className="cart-items-container cart-items-empty">
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-items-container">
      {items.map((item) => (
        <div key={item.id} className="cart-items-item">
          <p className="cart-item-name">{item.name}</p>
          <ItemQuantity item={item} />
          <div className="cart-item-actions">
            <p className="cart-item-price">
              {formatPrice(item.price || item.defaultPrice)}
            </p>
          </div>
        </div>
      ))}
      <div className="total-bill">
        <h3 className="subheading-text">Total Bill</h3>
        <h3 className="heading-text">{formatPrice(totalAmount * 100)}</h3>
      </div>
    </div>
  );
};

export default CartItems;
