import { createContext } from "react";

import { NotificationState, NotificationActions } from "./types";

export const NotificationStateContext = createContext<NotificationState>({
  notifications: [],
});

export const NotificationActionsContext = createContext<NotificationActions>({
  addNotification: () => {},
  removeNotification: () => {},
});
