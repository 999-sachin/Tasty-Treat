export const getCartTotal = (cartItems) => {
  if (!cartItems || typeof cartItems !== 'object') {
    return 0;
  }

  return Object.values(cartItems).reduce((total, item) => {
    if (!item || typeof item.quantity !== 'number') {
      return total;
    }

    const price = item.price ?? item.defaultPrice ?? 0;
    return total + (item.quantity * price);
  }, 0) / 100;
};
