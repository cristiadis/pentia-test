import { white, primary, secondary, gray } from 'styles/colors';
import { breakpoints } from './responsive';

export const baseSize: number = 16;

export const pxToRem = (px: number): string => `${px / baseSize}rem`;

export const pxToVw = (px: number, width: number): string =>
  `${(100 * px) / width}vw`;

interface Themes {
  //to be added
}

export const themes = {
  default: {
    flexboxgrid: {
      // Defaults
      gridSize: 12, // columns
      gutterWidth: 2, // rem
      outerMargin: 2, // rem
      mediaQuery: 'only screen',
      breakpoints: breakpoints
    },
    palette: {
      primary: primary,
      secondary: secondary
    },
    color: white,
    logoColor: white,
    navBackground: gray[100],
    section: {
      light: {
        background: white,
        color: primary
      },
      dark: {
        background: primary,
        color: white
      }
    }
  }
};
