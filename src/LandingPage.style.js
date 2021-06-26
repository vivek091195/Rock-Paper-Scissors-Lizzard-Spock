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

const RulesPanel = styled.div``;

export {
  GameWrapper,
  LeftPanel,
  MiddlePanel,
  RightPanel,
  TopWrapper,
  RulesPanel,
};
