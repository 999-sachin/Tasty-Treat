// src/mocks/mockRestaurantMenu.js

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
          // CORRECTED: Using valid image IDs
          cloudinaryImageId: "iivuhjc2mswi9l9ascr1",
        },
        {
          id: "102",
          name: "Mock Dal Makhani",
          description: "Slow-cooked black lentils with butter and cream.",
          price: 22000,
          cloudinaryImageId: "d4026211c2157144e311f53ef788a5c4",
        },
        {
          id: "103",
          name: "Mock Garlic Naan",
          description: "Soft Indian bread with garlic and butter.",
          price: 5000,
          cloudinaryImageId: "s6f85pdyal0a2s3xtjmc",
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
          cloudinaryImageId: "ld1u2ose4xanjbfalm2k",
        },
        {
          id: "202",
          name: "Mock Mutton Rogan Josh",
          description: "Aromatic mutton curry from Kashmir.",
          price: 45000,
          cloudinaryImageId: "zggqzcgj4bcsd0agv49r",
        },
      ],
    },
  ],
};

export default mockMenu;