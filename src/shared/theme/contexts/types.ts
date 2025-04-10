export type Theme = "light" | "dark";

export interface ThemeState {
  theme: Theme;
}

export type ThemeActionType = "TOGGLE_THEME";

export type ThemeAction = { type: ThemeActionType };

export interface ThemeActions {
  toggleTheme: () => void;
}
