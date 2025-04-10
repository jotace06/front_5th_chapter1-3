import { NotificationAction, NotificationState } from "./types";

export const notificationReducer = (
  state: NotificationState,
  action: NotificationAction,
): NotificationState => {
  switch (action.type) {
    case "ADD_NOTIFICATION": {
      const newNotification = {
        id: Date.now(),
        message: action.payload.message,
        type: action.payload.type,
      };

      return {
        ...state,
        notifications: [...state.notifications, newNotification],
      };
    }
    case "REMOVE_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};
