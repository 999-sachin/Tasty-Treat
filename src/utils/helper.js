/**
 * Filters restaurants based on search text
 * @param {string} searchText - The search query
 * @param {Array} restaurants - Array of restaurant objects
 * @returns {Array} Filtered array of restaurants
 */
export function filterData(searchText, restaurants) {
  if (!Array.isArray(restaurants)) {
    console.error('Invalid restaurants data provided');
    return [];
  }

  if (!searchText || typeof searchText !== 'string') {
    return restaurants;
  }

  const searchTerms = searchText.toLowerCase().trim().split(/\s+/);

  return restaurants.filter((restaurant) => {
    const restaurantName = restaurant?.info?.name?.toLowerCase() || '';
    const cuisines = restaurant?.info?.cuisines || [];
    
    // Search in restaurant name
    const nameMatch = searchTerms.some(term => 
      restaurantName.includes(term)
    );

    // Search in cuisines
    const cuisineMatch = cuisines.some(cuisine =>
      searchTerms.some(term => 
        cuisine.toLowerCase().includes(term)
      )
    );

    return nameMatch || cuisineMatch;
  });
}
