import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ onSearch }) {
  const [city, setCity] = useState("");

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearch(city); // Call the parent function with the city name
    setCity(""); // Clear the input
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: "8px" }} // Add spacing
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
