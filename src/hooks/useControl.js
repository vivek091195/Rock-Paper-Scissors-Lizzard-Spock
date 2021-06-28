import { useState } from 'react';
import { CONTROL_OPTIONS_ENUM } from '../constants';

const WIN = 1;
const LOSE = -1;
const TIE = 0;
const LOCALSTORAGE_KEY = 'game_score';
const TOTAL_OPTIONS = 5;

const useControl = () => {
  const [userSelection, setUserSelection] = useState(null);
  const [houseSelection, setHouseSelection] = useState(null);
  const [result, setResult] = useState(TIE);
  const [score, setScore] = useState(
    parseInt(localStorage.getItem(LOCALSTORAGE_KEY), 10) || 0
  );

  const resetClickHandler = () => {
    setUserSelection(null);
    setHouseSelection(null);
    setResult(TIE);
  };

  const winnerDecider = (userOption, houseOption) => {
    const option1 = userOption.toLowerCase();
    const option2 = houseOption.toLowerCase();
    if (option1 === option2) {
      setResult(0);
      return;
    }
    const resultDecidingObject = {
      rock: { defeats: ['scissor', 'lizard'] },
      paper: { defeats: ['rock', 'spock'] },
      scissor: { defeats: ['paper', 'lizard'] },
      lizard: { defeats: ['paper', 'spock'] },
      spock: { defeats: ['scissor', 'rock'] },
    };
    const picker = resultDecidingObject[option1];
    if (picker.defeats.includes(option2)) {
      setResult(WIN);
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        localStorage.setItem(LOCALSTORAGE_KEY, newScore);
        return newScore;
      });
    } else {
      setResult(LOSE);
      setScore((prevScore) => {
        const newScore = prevScore - 1;
        localStorage.setItem(LOCALSTORAGE_KEY, newScore);
        return newScore;
      });
    }
  };

  const onOptionClickHandler = (e, optionPanel) => {
    setUserSelection(optionPanel);
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * TOTAL_OPTIONS);
      const optionsArray = Object.keys(CONTROL_OPTIONS_ENUM);
      const option = optionsArray[randomNumber];
      const optionDetail = CONTROL_OPTIONS_ENUM[option];
      setHouseSelection(optionDetail);
      winnerDecider(optionPanel.label, optionDetail.label);
    }, 1000);
  };

  return {
    userSelection,
    setUserSelection,
    houseSelection,
    setHouseSelection,
    resetClickHandler,
    winnerDecider,
    onOptionClickHandler,
    result,
    score,
  };
};

export { useControl };
