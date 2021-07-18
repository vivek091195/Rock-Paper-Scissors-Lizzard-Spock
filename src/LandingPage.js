import React from 'react';
import { GameWrapper, RulesPanel } from './LandingPage.style';
import { ScorePanel } from './ScorePanel';
import { GamePanel } from './GamePanel';
import { ResultPanel } from './ResultPanel';
import { useControl } from './hooks/useControl';

const LandingPage = () => {
  const {
    userSelection,
    houseSelection,
    resetClickHandler,
    onOptionClickHandler,
    result,
    score,
  } = useControl();
  return (
    <GameWrapper>
      <ScorePanel score={score} />
      {!userSelection ? (
        <GamePanel onOptionClickHandler={onOptionClickHandler} />
      ) : (
        <ResultPanel
          UserPickedOption={userSelection}
          HousePickedOption={houseSelection}
          resetClickHandler={resetClickHandler}
          result={result}
        />
      )}
      <RulesPanel>Rules</RulesPanel>
    </GameWrapper>
  );
};

export default LandingPage;
