import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  let [animal, setAnimal] = useState("Kingdom");
  let [alphabet, setAlphabet] = useState(``);
  let [incorrectCombination, setIncorrectCombination] = useState(false);

  const soundPlay = async (path) => {
    let audio = new Audio(path);
    try {
      await audio.play();
    } catch (err) {
      alert(
        "Sorry Cannot play audio. Either your network doesn't support it or you are not using modern browser."
      );
    }
  };

  const actions = () => {
    if (!alphabet || animal === "Kingdom") {
      if (incorrectCombination) {
        setIncorrectCombination(false);
      }
      console.log("Do Nothing");
    } else {
      let alphabetLower = alphabet.toLowerCase();
      let animalAlphabet = animal.charAt(0);
      if (alphabetLower === animalAlphabet) {
        console.log("Play Sound");
        setIncorrectCombination(false);
        soundPlay(
          `./animals/audio/${animal}.mp3`,
          setTimeout(() => {
            console.log("Reset state is called");
            setAlphabet("");
            setAnimal("Kingdom");
          }, 3000)
        );
      } else {
        console.log("Play Effect");
        setIncorrectCombination(true);
        soundPlay(
          `./animals/audio/buzzer.mp3`,
          setTimeout(() => {
            console.log("Reset state is called");
            setAnimal("Kingdom");
          }, 1000)
        );
      }
    }
  };

  useEffect(actions, [animal, alphabet]);

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
            className="alphabets"
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
            gridColumnStart: "2",
            span: "2",
            fontSize: "25rem",
            fontWeight: "normal",
            position: "absolute",
            zIndex: "2",
            left: "35vw",
          }}
        >
          X
        </div>
      ) : null}

      <div style={{ gridColumn: "2", position: "realtive", zIndex: "1" }}>
        <button className="square">{alphabet}</button>
      </div>

      <img
        title={animal}
        alt={animal}
        src={`./animals/images/${animal}.png`}
        style={{ cursor: "pointer", width: "20vw" }}
      ></img>

      <div className="container-images">
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
                fontSize: "1rem",
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
