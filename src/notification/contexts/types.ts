import { Notification } from "../types";

export interface NotificationState {
  notifications: Notification[];
}

export type NotificationActionType = "ADD_NOTIFICATION" | "REMOVE_NOTIFICATION";

export type NotificationAction =
  | {
      type: "ADD_NOTIFICATION";
      payload: { message: string; type: Notification["type"] };
    }
  | { type: "REMOVE_NOTIFICATION"; payload: { id: number } };

export interface NotificationActions {
  addNotification: (message: string, type: Notification["type"]) => void;
  removeNotification: (id: number) => void;
}
