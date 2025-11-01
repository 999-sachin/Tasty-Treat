import RestaurantItemCategory from "../RestaurantCategory/RestaurantItemCategory";

const RestaurantNestedItemCategory = ({ nestedCategory, restaurantInfo }) => {
  return (
    <>
      <h2 className="nested-category-title">{nestedCategory.title}</h2>
      {nestedCategory.categories.map((category, index) => (
        <div className="nested-item-categories" key={index}>
          <RestaurantItemCategory itemCategory={category} restaurantInfo={restaurantInfo} />
        </div>
      ))}
    </>
  );
};

export default RestaurantNestedItemCategory;
