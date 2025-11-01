import notFoundImg from "../assets/img/image.png";

const NotFound = (props) => {
  const { setSearchText, setFilteredRestaurants, allRestaurants } = props;
  return (
    <div className="not-found">
      <button className="search-btn" onClick={() => {
        setSearchText("");
        setFilteredRestaurants(allRestaurants);
      }}>
        Go Back
      </button>
      <img src={notFoundImg} alt="Not Found" className="image" />

      <p className="error-text">Oops! Nothing Found here</p>

    </div>
  );
};

export default NotFound;
