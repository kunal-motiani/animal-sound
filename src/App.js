import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  let [animal, setAnimal] = useState("Kingdom");
  let [alphabet, setAlphabet] = useState(``);
  let [incorrectCombination, setIncorrectCombination] = useState(false);

  useEffect(() => {
    let alphabetLower = alphabet.toLowerCase();
    let animalAlphabet = animal.charAt(0);
    if (animal === "Kingdom") {
      console.log("Do Nothing");
    } else {
      // console.log("Alphabet Value : " + alphabetLower);
      // console.log("animal.charAt(0) Value : " + animalAlphabet);
      // console.log(animal.charAt(0) === alphabet);
      if (alphabetLower === animalAlphabet) {
        console.log("Play Sound");
        setIncorrectCombination(false);
        let audio = new Audio(`./animals/audio/${animal}.mp3`);
        audio.play();
      } else {
        console.log("Play Effect");
        setIncorrectCombination(true);
        let audio = new Audio(`./animals/audio/buzzer.mp3`);
        audio.play();
      }
    }
  }, [animal, alphabet]);

  const imageClick = (image) => {
    console.log("Image clicked : " + image.target.alt);
    setAnimal(image.target.alt);
  };

  const alphabetClick = (alphabet) => {
    console.log("Alphabet clicked : " + alphabet.target.value);
    setAlphabet(alphabet.target.value);
  };

  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const images = [
    "buffalo",
    "cat",
    "dog",
    "elephant",
    "frog",
    "horse",
    "lion",
    "pig",
    "rat",
    "sheep",
    "tiger",
    "wolf",
    "yak",
    "zebra",
  ];
  return (
    <div className="App">
      <div className="container-alphabets">
        {alphabets.map((alphabet) => (
          <button
            key={alphabet}
            className="button"
            onClick={alphabetClick}
            value={alphabet}
          >
            {alphabet}
          </button>
        ))}
      </div>
      {incorrectCombination ? (
        <div
          /* className="square" */
          style={{
            gridColumn: "2",
            span: "2",
            fontSize: "350px",
            fontWeight: "normal",
            position: "absolute",
            zIndex: "2",
            top: "50px",
            left: "500px",
          }}
        >
          X
        </div>
      ) : null}

      <div style={{ gridColumn: "2", position: "realtive", zIndex: "1" }}>
        <button className="square">{alphabet}</button>
      </div>
      <div>
        <img
          title={animal}
          alt={animal}
          src={`./animals/images/${animal}.png`}
          style={{ cursor: "pointer" }}
        ></img>
      </div>
      <div className="container">
        {images.map((image) => (
          <div key={image}>
            <img
              title={image}
              alt={image}
              src={`./animals/images/${image}.png`}
              style={{ cursor: "pointer" }}
              onClick={imageClick}
            ></img>
            <div
              style={{
                fontSize: "15px",
                textAlign: "center",
                color: "black",
              }}
            >
              &nbsp;{image}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
