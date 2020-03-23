export const breakpoints: any = {
  xs: 30,
  sm: 48,
  md: 62,
  lg: 75,
  xl: 87.5
};

export const below = (screenWidth: string): string => `@media screen and (max-width: ${screenWidth}em)`;
export const above = (screenWidth: string): string => `@media screen and (min-width: ${screenWidth}em)`;
export const between = (minWidth: string, maxWidth: string): string => `@media screen and (min-width: ${minWidth}em) and (max-width: ${maxWidth}em)`;