# Food Ordering React Application

## About

A food ordering app built with React, using Swiggy's public API to display restaurants based on user location. Users can browse menus, select food items, and simulate placing an order.

This project has been reviewed and refactored for correctness, stability, and feature completion.

## Features

- **Dynamic Location**: The app automatically fetches the user's location via the browser's Geolocation API.
- **Location Search**: Users can search for any location in India using an autocomplete search bar to see restaurants in that area.
- **Restaurant Discovery**: Navigate through various restaurant cards available at the selected location.
- **Detailed Restaurant Menus**:
  - View restaurant name, address, cuisine, and ratings.
  - See indicators for "Pure Veg" restaurants.
  - Menu items are organized into collapsible categories.
  - Clear labels for Veg/Non-Veg and "Bestseller" items.
- **Interactive Cart**:
  - Add items to the cart directly from the menu.
  - Increase or decrease the quantity of items on both the menu and cart pages.
  - The cart only allows items from a **single restaurant at a time**. Adding an item from a new restaurant will clear the cart.
  - Cart state is **persisted** in `localStorage`, so it's not lost on page refresh.
- **Simulated Checkout Flow**:
  - A checkout page where users can select a delivery address and payment method.
  - An order summary page to confirm the simulated order.
- **Error Handling & Loading States**:
  - Shimmer loading effects provide a better user experience while data is being fetched.
  - Clear error messages are displayed for network issues or when a location is unserviceable.

## Getting Started

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm start
    ```

## Future Improvements

- **Authentication**: Implement a full user authentication system to manage user profiles, addresses, and order history.
- **Live Order Tracking**: Integrate a mock or live order tracking feature.
- **Confirmation Modals**: Add a confirmation modal when clearing the cart to add items from a new restaurant.
- **Enhanced Testing**: Expand the test suite with more comprehensive unit and integration tests.