import { useState, useCallback } from "react";
import shortId from "shortid";

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);

  const notify = useCallback((notificationPayload) => {
    const id = shortId();

    setNotifications((notifications) => [
      ...notifications,
      { id, onClose: removeNotification, ...notificationPayload },
    ]);

    function removeNotification() {
        setNotifications((notifications) =>
          notifications.filter((notification) => notification.id !== id)
        );
      }

    setTimeout(removeNotification, 4000);
  }, []);

  return { notify, notifications };
}
