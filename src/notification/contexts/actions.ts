import { Dispatch } from "react";

import { NotificationAction, NotificationActions } from "./types";
import { Notification } from "../types";

export const createNotificationActions = (
  dispatch: Dispatch<NotificationAction>,
): NotificationActions => ({
  addNotification: (message: string, type: Notification["type"]) =>
    dispatch({ type: "ADD_NOTIFICATION", payload: { message, type } }),
  removeNotification: (id: number) =>
    dispatch({ type: "REMOVE_NOTIFICATION", payload: { id } }),
});
