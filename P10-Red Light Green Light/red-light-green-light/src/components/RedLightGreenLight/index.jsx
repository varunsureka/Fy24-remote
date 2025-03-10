import React, { useState, useEffect, useRef } from "react";

const RedLightGreenLight = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [boxColor, setBoxColor] = useState("red");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [message, setMessage] = useState("");
  const timerRef = useRef(null);
  const gameDuration = 15000; // 15 seconds

  useEffect(() => {
    if (gameStarted) {
      const endGameTimeout = setTimeout(() => {
        setGameStarted(false);
        setMessage("Game Over!");
      }, gameDuration);

      return () => clearTimeout(endGameTimeout);
    }
  }, [gameStarted]);

  useEffect(() => {
    if (gameStarted) {
      const changeColor = () => {
        const newColor = Math.random() > 0.5 ? "green" : "red";
        setBoxColor(newColor);
        const randomTime = Math.random() * 1000 + 1000; // between 1s and 2s
        timerRef.current = setTimeout(changeColor, randomTime);
      };

      changeColor();

      return () => clearTimeout(timerRef.current);
    }
  }, [gameStarted]);

  const handleBoxClick = () => {
    if (boxColor === "red") {
      setGameStarted(false);
      setMessage("Game Over!");
    } else if (boxColor === "green") {
      const newScore = score + 1;
      if (newScore >= 5) {
        setGameStarted(false);
        setMessage("You Win!");
      }
      setScore(newScore);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setShowScore(true);
    setScore(0);
    setMessage("");
  };

  return (
    <div className="game-container">
      <h1>Red Light Green Light</h1>
      {!gameStarted ? (
        <button className="start-button" onClick={startGame}>
          Start Game
        </button>
      ) : (
        <div
          className="color-box"
          onClick={handleBoxClick}
          style={{ backgroundColor: boxColor }}
        ></div>
      )}
      {showScore && <p className="score">Score: {score}</p>}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default RedLightGreenLight;
