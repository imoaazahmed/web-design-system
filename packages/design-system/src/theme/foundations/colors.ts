import { ColorHues, RecursiveObject } from '@chakra-ui/react';

/**
 * Test the color contrast for these using: https://contrast-finder.tanaguru.com/
 */

const orange = {
  900: '#4c1901',
  800: '#7e2902',
  700: '#b03a03',
  600: '#e24a04',
  500: '#fb641e',
  400: '#fc8650',
  300: '#fda982',
  200: '#fdc0a3',
  100: '#fed7c5',
  50: '#ffeee6',
};

const red = {
  900: '#2F0909',
  800: '#5F1312',
  700: '#8E1C1B',
  600: '#BD2624',
  500: '#D83432',
  400: '#DE5654',
  300: '#E57876',
  200: '#EB9998',
  100: '#F2BBBB',
  50: '#F8DDDD',
};

const green = {
  900: '#001508',
  800: '#0C3A26',
  700: '#1D5F42',
  600: '#2C855E',
  500: '#3BAB78',
  400: '#45BF88',
  300: '#78D1AA',
  200: '#9DDFC1',
  100: '#C0ECDA',
  50: '#E1FBF0',
};

const blue = {
  900: '#00202b',
  800: '#002c3c',
  700: '#00394d',
  600: '#005f80',
  500: '#0084b3',
  400: '#00aae6',
  300: '#4dd1ff',
  200: '#80deff',
  100: '#b3ebff',
  50: '#e6f8ff',
};

const gray = {
  900: '#262626',
  800: '#404040',
  700: '#595959',
  600: '#737373',
  500: '#8C8C8C',
  400: '#A6A6A6',
  300: '#BFBFBF',
  200: '#D9D9D9',
  100: '#F2F2F2',
  50: '#FAFAFA',
};

const yellow = {
  900: '#2a1b00',
  800: '#553500',
  700: '#805000',
  600: '#aa6b00',
  500: '#d58500',
  400: '#ffa000',
  300: '#ffb333',
  200: '#ffc666',
  100: '#ffd999',
  50: '#ffeccc',
};

export const colors: RecursiveObject<
  string | Record<string, Partial<ColorHues>>
> = {
  gray,
  blue,
  green,
  orange,
  red,
  yellow,
};

export default colors;
