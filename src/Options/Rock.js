import React from 'react';
import { SVGWrapper, RockWrapper } from './Option.style';

const Rock = (props) => {
  const { onClickHandler } = props || {};
  return (
    <RockWrapper onClick={onClickHandler}>
      <SVGWrapper src={require(`../assets/svgs/rock.svg`).default} />
    </RockWrapper>
  );
};

export { Rock };
