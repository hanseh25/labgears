// @flow
import { DEFAULT_THEME_MODE } from "./constants";
import type { ThemeModes } from "./types";

export default function themed(value : any, mode: ThemeModes) : string{
  return value[mode?mode:DEFAULT_THEME_MODE];
}
