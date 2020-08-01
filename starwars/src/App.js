import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CharacterCard from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        console.log(response);
        const characterList = response.data.results;
        console.log("Response DATA", characterList);
        setCharacter(characterList);
      })
      .catch((error) => {
        console.log("The data was not returned.", error);
      });
  }, []);

  return (
    <>
      <div className="App">
        <h1 className="Header">What a bunch of Characters</h1>
      </div>
      <div className="cardHolder">
        {character.map((who) => {
          return (
            <CharacterCard
              key={who.url}
              name={who.name}
              eyecolor={who.eye_color}
              gender={who.gender}
              haircolor={who.hair_color}
              height={who.height}
              mass={who.mass}
              skincolor={who.skin_color}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
