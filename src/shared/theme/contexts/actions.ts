import { Dispatch } from "react";

import { ThemeAction, ThemeActions } from "./types";

export const createThemeActions = (
  dispatch: Dispatch<ThemeAction>,
): ThemeActions => ({
  toggleTheme: () => dispatch({ type: "TOGGLE_THEME" }),
});
