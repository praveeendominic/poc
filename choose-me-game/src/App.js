// import React, { useState } from "react";
import React, { useState, useEffect } from "react"; // Added useEffect here

import Confetti from "react-dom-confetti";
import "./styles.css"; // Make sure the path matches

const bibleCharacters = [
  { name: "Moses", img: "/images/moses.jpg" },
  { name: "David", img: "/images/david.jpg" },
  { name: "Abraham", img: "/images/abraham.jpg" },
  { name: "Joseph", img: "/images/joseph.jpg" },
  { name: "Paul", img: "/images/paul.jpg" },
  { name: "Peter", img: "/images/peter.jpg" },
  { name: "nova", img: "/images/nova.jpg" },
  { name: "Samuel", img: "/images/samuel.jpg" },
  { name: "Elijah", img: "/images/elijah.jpg" },
  { name: "Isaiah", img: "/images/isaiah.jpg" },
];

function CharacterCard({ character, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(character)}>
      <img src={character.img} alt={character.name} />
      <h3>{character.name}</h3>
    </div>
  );
}

function WinnerScreen({ winner }) {
  return (
    <div className="winner">
      <h2>Winner!</h2>
      <img src={winner.img} alt={winner.name} />
      <h3>{winner.name}</h3>
    </div>
  );
}

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(
    bibleCharacters[0]
  );

  useEffect(() => {
    // Only increment currentIndex when the next character is available
    if (currentIndex >= bibleCharacters.length) return;
  }, [currentIndex]);

  const handleSelect = (character) => {
    // Update selected character and current index safely
    if (currentIndex < bibleCharacters.length) {
      setSelectedCharacter(character);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  if (currentIndex >= bibleCharacters.length) {
    return <WinnerScreen winner={selectedCharacter} />;
  }

  const nextCharacter = bibleCharacters[currentIndex];

  return (
    <div className="container">
      <h2>Pick Your Favorite</h2>
      <div className="cards">
        <CharacterCard character={selectedCharacter} onSelect={handleSelect} />
        <CharacterCard character={nextCharacter} onSelect={handleSelect} />
      </div>
    </div>
  );
}
