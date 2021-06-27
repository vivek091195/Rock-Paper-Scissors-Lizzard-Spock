import React from 'react';
import {
  GameWindowPanelWrapper,
  UserSelectionPanel,
  ResultPanel,
  HouseSelectionPanel,
  OptionWrapper,
  Label,
  ButtonWrapper,
} from './PlayGameWindow.style';

const PlayGameWindow = ({
  UserPickedOptionComponent,
  HousePickedOptionComponent,
  resetClickHandler,
  result,
}) => {
  let resultLabel = `It's a Tie`;
  if (result) {
    resultLabel = result === 1 ? 'You Won' : 'You Lose';
  }
  return (
    <GameWindowPanelWrapper>
      <UserSelectionPanel>
        <Label marginTop="5vw">You Picked</Label>
        <OptionWrapper left win={result === 1}>
          {UserPickedOptionComponent}
        </OptionWrapper>
      </UserSelectionPanel>
      {UserPickedOptionComponent && HousePickedOptionComponent && (
        <ResultPanel>
          <Label fontSize="4vw">{resultLabel}</Label>
          <ButtonWrapper onClick={resetClickHandler}>Play Again</ButtonWrapper>
        </ResultPanel>
      )}
      <HouseSelectionPanel>
        <Label marginTop="5vw">The House Picked</Label>
        <OptionWrapper right win={result === -1}>
          {HousePickedOptionComponent ? HousePickedOptionComponent : null}
        </OptionWrapper>
      </HouseSelectionPanel>
    </GameWindowPanelWrapper>
  );
};

export { PlayGameWindow };
