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
  const { showInitialScreen, setShowInitialScreen, onOptionClickHandler } =
    useControl();
  return (
    <GameWrapper>
      <LeftPanel></LeftPanel>
      <MiddlePanel>
        <TopWrapper>
          <ScorePanel />
        </TopWrapper>
        {showInitialScreen ? (
          <InitialGameWindow onOptionClickHandler={onOptionClickHandler} />
        ) : (
          <PlayGameWindow />
        )}
      </MiddlePanel>
      <RightPanel>
        <RulesPanel>Rules</RulesPanel>
      </RightPanel>
    </GameWrapper>
  );
};

export default LandingPage;
