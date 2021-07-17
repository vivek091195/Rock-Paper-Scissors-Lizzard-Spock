import styled from 'styled-components';

const GameWindowPanelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  position: relative;
`;

const SVGWrapper = styled.img`
  height: ${(props) => props.height || '60%'};
  @media only screen and (max-width: 768px) {
    height: ${(props) => props.height || '56%'};
  }
`;

const ShapeContainer = styled.div`
  width: 40%;
  height: 60%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const OptionContainer = styled.div`
  width: 9rem;
  height: 9rem;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  ${({ customCSS }) => customCSS};
`;

export { GameWindowPanelWrapper, SVGWrapper, ShapeContainer, OptionContainer };
