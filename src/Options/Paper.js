import React from 'react';
import { SVGWrapper, PaperWrapper } from './Option.style';

const Paper = (props) => {
  const { onClickHandler } = props || {};
  return (
    <PaperWrapper onClick={onClickHandler}>
      <SVGWrapper src={require(`../assets/svgs/paper.svg`).default} />
    </PaperWrapper>
  );
};

export { Paper };
