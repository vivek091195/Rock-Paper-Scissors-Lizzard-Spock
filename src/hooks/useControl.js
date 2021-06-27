import { useState } from 'react';
import { CONTROL_OPTIONS_ENUM } from '../constants';

const WIN = 1;
const LOSE = -1;
const TIE = 0;
const LOCALSTORAGE_KEY = 'game_score';

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
    const { ROCK, PAPER, SCISSOR, SPOCK, LIZARD } = CONTROL_OPTIONS_ENUM;
    const resultDecidingObject = {
      [ROCK]: { defeats: [SCISSOR, LIZARD] },
      [PAPER]: { defeats: [ROCK, SPOCK] },
      [SCISSOR]: { defeats: [PAPER, LIZARD] },
      [LIZARD]: { defeats: [PAPER, SPOCK] },
      [SPOCK]: { defeats: [SCISSOR, ROCK] },
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

  return {
    userSelection,
    setUserSelection,
    houseSelection,
    setHouseSelection,
    resetClickHandler,
    winnerDecider,
    result,
    score,
  };
};

export { useControl };
