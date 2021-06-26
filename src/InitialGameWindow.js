import React from 'react';
import {
  GameWindowPanelWrapper,
  SVGWrapper,
  ScissorWrapper,
  LizardWrapper,
  RockWrapper,
  PaperWrapper,
  SpockWrapper,
} from './InitialGameWindow.style';
import { CONTROL_OPTIONS_ENUM } from './constants';
import Shape from './assets/svgs/shape.svg';

const InitialGameWindow = ({ onOptionClickHandler }) => {
  const { ROCK, PAPER, SCISSOR, SPOCK, LIZARD } = CONTROL_OPTIONS_ENUM;
  const components = {
    [ROCK]: RockWrapper,
    [PAPER]: PaperWrapper,
    [SCISSOR]: ScissorWrapper,
    [SPOCK]: SpockWrapper,
    [LIZARD]: LizardWrapper,
  };
  return (
    <GameWindowPanelWrapper>
      <SVGWrapper height="60%" width="48%" src={Shape} />
      {Object.keys(CONTROL_OPTIONS_ENUM).map((key, index) => {
        const option = CONTROL_OPTIONS_ENUM[key];
        const Component = components[option];
        return (
          <Component
            key={key + index}
            onClick={(e) => onOptionClickHandler(e, option)}
          >
            <SVGWrapper src={require(`./assets/svgs/${option}.svg`).default} />
          </Component>
        );
      })}
    </GameWindowPanelWrapper>
  );
};

export { InitialGameWindow };
