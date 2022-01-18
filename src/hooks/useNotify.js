import * as React from "react";
import { NotifyContext } from "../screens/NotificationProvider";

export function useNotify() {
  return React.useContext(NotifyContext);
}

