import { Check } from "styled-icons/material/Check";
import { ErrorOutline } from "styled-icons/material/ErrorOutline";
import { Warning } from "styled-icons/material/Warning";
import { Info } from "styled-icons/material/Info";

//TODO: convert to switch case
export function getIcon(notificationType) {
  if (notificationType === "error") {
    return {
      Icon: ErrorOutline,
      backgroundColor: "#fdedf0",
      iconColor: "#ef8496",
    };
  }

  if (notificationType === "warning") {
    return {
      Icon: Warning,
      backgroundColor: "#fff7e8",
      iconColor: "#cc8300",
    };
  }

  if (notificationType === "info") {
    return {
      Icon: Info,
      backgroundColor: "#e5f4fa",
      iconColor: "#88cae9",
    };
  }

  return {
    Icon: Check,
    backgroundColor: "#e5f9f4",
    iconColor: "#98e4d3",
  };
}
