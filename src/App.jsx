import { useState } from "react";
import "./App.css";

const TravelDestination = () => {
  const [currentContinent, setCurrentContinent] = useState("");
  const [destinationList, setDestinationList] = useState(false);
  const [currentDestination, setCurrentDestination] = useState("");
  const [results, setResults] = useState(false);

  const questions = {
    question: "Select Your Preferred Continent:",
    options: {
      Asia: ["Japan", "Thailand", "India"],
      Europe: ["France", "Italy", "Spain"],
      "North America": ["USA", "Canada", "Mexico"],
    },
  };

  const handleContinentChange = () => {
    const value = event.target.value;
    setCurrentContinent(value);
    console.log(currentContinent);
    // setDestinationList(true);
    setDestinationList(value !== "");
  };

  const handleDestinationChange = () => {
    setCurrentDestination(event.target.value);
    // console.log(currentDestination)
  };

  const handleSubmitButton = () => {
    setResults(true);
    setDestinationList(!destinationList);
    // setDestinationList(false);
  };

  return (
    <div>
      <h1>Travel Destination App</h1>
      {!results && (
        <>
          <label>{questions.question}</label>
          <select onChange={handleContinentChange}>
            <option value="">--Select Continent--</option>
            {Object.keys(questions.options).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </>
      )}
      <br />
      <br />

      {destinationList && (
        <div>
          <label>Select Your Preferred Destination:</label>
          <br />
          {questions.options[currentContinent].map((place) => (
            <label key={place}>
              <input
                type="radio"
                value={place}
                onChange={handleDestinationChange}
                name="country"
              />
              {place}
              <br />
            </label>
          ))}
        </div>
      )}
      <br />
      {!results && <button onClick={handleSubmitButton}>Submit</button>}

      {results && (
        <div>
          <h3>Thank you for sharing your preferences!</h3>
          <p>Preffered Continent: {currentContinent}</p>
          <p>Preffered Destination: {currentDestination}</p>
        </div>
      )}
    </div>
  );
};

const MusicPreference = () => {
  const [currentSelectedGenre, setCurrentSelectedGenre] = useState("");
  const [currentSubGenre, setCurrentSubGenre] = useState("");
  const [results, setResults] = useState(false);

  const questions = {
    question: "Which type of music do you prefer?",
    options: {
      Rock: ["Classic Rock", "Alternative Rock", "Indie Rock"],
      Pop: ["Pop Rock", "Synth-pop", "Electropop"],
      "Hip Hop": ["East Coast Hip Hop", "West Coast Hip Hop", "Trap Music"],
    },
  };

  const handleGenreChangeEvent = () => {
    const value = event.target.value;
    setCurrentSelectedGenre(value);
    console.log(currentSelectedGenre);
  };

  const handleSubGenreChange = () => {
    const value = event.target.value;
    setCurrentSubGenre(value);
    console.log(currentSubGenre);
  };

  const handleButtonClick = () => {
    setResults(true);
  };

  return (
    <div>
      <h1>Music Preference App</h1>
      {!results && (
        <>
          <label>{questions.question}:</label>
          <select onChange={handleGenreChangeEvent}>
            <option value="">--Select Genre--</option>
            {Object.keys(questions.options).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <br />
          <br />
          {currentSelectedGenre && (
            <div>
              <label>Select your Preferred Subgenre:</label>
              <br />
              {questions.options[currentSelectedGenre].map((genre) => (
                <label key={genre}>
                  <input
                    type="radio"
                    value={genre}
                    name="subGenre"
                    onChange={handleSubGenreChange}
                  />
                  {genre}
                  <br />
                </label>
              ))}
            </div>
          )}
          <button onClick={handleButtonClick}>Submit</button>
        </>
      )}
      {results && (
        <div>
          <h3>Thank you for Sharing your preferences!</h3>
          <p>Selected Genre: {currentSelectedGenre}</p>
          <p>Selected Sub Genre: {currentSubGenre}</p>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <main>
      <TravelDestination />
      <MusicPreference />
    </main>
  );
}
