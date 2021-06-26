import styled from 'styled-components';

const GameWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const LeftPanel = styled.div`
  width: 20%;
`;

const MiddlePanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const RightPanel = styled.div`
  width: 20%;
`;

const TopWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  height: 30%;
  align-items: center;
  padding: 0 2vw;
`;

const ScorePanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5vw 2vw;
  border: 4px solid hsl(217, 16%, 45%);
  border-radius: 20px;
`;

const GameWindowPanelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  position: relative;
`;

const SVGWrapper = styled.img`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
`;

const ScoreWrapper = styled.div`
  background: white;
  width: 15%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  height: 9vw;
  width: 10vw;
`;

const Label = styled.div`
  color: hsl(229, 64%, 46%);
  text-transform: uppercase;
  font-size: 1.5vw;
  letter-spacing: 1.5px;
`;

const Value = styled.div`
  color: hsl(229, 25%, 31%);
  font-size: 5.7vw;
  margin-top: -0.5vw;
`;

const RulesPanel = styled.div``;

const OptionWrapper = styled.div`
  cursor: pointer;
  height: 11vw;
  width: 11vw;
  border-radius: 50%;
  position: absolute;
  transform: ${(props) =>
    `translate(${props.translateX}%, ${props.translateY}%)`};
  background: ${(props) => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    position: absolute;
    content: '';
    width: 8.5vw;
    height: 8.5vw;
    border-radius: 50%;
    z-index: -1;
    background: white;
  }
`;

export {
  GameWrapper,
  LeftPanel,
  MiddlePanel,
  RightPanel,
  TopWrapper,
  ScorePanelWrapper,
  GameWindowPanelWrapper,
  SVGWrapper,
  ScoreWrapper,
  Label,
  Value,
  RulesPanel,
  OptionWrapper,
};
