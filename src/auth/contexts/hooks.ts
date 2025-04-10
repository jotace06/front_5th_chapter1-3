import { useContext } from "react";

import { AuthStateContext, AuthActionsContext } from "./context";

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("AuthStateContextProvider가 필요합니다");
  }
  return context;
};

export const useAuthActions = () => {
  const context = useContext(AuthActionsContext);
  if (context === undefined) {
    throw new Error("AuthActionsContextProvider가 필요합니다");
  }
  return context;
};
