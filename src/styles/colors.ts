import Color from 'color';

export const white = '#FFFFFF';
export const gray = {
  100: '#1b1b1d',
  200: '#2a2a2c'
};
export const primary = gray[200];
export const secondary = '#eb5b51';

export const darken = (color: string, value: number): string => {
  return Color(color).darken(value).hex();
};

export const lighten = (color: string, value: number): string => {
  return Color(color).lighten(value).hex();
};

export const fade = (color: string, value: number): string => {
  return Color(color).fade(value).hex();
};
