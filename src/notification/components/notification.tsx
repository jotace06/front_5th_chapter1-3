import { memo } from "../../@lib/hocs";
import { Notification as NotificationType } from "../types";
import { NotificationActions } from "../contexts/types";
import { RenderCounter } from "../../@lib/devTools";

interface NotificationProps {
  notification: NotificationType;
  removeNotification: NotificationActions["removeNotification"];
}

export const Notification: React.FC<NotificationProps> = memo(
  ({ notification, removeNotification }) => {
    const handleRemoveNotificationClick = () => {
      removeNotification(notification.id);
    };

    return (
      <RenderCounter componentName="Notification" borderColor="#8A2BE2">
        <div
          key={notification.id}
          className={`p-4 rounded shadow-lg ${
            notification.type === "success"
              ? "bg-green-500"
              : notification.type === "error"
                ? "bg-red-500"
                : notification.type === "warning"
                  ? "bg-yellow-500"
                  : "bg-blue-500"
          } text-white`}
        >
          {notification.message}
          <button
            onClick={handleRemoveNotificationClick}
            className="ml-4 text-white hover:text-gray-200"
          >
            닫기
          </button>
        </div>
      </RenderCounter>
    );
  },
);
