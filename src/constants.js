import { Rock, Scissor, Lizard, Spock, Paper } from './icons';
import {
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
} from './StyleConfig';

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
