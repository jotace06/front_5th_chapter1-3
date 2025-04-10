import { Dispatch } from "react";

import { AuthAction, AuthActions } from "./types";
import { eventBus } from "../../shared/events";

export const createAuthActions = (
  dispatch: Dispatch<AuthAction>,
): AuthActions => ({
  login: (email: string, password: string) => {
    dispatch({ type: "LOGIN", payload: { email, password } });
    eventBus.publish("AUTH:LOGIN", "로그인 성공", "success");
  },
  logout: () => {
    dispatch({ type: "LOGOUT" });
    eventBus.publish("AUTH:LOGOUT", "로그아웃 성공", "info");
  },
});
