import { User } from "../types";

export interface AuthState {
  user: User | null;
}

export type AuthActionType = "LOGIN" | "LOGOUT";

export type AuthAction =
  | {
      type: "LOGIN";
      payload: { email: string; password: string };
    }
  | { type: "LOGOUT" };

export interface AuthActions {
  login: (email: string, password: string) => void;
  logout: () => void;
}
