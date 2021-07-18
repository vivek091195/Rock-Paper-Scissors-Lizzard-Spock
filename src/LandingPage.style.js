import styled from 'styled-components';

const GameWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    justify-content: start;
  }
`;

const RulesPanel = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 1rem;
  color: white;
  text-transform: uppercase;
  border: 1px solid hsl(217, 16%, 45%);
  border-radius: 10px;
  letter-spacing: 1.5px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    right: 50%;
    transform: translate(50%);
  }
`;

export { GameWrapper, RulesPanel };
