import * as React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useNotifications } from "../hooks/useNotifications";
import { useCreateDomElement } from "../hooks/useCreateDomElement";
import Notification from "../components/Notification";

export const NotifyContext = React.createContext({});

const NotificationsContainer = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  pointer-events: none;
`;

function NotificationProvider({ children }) {
  const notificationRoot = useCreateDomElement();

  const { notify, notifications } = useNotifications();

  return (
    <>
      <NotifyContext.Provider value={notify}>{children}</NotifyContext.Provider>
      {notificationRoot &&
        createPortal(
          <NotificationsContainer>
            <AnimatePresence>
              {notifications.map((notification) => (
                <Notification key={notification.id} {...notification} />
              ))}
            </AnimatePresence>
          </NotificationsContainer>,
          notificationRoot
        )}
    </>
  );
}

export default NotificationProvider;
