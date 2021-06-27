import styled from 'styled-components';

const GameWindowPanelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  position: relative;
`;

const SVGWrapper = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ShapeContainer = styled.div`
  width: 40%;
  height: 60%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const OptionContainer = styled.div`
  width: 11vw;
  height: 11vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { GameWindowPanelWrapper, SVGWrapper, ShapeContainer, OptionContainer };
