import styled from 'styled-components';
import { CustomPlaceholderIconWrapper } from './StyleConfig';

const GameWindowPanelWrapper = styled.div`
  display: flex;
  height: 70%;
  width: 100%;
  justify-content: space-between;
`;

const UserSelectionPanel = styled.div`
  flex: 1;
  position: relative;
`;

const ResultWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const HouseSelectionPanel = styled.div`
  flex: 1;
  position: relative;
`;

const Label = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: white;
  text-align: center;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem` : '2rem')};
  margin-top: 1.5rem;
`;

const DefaultWrapper = styled.div`
  ${CustomPlaceholderIconWrapper};
  background: #17223e;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonWrapper = styled.div`
  height: 3rem;
  width: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background: white;
  color: hsl(229, 25%, 31%);
  border-radius: 0.7rem;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 1rem;
`;

export {
  GameWindowPanelWrapper,
  UserSelectionPanel,
  ResultWindow,
  HouseSelectionPanel,
  Label,
  ButtonWrapper,
  DefaultWrapper,
};
