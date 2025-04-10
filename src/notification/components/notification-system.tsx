import { memo } from "../../@lib/hocs";
import { renderLog } from "../../utils";
import { useNotificationActions, useNotificationState } from "../contexts";
import { Notification } from "./notification";

export const NotificationSystem: React.FC = memo(() => {
  renderLog("NotificationSystem rendered");
  const { notifications } = useNotificationState();
  const { removeNotification } = useNotificationActions();

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          removeNotification={removeNotification}
        />
      ))}
    </div>
  );
});
