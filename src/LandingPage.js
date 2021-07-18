import React from 'react';
import {
  GameWrapper,
  RulesPanel,
  Overlay,
  Modal,
  ModalHeader,
  Heading,
} from './LandingPage.style';
import { ScorePanel } from './ScorePanel';
import { GamePanel } from './GamePanel';
import { ResultPanel } from './ResultPanel';
import { useControl } from './hooks/useControl';
import { SVGWrapper } from './GamePanel.style';
import { Rules, CloseBtn } from './icons';

const LandingPage = () => {
  const {
    userSelection,
    houseSelection,
    resetClickHandler,
    onOptionClickHandler,
    result,
    score,
    showOverlay,
    setShowOverlay,
  } = useControl();
  return (
    <GameWrapper>
      <ScorePanel score={score} />
      {!userSelection ? (
        <GamePanel onOptionClickHandler={onOptionClickHandler} />
      ) : (
        <ResultPanel
          UserPickedOption={userSelection}
          HousePickedOption={houseSelection}
          resetClickHandler={resetClickHandler}
          result={result}
        />
      )}
      <RulesPanel onClick={() => setShowOverlay(true)}>Rules</RulesPanel>
      {showOverlay && (
        <Overlay>
          <Modal>
            <ModalHeader>
              <Heading>Rules</Heading>
              <SVGWrapper
                src={CloseBtn}
                height="1.7rem"
                onClick={() => setShowOverlay(false)}
                style={{ cursor: 'pointer' }}
              />
            </ModalHeader>
            <SVGWrapper src={Rules} height="52%" />
          </Modal>
        </Overlay>
      )}
    </GameWrapper>
  );
};

export default LandingPage;
