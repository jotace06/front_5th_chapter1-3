import { useReducer, FC, ReactNode } from "react";

import { useMemo } from "../../../@lib/hooks";
import { ThemeStateContext, ThemeActionsContext } from "./context";
import { themeReducer } from "./reducer";
import { ThemeState } from "./types";
import { createThemeActions } from "./actions";

const initialThemeState: ThemeState = { theme: "light" };

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [themeState, dispatch] = useReducer(themeReducer, initialThemeState);
  const themeActions = useMemo(() => createThemeActions(dispatch), []);

  return (
    <ThemeActionsContext.Provider value={themeActions}>
      <ThemeStateContext.Provider value={themeState}>
        {children}
      </ThemeStateContext.Provider>
    </ThemeActionsContext.Provider>
  );
};
