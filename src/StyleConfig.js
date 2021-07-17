import { css } from 'styled-components';

const DIMENSIONS = {
  mobile: '11rem',
  desktop: '18rem',
};

const CenterMixin = css`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const RockStyles = css`
  top: 66%;
  right: 4%;
  box-shadow: 0 0 0 1.5rem #dd3f59, 0 0.3rem 0 1.5rem #9f1634,
    0 0.3rem 0 0 #babfd2 inset;
`;

const PaperStyles = css`
  top: 32%;
  right: -14%;
  box-shadow: 0 0 0 1.5rem #506def, 0 0.3rem 0 1.5rem #2c44c2,
    0 0.3rem 0 0 #babfd2 inset;
`;

const ScissorStyles = css`
  top: 10%;
  box-shadow: 0 0 0 1.5rem #eda723, 0 0.3rem 0 1.5rem #c36c1f,
    0 0.3rem 0 0 #babfd2 inset;
`;

const LizardStyles = css`
  top: 66%;
  left: 4%;
  box-shadow: 0 0 0 1.5rem #8e5ee4, 0 0.3rem 0 1.5rem #5b3d9e,
    0 0.3rem 0 0 #babfd2 inset;
`;

const SpockStyles = css`
  top: 32%;
  left: -14%;
  box-shadow: 0 0 0 1.5rem #54bbcf, 0 0.5rem 0 1.5rem #2d8fac,
    0 0.3rem 0 0 #babfd2 inset;
`;

const DefaultDesktopDimensionConf = css`
  width: ${DIMENSIONS.desktop};
  height: ${DIMENSIONS.desktop};
`;

const DefaultMobileDimensionConf = css`
  width: ${DIMENSIONS.mobile};
  height: ${DIMENSIONS.mobile};
`;

const CustomRockStyles = css`
  ${DefaultDesktopDimensionConf};
  box-shadow: 0 0 0 1.5rem #dd3f59, 0 0.3rem 0 1.5rem #9f1634,
    0 0.3rem 0 0 #babfd2 inset;
  ${CenterMixin};
  @media only screen and (max-width: 768px) {
    ${DefaultMobileDimensionConf};
  }
`;

const CustomPaperStyles = css`
  ${DefaultDesktopDimensionConf};
  box-shadow: 0 0 0 1.5rem #506def, 0 0.3rem 0 1.5rem #2c44c2,
    0 0.3rem 0 0 #babfd2 inset;
  ${CenterMixin};
  @media only screen and (max-width: 768px) {
    ${DefaultMobileDimensionConf};
  }
`;

const CustomScissorStyles = css`
  ${DefaultDesktopDimensionConf};
  box-shadow: 0 0 0 1.5rem #eda723, 0 0.3rem 0 1.5rem #c36c1f,
    0 0.3rem 0 0 #babfd2 inset;
  ${CenterMixin};
  @media only screen and (max-width: 768px) {
    ${DefaultMobileDimensionConf};
  }
`;

const CustomLizardStyles = css`
  ${DefaultDesktopDimensionConf};
  box-shadow: 0 0 0 1.5rem #8e5ee4, 0 0.3rem 0 1.5rem #5b3d9e,
    0 0.3rem 0 0 #babfd2 inset;
  ${CenterMixin};
  @media only screen and (max-width: 768px) {
    ${DefaultMobileDimensionConf};
  }
`;

const CustomSpockStyles = css`
  ${DefaultDesktopDimensionConf};
  box-shadow: 0 0 0 1.5rem #54bbcf, 0 0.5rem 0 1.5rem #2d8fac,
    0 0.3rem 0 0 #babfd2 inset;
  ${CenterMixin};
  @media only screen and (max-width: 768px) {
    ${DefaultMobileDimensionConf};
  }
`;

const CustomPlaceholderIconWrapper = css`
  ${DefaultDesktopDimensionConf};
  @media only screen and (max-width: 768px) {
    ${DefaultMobileDimensionConf};
  }
`;

export {
  RockStyles,
  PaperStyles,
  SpockStyles,
  LizardStyles,
  ScissorStyles,
  CustomLizardStyles,
  CustomPaperStyles,
  CustomRockStyles,
  CustomSpockStyles,
  CustomScissorStyles,
  CustomPlaceholderIconWrapper,
};
