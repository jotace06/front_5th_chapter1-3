import { useReducer, FC, ReactNode } from "react";

import { useMemo } from "../../@lib/hooks";
import { AuthActionsContext, AuthStateContext } from "./context";
import { authReducer } from "./reducer";
import { AuthState } from "./types";
import { createAuthActions } from "./actions";

const initialAuthState: AuthState = { user: null };

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);
  const authActions = useMemo(() => createAuthActions(dispatch), []);

  return (
    <AuthActionsContext.Provider value={authActions}>
      <AuthStateContext.Provider value={authState}>
        {children}
      </AuthStateContext.Provider>
    </AuthActionsContext.Provider>
  );
};
