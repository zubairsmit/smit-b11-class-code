import { useState } from "react";

function SearchParams() {
  const [location, setLocation] = useState("ABC");

  //   let location = "Seattle, WA";

  const handleChange = (e) => {
    console.log("e", e);
    setLocation();
  };
  console.log("location", location);
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={handleChange}
            value={location}
            type="text"
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
