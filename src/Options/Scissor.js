import React from 'react';
import { SVGWrapper, ScissorWrapper } from './Option.style';

const Scissor = (props) => {
  const { onClickHandler } = props || {};
  return (
    <ScissorWrapper onClick={onClickHandler}>
      <SVGWrapper src={require(`../assets/svgs/scissor.svg`).default} />
    </ScissorWrapper>
  );
};

export { Scissor };
