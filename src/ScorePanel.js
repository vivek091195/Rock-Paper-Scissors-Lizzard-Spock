import React from 'react';
import Logo from './assets/svgs/logo.svg';
import {
  ScorePanelWrapper,
  SVGWrapper,
  ScoreWrapper,
  Label,
  Value,
} from './ScorePanel.style';

const ScorePanel = ({ score }) => {
  return (
    <ScorePanelWrapper>
      <SVGWrapper height="9vw" width="9vw" src={Logo} />
      <ScoreWrapper>
        <Label>Score</Label>
        <Value>{score}</Value>
      </ScoreWrapper>
    </ScorePanelWrapper>
  );
};

export { ScorePanel };
