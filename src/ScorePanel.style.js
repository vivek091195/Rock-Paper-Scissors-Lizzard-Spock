import styled from 'styled-components';

const ScorePanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  border: 4px solid hsl(217, 16%, 45%);
  border-radius: 1rem;
  padding: 1.5rem 2rem;
`;

const ScoreWrapper = styled.div`
  background: white;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  height: 9rem;
  width: 11rem;
`;

const Label = styled.div`
  color: hsl(229, 64%, 46%);
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 2px;
`;

const Value = styled.div`
  color: hsl(229, 25%, 31%);
  font-size: 5rem;
  margin-top: -0.3rem;
`;

const SVGWrapper = styled.img`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
`;

export { ScorePanelWrapper, ScoreWrapper, Label, Value, SVGWrapper };
