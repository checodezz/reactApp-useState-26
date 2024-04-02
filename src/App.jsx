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

export default function App() {
  return (
    <main>
      <TravelDestination />
    </main>
  );
}
