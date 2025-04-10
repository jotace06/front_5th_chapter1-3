import { useReducer, useEffect, FC, ReactNode } from "react";

import { useMemo } from "../../@lib/hooks";
import {
  NotificationStateContext,
  NotificationActionsContext,
} from "./context";
import { notificationReducer } from "./reducer";
import { NotificationState } from "./types";
import { createNotificationActions } from "./actions";
import { eventBus } from "../../shared/events";
import { Notification } from "../types";

const initialNotificationState: NotificationState = { notifications: [] };

export const NotificationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notificationState, dispatch] = useReducer(
    notificationReducer,
    initialNotificationState,
  );
  const notificationActions = useMemo(
    () => createNotificationActions(dispatch),
    [],
  );

  useEffect(() => {
    const unsubscribeAuthLogin = eventBus.subscribe(
      "AUTH:LOGIN",
      (message: string, type: Notification["type"]) => {
        notificationActions.addNotification(message, type);
      },
    );

    const unsubscribeAuthLogout = eventBus.subscribe(
      "AUTH:LOGOUT",
      (message: string, type: Notification["type"]) => {
        notificationActions.addNotification(message, type);
      },
    );

    return () => {
      unsubscribeAuthLogin();
      unsubscribeAuthLogout();
    };
  }, [notificationActions]);

  return (
    <NotificationActionsContext.Provider value={notificationActions}>
      <NotificationStateContext.Provider value={notificationState}>
        {children}
      </NotificationStateContext.Provider>
    </NotificationActionsContext.Provider>
  );
};
