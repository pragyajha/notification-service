import { CheckCircle } from "styled-icons/material/CheckCircle";
import { ErrorOutline } from "styled-icons/material/ErrorOutline";
import { InfoOutline } from "styled-icons/material/InfoOutline";
import { Block } from "styled-icons/material/Block";
export function getIcon(notificationType) {
  if (notificationType === "error") {
    return {
      Icon: Block,
      backgroundColor: "#fdedf0",
      iconColor: "#ef8496",
    };
  }

  if (notificationType === "warning") {
    return {
      Icon: ErrorOutline,
      backgroundColor: "#fff7e8",
      iconColor: "#cc8300",
    };
  }

  if (notificationType === "info") {
    return {
      Icon: InfoOutline,
      backgroundColor: "#e5f4fa",
      iconColor: "#88cae9",
    };
  }

  return {
    Icon: CheckCircle,
    backgroundColor: "#e5f9f4",
    iconColor: "#98e4d3",
  };
}
