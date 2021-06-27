import React from 'react';
import { SVGWrapper, LizardWrapper } from './Option.style';

const Lizard = (props) => {
  const { onClickHandler } = props || {};
  return (
    <LizardWrapper onClick={onClickHandler}>
      <SVGWrapper src={require(`../assets/svgs/lizard.svg`).default} />
    </LizardWrapper>
  );
};

export { Lizard };
