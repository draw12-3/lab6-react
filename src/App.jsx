import { useState } from "react";
import "./App.css";

import { stages } from "./constants/stages";
import { words } from "./constants/words";
import { letters } from "./constants/letters";

import Hangman from "./components/Hangman";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import GameStatus from "./components/GameStatus";
import RestartButton from "./components/RestartButton";

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export default function App() {
  const [selectedWord, setSelectedWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongCount, setWrongCount] = useState(0);

  const wordLetters = selectedWord.split("");

  const isWinner = wordLetters.every((letter) =>
    guessedLetters.includes(letter)
  );

  const isLoser = wrongCount >= stages.length - 1;

  const isGameOver = isWinner || isLoser;

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || isGameOver) return;

    setGuessedLetters((prev) => [...prev, letter]);

    if (!selectedWord.includes(letter)) {
      setWrongCount((prev) => prev + 1);
    }
  };

  const restartGame = () => {
    setSelectedWord(getRandomWord());
    setGuessedLetters([]);
    setWrongCount(0);
  };
  console.log(selectedWord)
  return (
    <div className="game">
      <Hangman image={stages[wrongCount]} />

      <WordDisplay
        word={selectedWord}
        guessedLetters={guessedLetters}
        isLoser={isLoser}
      />

      <Keyboard
        letters={letters}
        guessedLetters={guessedLetters}
        onGuess={handleGuess}
        isGameOver={isGameOver}
        word={selectedWord}
        isLoser={isLoser}
      />

      <GameStatus
        isWinner={isWinner}
        isLoser={isLoser}
        word={selectedWord}
      />

      <RestartButton onRestart={restartGame} />
    </div>
  );
}