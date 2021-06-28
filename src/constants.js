import { Rock, Scissor, Lizard, Spock, Paper } from './icons';
import { css } from 'styled-components';

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

const CustomRockStyles = css`
  width: 18rem;
  height: 18rem;
  box-shadow: 0 0 0 4rem #dd3f59, 0 1.2rem 0 4rem #9f1634,
    0 1.2rem 0 0 #babfd2 inset;
  ${CenterMixin};
`;

const CustomPaperStyles = css`
  width: 18rem;
  height: 18rem;
  box-shadow: 0 0 0 4rem #506def, 0 1.2rem 0 4rem #2c44c2,
    0 1.2rem 0 0 #babfd2 inset;
  ${CenterMixin};
`;

const CustomScissorStyles = css`
  width: 18rem;
  height: 18rem;
  box-shadow: 0 0 0 4rem #eda723, 0 1.2rem 0 4rem #c36c1f,
    0 1.2rem 0 0 #babfd2 inset;
  ${CenterMixin};
`;

const CustomLizardStyles = css`
  width: 18rem;
  height: 18rem;
  box-shadow: 0 0 0 4rem #8e5ee4, 0 1.2rem 0 4rem #5b3d9e,
    0 1.2rem 0 0 #babfd2 inset;
  ${CenterMixin};
`;

const CustomSpockStyles = css`
  width: 18rem;
  height: 18rem;
  box-shadow: 0 0 0 4rem #54bbcf, 0 1.2rem 0 4rem #2d8fac,
    0 1.2rem 0 0 #babfd2 inset;
  ${CenterMixin};
`;

const CONTROL_OPTIONS_ENUM = {
  Rock: {
    label: 'rock',
    icon: Rock,
    styles: RockStyles,
    customStyles: CustomRockStyles,
  },
  Lizard: {
    label: 'lizard',
    icon: Lizard,
    styles: LizardStyles,
    customStyles: CustomLizardStyles,
  },
  Paper: {
    label: 'paper',
    icon: Paper,
    styles: PaperStyles,
    customStyles: CustomPaperStyles,
  },
  Spock: {
    label: 'spock',
    icon: Spock,
    styles: SpockStyles,
    customStyles: CustomSpockStyles,
  },
  Scissor: {
    label: 'scissor',
    icon: Scissor,
    styles: ScissorStyles,
    customStyles: CustomScissorStyles,
  },
};

export { CONTROL_OPTIONS_ENUM };
