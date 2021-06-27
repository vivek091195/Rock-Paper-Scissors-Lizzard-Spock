import React from 'react';
import {
  GameWrapper,
  TopWrapper,
  RulesPanel,
  LeftPanel,
  MiddlePanel,
  RightPanel,
} from './LandingPage.style';
import { ScorePanel } from './ScorePanel';
import { InitialGameWindow } from './InitialGameWindow';
import { PlayGameWindow } from './PlayGameWindow';
import { useControl } from './hooks/useControl';

const LandingPage = () => {
  const {
    userSelection,
    setUserSelection,
    houseSelection,
    setHouseSelection,
    resetClickHandler,
    winnerDecider,
    result,
    score,
  } = useControl();
  return (
    <GameWrapper>
      <LeftPanel></LeftPanel>
      <MiddlePanel>
        <TopWrapper>
          <ScorePanel score={score} />
        </TopWrapper>
        {!userSelection ? (
          <InitialGameWindow
            setUserSelection={setUserSelection}
            setHouseSelection={setHouseSelection}
            winnerDecider={winnerDecider}
          />
        ) : (
          <PlayGameWindow
            UserPickedOptionComponent={userSelection}
            HousePickedOptionComponent={houseSelection}
            resetClickHandler={resetClickHandler}
            result={result}
          />
        )}
      </MiddlePanel>
      <RightPanel>
        <RulesPanel>Rules</RulesPanel>
      </RightPanel>
    </GameWrapper>
  );
};

export default LandingPage;
