// src/mocks/mockRestaurantMenu.js

// Import a local image that we know exists in our project
import placeholderImage from '../assets/img/image.png';

const mockMenu = {
  info: {
    name: "Mock Restaurant - The Royal Indian",
    cuisines: ["North Indian", "Mughlai", "Biryani"],
    avgRating: 4.2,
    costForTwoMessage: "₹400 for two",
  },
  menu: [
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      title: "Recommended Mock Dishes",
      itemCards: [
        {
          id: "101",
          name: "Mock Paneer Butter Masala",
          description: "Creamy paneer in a rich tomato gravy. A classic favorite.",
          price: 25000,
          // CHANGED: Using a local image import instead of an ID
          image: placeholderImage,
        },
        {
          id: "102",
          name: "Mock Dal Makhani",
          description: "Slow-cooked black lentils with butter and cream.",
          price: 22000,
          image: placeholderImage,
        },
        {
          id: "103",
          name: "Mock Garlic Naan",
          description: "Soft Indian bread with garlic and butter.",
          price: 5000,
          image: placeholderImage,
        },
      ],
    },
    {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      title: "Mock Main Course",
      itemCards: [
        {
          id: "201",
          name: "Mock Chicken Biryani",
          description: "Flavorful long-grain rice cooked with chicken and spices.",
          price: 35000,
          image: placeholderImage,
        },
        {
          id: "202",
          name: "Mock Mutton Rogan Josh",
          description: "Aromatic mutton curry from Kashmir.",
          price: 45000,
          image: placeholderImage,
        },
      ],
    },
  ],
};

export default mockMenu;