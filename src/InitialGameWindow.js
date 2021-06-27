import React from 'react';
import {
  GameWindowPanelWrapper,
  SVGWrapper,
  ShapeContainer,
  OptionContainer,
} from './InitialGameWindow.style';
import { CONTROL_OPTIONS_ENUM } from './constants';
import Shape from './assets/svgs/shape.svg';
import { Rock } from './Options/Rock';
import { Lizard } from './Options/Lizard';
import { Paper } from './Options/Paper';
import { Spock } from './Options/Spock';
import { Scissor } from './Options/Scissor';

const TOTAL_OPTIONS = 5;

const InitialGameWindow = ({
  setUserSelection,
  setHouseSelection,
  winnerDecider,
}) => {
  const { ROCK, PAPER, SCISSOR, SPOCK, LIZARD } = CONTROL_OPTIONS_ENUM;
  const components = {
    [SCISSOR]: Scissor,
    [SPOCK]: Spock,
    [PAPER]: Paper,
    [LIZARD]: Lizard,
    [ROCK]: Rock,
  };

  const onClickHandler = (e, pickedComponent, selectedOptionByUser) => {
    setUserSelection(pickedComponent);
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * TOTAL_OPTIONS);
      const optionsArray = Object.keys(CONTROL_OPTIONS_ENUM);
      const option = optionsArray[randomNumber];
      const Component = components[CONTROL_OPTIONS_ENUM[option]];
      setHouseSelection(Component);
      winnerDecider(selectedOptionByUser, option);
    }, 1000);
  };

  return (
    <GameWindowPanelWrapper>
      <ShapeContainer>
        <SVGWrapper height="60%" width="40%" src={Shape} />
        {Object.keys(CONTROL_OPTIONS_ENUM).map((key, index) => {
          const option = CONTROL_OPTIONS_ENUM[key];
          const Component = components[option];
          return (
            <OptionContainer>
              <Component
                key={key + index}
                onClickHandler={(e) =>
                  onClickHandler(e, components[option], option)
                }
              />
            </OptionContainer>
          );
        })}
      </ShapeContainer>
    </GameWindowPanelWrapper>
  );
};

export { InitialGameWindow };
