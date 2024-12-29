import { useState, useEffect } from "react";
import useBreedList from "../hooks/useBreedList";
import Button from 'react-bootstrap/Button';
import Results from "./Results";
import { apiUrl } from "../config/apiUrl";
const ANIMALS = ["Select an Option", "bird", "cat", "dog", "rabbit", "reptile"];
// const apiUrl = import.meta.env.VITE_API_URL;
function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breeds, status] = useBreedList(animal)
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetchPets();
  }, []);
  console.log(apiUrl)
  async function fetchPets() {
    const response = await fetch(`${apiUrl}/pets?animal=${animal}&location=${location}&breed=${breed}`);
    const data = await response.json();
    setPets(data.pets);
    console.log(data);
  }

  const handleChange = (e) => {
    console.log("e", e);
    setLocation(e.target.value);
  };
  const handleAnimalChange = (e) => {
    console.log("e", e);
    let value = e.target.value;
    setAnimal(value);
  };
  return (
    <div className="search-params">
      <form onSubmit={(e) => {
        console.log('e running')
        e.preventDefault();
        fetchPets();
      }}>
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
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={handleAnimalChange}
            onBlur={handleAnimalChange}
          >
            {ANIMALS.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
            {/* <option value="bird">Bird</option>
            <option value="cat">Cat</option> */}
          </select>
          <label htmlFor="breed">
            {
              status === "loading" ? "Loading..." : "Breed"
            }
            <select
              disabled={!breeds.length}
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              onBlur={(e) => setBreed(e.target.value)}
            >
              {breeds.map((breed, index) => (
                <option key={index} value={breed}>
                  {breed}
                </option>
              ))}
              {/* <option value="german">German</option> */}
            </select>
          </label>
        </label>
        {/* <button type="submit">Submit </button> */}
        <Button variant="danger" className="px-3">Danger</Button>
      </form>
      <Results pets={pets} />
    </div>
  );
}

export default SearchParams;
