import { toRem } from '../../utils';

export const lineHeights = {
  short: 1.3,
  default: 1.4,
  tall: 1.5,
};

export type LineHeights = keyof typeof lineHeights;

export const fontSizes = {
  '3xl': toRem(48),
  '2xl': toRem(30),
  xl: toRem(22),
  'lg+': toRem(18),
  lg: toRem(16),
  md: toRem(14),
  sm: toRem(12),
  xs: toRem(10),
};

export type FontSizes = keyof typeof fontSizes;

export const letterSpacings = {
  none: 0,
  tighter: -0.6,
  tight: -0.4,
  default: -0.2,
};

export type LetterSpacings = keyof typeof letterSpacings;

export const fontWeights = {
  regular: 400,
  medium: 600,
  bold: 700,
};

export type FontWeights = keyof typeof fontWeights;

export const fonts = {
  heading: 'Inter, system-ui, sans-serif',
  body: 'Inter, system-ui',
};

export type FontFamily = keyof typeof fonts;

const typography = {
  letterSpacings,
  lineHeights,
  fontWeights,
  fonts,
  fontSizes,
};

export default typography;
