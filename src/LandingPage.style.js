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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 27%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;
  margin-bottom: 2rem;
`;

const Heading = styled.div`
  font-size: 1.7rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: hsl(229, 25%, 31%);
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export { GameWrapper, RulesPanel, Overlay, Modal, ModalHeader, Heading };
