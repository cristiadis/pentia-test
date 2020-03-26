export type breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Breakpoints = {
  [key in breakpoint]: number;
};

export const breakpoints: Breakpoints = {
  xs: 0,
  sm: 48,
  md: 62,
  lg: 75,
  xl: 87.5
};

export const below = (screenWidth: number): string => `@media screen and (max-width: ${screenWidth}em)`;
export const above = (screenWidth: number): string => `@media screen and (min-width: ${screenWidth}em)`;
export const between = (minWidth: number, maxWidth: number): string => `@media screen and (min-width: ${minWidth}em) and (max-width: ${maxWidth}em)`;