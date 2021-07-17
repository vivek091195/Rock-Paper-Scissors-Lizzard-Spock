import React from 'react';
import {
  GameWindowPanelWrapper,
  SVGWrapper,
  OptionContainer,
} from './GamePanel.style';
import { CONTROL_OPTIONS_ENUM } from './constants';
import { Frame } from './icons';

const GamePanel = ({ customCSS = null, onOptionClickHandler }) => {
  return (
    <GameWindowPanelWrapper>
      <SVGWrapper src={Frame} />
      {Object.keys(CONTROL_OPTIONS_ENUM).map((key) => {
        return (
          <OptionContainer
            key={CONTROL_OPTIONS_ENUM[key].label}
            customCSS={customCSS || CONTROL_OPTIONS_ENUM[key].styles}
            onClick={(e) => onOptionClickHandler(e, CONTROL_OPTIONS_ENUM[key])}
          >
            <SVGWrapper src={CONTROL_OPTIONS_ENUM[key].icon} height="60%" />
          </OptionContainer>
        );
      })}
    </GameWindowPanelWrapper>
  );
};

export { GamePanel };
