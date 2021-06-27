import React from 'react';
import { SVGWrapper, SpockWrapper } from './Option.style';

const Spock = (props) => {
  const { onClickHandler } = props || {};
  return (
    <SpockWrapper onClick={onClickHandler}>
      <SVGWrapper src={require(`../assets/svgs/spock.svg`).default} />
    </SpockWrapper>
  );
};

export { Spock };
