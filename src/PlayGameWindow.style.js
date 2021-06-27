import styled from 'styled-components';

const GameWindowPanelWrapper = styled.div`
  display: flex;
  height: 70%;
  position: relative;
  justify-content: space-between;
`;

const UserSelectionPanel = styled.div`
  width: 33%;
  position: relative;
`;

const ResultPanel = styled.div`
  width: 34%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(2%);
`;

const HouseSelectionPanel = styled.div`
  width: 33%;
  position: relative;
`;

const OptionWrapper = styled.div`
  width: 23vw;
  height: 23vw;
  border-radius: 50%;
  background: #17223e;
  position: absolute;
  top: 30%;
  left: ${(props) => (props.left ? '0%' : 'unset')};
  right: ${(props) => (props.right ? '0%' : 'unset')};
  box-shadow: ${(props) =>
    props.win
      ? '0 0 0 4.5vw #2b3957, 0 0 0 9vw #273554, 0 0 0 13.5vw #223351'
      : 'none'};
  z-index: -1;
  > div {
    top: 0;
    left: 0;
  }
`;

const Label = styled.div`
  text-transform: uppercase;
  font-size: ${(props) => props.fontSize || '2vw'};
  letter-spacing: 0.2vw;
  color: white;
  margin-top: ${(props) => props.marginTop || 0};
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 15vw;
  height: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.25vw;
  font-size: 1.5vw;
  background: white;
  color: hsl(229, 25%, 31%);
  border-radius: 10px;
  cursor: pointer;
  margin-top: 1vw;
`;

export {
  GameWindowPanelWrapper,
  UserSelectionPanel,
  ResultPanel,
  HouseSelectionPanel,
  OptionWrapper,
  Label,
  ButtonWrapper,
};
