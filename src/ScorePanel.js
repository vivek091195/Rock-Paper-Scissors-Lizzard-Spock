import React from 'react';
import {
  ScorePanelWrapper,
  SVGWrapper,
  ScoreWrapper,
  Label,
  Value,
} from './ScorePanel.style';
import { Logo } from './icons';

const ScorePanel = ({ score }) => {
  return (
    <ScorePanelWrapper>
      <SVGWrapper src={Logo} height="9rem" width="9rem" />
      <ScoreWrapper>
        <Label>Score</Label>
        <Value>{score}</Value>
      </ScoreWrapper>
    </ScorePanelWrapper>
  );
};

export { ScorePanel };
