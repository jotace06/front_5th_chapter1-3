import { createContext } from "react";

import { AuthState, AuthActions } from "./types";

export const AuthStateContext = createContext<AuthState>({
  user: null,
});

export const AuthActionsContext = createContext<AuthActions>({
  login: () => {},
  logout: () => {},
});
