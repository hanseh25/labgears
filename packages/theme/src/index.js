// @flow
import * as colors from './colors';
import LabGearsThemeProvider from './LabGearsThemeProvider';

export { colors, LabGearsThemeProvider };

export const borderRadius = (): number => 3;
export const gridSize = (): number => 8;
export const fontSize = (): number => 14;
export const fontFamily = (): string =>
  '-apple-system, BlinkMacSystemFont, "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", sans-serif';

export const layers = {
  card: () => 100,
};
