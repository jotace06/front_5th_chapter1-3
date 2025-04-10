import { useContext } from "react";

import {
  NotificationStateContext,
  NotificationActionsContext,
} from "./context";

export const useNotificationState = () => {
  const context = useContext(NotificationStateContext);
  if (context === undefined) {
    throw new Error("NotificationStateContextProvider가 필요합니다");
  }
  return context;
};

export const useNotificationActions = () => {
  const context = useContext(NotificationActionsContext);
  if (context === undefined) {
    throw new Error("NotificationActionsContextProvider가 필요합니다");
  }
  return context;
};
