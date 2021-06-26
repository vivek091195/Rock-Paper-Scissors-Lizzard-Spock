import styled from 'styled-components';

const GameWindowPanelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  position: relative;
`;

const SVGWrapper = styled.img`
  height: ${(props) => props.height || '48%'};
  width: ${(props) => props.width || '40%'};
`;

const OptionWrapper = styled.div`
  cursor: pointer;
  height: 11vw;
  width: 11vw;
  border-radius: 50%;
  position: absolute;
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

const ScissorWrapper = styled(OptionWrapper)`
  transform: translate(0, -110%);
  background: radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
`;

const SpockWrapper = styled(OptionWrapper)`
  transform: translate(-130%, -30%);
  background: radial-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
`;

const PaperWrapper = styled(OptionWrapper)`
  transform: translate(130%, -30%);
  background: radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
`;

const LizardWrapper = styled(OptionWrapper)`
  transform: translate(-90%, 100%);
  background: radial-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%));
`;

const RockWrapper = styled(OptionWrapper)`
  transform: translate(90%, 100%);
  background: radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
`;

export {
  GameWindowPanelWrapper,
  SVGWrapper,
  ScissorWrapper,
  LizardWrapper,
  RockWrapper,
  PaperWrapper,
  SpockWrapper,
};
