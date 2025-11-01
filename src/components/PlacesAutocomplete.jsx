import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { useDispatch } from "react-redux";
import { addLocation } from "../utils/locationSlice";

const PlacesAutocomplete = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "in" }, // Restrict to India
    },
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    setValue(description, false);
    clearSuggestions();

    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then((location) => {
        dispatch(addLocation(location));
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)} className="suggestion-item">
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref} className="places-autocomplete">
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Enter your location..."
        className="location-input"
      />
      {status === "OK" && <ul className="suggestions-list">{renderSuggestions()}</ul>}
    </div>
  );
};

export default PlacesAutocomplete;
