import { useContext } from "react";

import { ThemeStateContext, ThemeActionsContext } from "./context";

export const useThemeState = () => {
  const context = useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error("ThemeStateContextProvider가 필요합니다");
  }
  return context;
};

export const useThemeActions = () => {
  const context = useContext(ThemeActionsContext);
  if (context === undefined) {
    throw new Error("ThemeActionContextProvider가 필요합니다");
  }
  return context;
};
