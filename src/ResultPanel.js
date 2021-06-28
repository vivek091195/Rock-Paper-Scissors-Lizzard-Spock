import React from 'react';
import {
  GameWindowPanelWrapper,
  UserSelectionPanel,
  ResultWindow,
  HouseSelectionPanel,
  Label,
  DefaultWrapper,
  ButtonWrapper,
} from './ResultPanel.style';

import { OptionContainer, SVGWrapper } from './GamePanel.style';

const ResultPanel = ({
  UserPickedOption,
  HousePickedOption,
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
        <Label>You Picked</Label>
        <OptionContainer customCSS={UserPickedOption.customStyles} win>
          <SVGWrapper src={UserPickedOption.icon} />
        </OptionContainer>
      </UserSelectionPanel>
      {UserPickedOption && HousePickedOption && (
        <ResultWindow>
          <Label fontSize={4}>{resultLabel}</Label>
          <ButtonWrapper onClick={resetClickHandler}>Play Again</ButtonWrapper>
        </ResultWindow>
      )}
      <HouseSelectionPanel>
        <Label>The House Picked</Label>
        {HousePickedOption ? (
          <OptionContainer customCSS={HousePickedOption.customStyles}>
            <SVGWrapper src={HousePickedOption.icon} />
          </OptionContainer>
        ) : (
          <DefaultWrapper />
        )}
      </HouseSelectionPanel>
    </GameWindowPanelWrapper>
  );
};

export { ResultPanel };
