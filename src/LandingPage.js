import React from 'react';
import {
  GameWrapper,
  ScorePanelWrapper,
  GameWindowPanelWrapper,
  TopWrapper,
  SVGWrapper,
  ScoreWrapper,
  Label,
  Value,
  RulesPanel,
  LeftPanel,
  MiddlePanel,
  RightPanel,
  OptionWrapper,
} from './LandingPage.style';
import Logo from './assets/svgs/logo.svg';
import Shape from './assets/svgs/shape.svg';
import Paper from './assets/svgs/paper.svg';
import Rock from './assets/svgs/rock.svg';
import Scissors from './assets/svgs/scissors.svg';
import Spock from './assets/svgs/spock.svg';
import Lizard from './assets/svgs/lizard.svg';

const LandingPage = () => {
  return (
    <GameWrapper>
      <LeftPanel></LeftPanel>
      <MiddlePanel>
        <TopWrapper>
          <ScorePanelWrapper>
            <SVGWrapper height="9vw" width="9vw" src={Logo} />
            <ScoreWrapper>
              <Label>Score</Label>
              <Value>12</Value>
            </ScoreWrapper>
          </ScorePanelWrapper>
        </TopWrapper>
        <GameWindowPanelWrapper>
          <SVGWrapper height="60%" width="48%" src={Shape} />
          <OptionWrapper
            translateX={0}
            translateY={-110}
            backgroundColor={
              'radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))'
            }
          >
            <SVGWrapper height="48%" width="40%" src={Scissors} />
          </OptionWrapper>
          <OptionWrapper
            translateX={-130}
            translateY={-30}
            backgroundColor={
              'radial-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))'
            }
          >
            <SVGWrapper height="48%" width="40%" src={Spock} />
          </OptionWrapper>
          <OptionWrapper
            translateX={130}
            translateY={-30}
            backgroundColor={
              'radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))'
            }
          >
            <SVGWrapper height="48%" width="40%" src={Paper} />
          </OptionWrapper>
          <OptionWrapper
            translateX={-90}
            translateY={100}
            backgroundColor={
              'radial-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))'
            }
          >
            <SVGWrapper height="48%" width="40%" src={Lizard} />
          </OptionWrapper>
          <OptionWrapper
            translateX={90}
            translateY={100}
            backgroundColor={
              'radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))'
            }
          >
            <SVGWrapper height="48%" width="40%" src={Rock} />
          </OptionWrapper>
        </GameWindowPanelWrapper>
      </MiddlePanel>
      <RightPanel>
        <RulesPanel>Rules</RulesPanel>
      </RightPanel>
    </GameWrapper>
  );
};

export default LandingPage;
