import styled from 'styled-components';

const SVGWrapper = styled.img`
  height: 48%;
  width: 40%;
  z-index: 999;
`;

const OptionWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    position: absolute;
    content: '';
    width: 77%;
    height: 77%;
    border-radius: 50%;
    background: white;
  }
`;

const ScissorWrapper = styled(OptionWrapper)`
  top: -110%;
  left: 0;
  background: radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
`;

const SpockWrapper = styled(OptionWrapper)`
  top: -30%;
  left: -130%;
  background: radial-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%));
`;

const PaperWrapper = styled(OptionWrapper)`
  top: -30%;
  left: 130%;
  background: radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
`;

const LizardWrapper = styled(OptionWrapper)`
  top: 100%;
  left: -90%;
  background: radial-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%));
`;

const RockWrapper = styled(OptionWrapper)`
  top: 100%;
  left: 90%;
  background: radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
`;

export {
  SVGWrapper,
  RockWrapper,
  LizardWrapper,
  PaperWrapper,
  SpockWrapper,
  ScissorWrapper,
};
