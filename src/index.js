import React from "react";
import ReactDOM from "react-dom";
import NotificationProvider from "./screens/NotificationProvider";
import LandingPage from "./screens/LandingPage";
import "./index.css";

 function App() {
  return (
    <NotificationProvider>
      <LandingPage />
    </NotificationProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
