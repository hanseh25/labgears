// @flow
import { DEFAULT_THEME_MODE } from './constants';
//import type { ThemeModes } from './types';

export default function themed(value: any): string {
  return (props) => {
    console.log(props.theme,'theme');
    return value[props.theme ? props.theme.mode : DEFAULT_THEME_MODE];
  };

}
