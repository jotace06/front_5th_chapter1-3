import { createContext } from "react";

import { ThemeState, ThemeActions } from "./types";

export const ThemeStateContext = createContext<ThemeState>({ theme: "light" });

export const ThemeActionsContext = createContext<ThemeActions>({
  toggleTheme: () => {},
});
