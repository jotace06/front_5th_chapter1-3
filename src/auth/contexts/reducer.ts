import { AuthAction, AuthState } from "./types";

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case "LOGIN": {
      const newUser = {
        id: 1,
        name: "홍길동",
        email: action.payload.email,
      };
      return {
        ...state,
        user: newUser,
      };
    }
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
