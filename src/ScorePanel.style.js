import styled from 'styled-components';

const ScorePanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5vw 2vw;
  border: 4px solid hsl(217, 16%, 45%);
  border-radius: 20px;
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

const SVGWrapper = styled.img`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
`;

export { ScorePanelWrapper, ScoreWrapper, Label, Value, SVGWrapper };
