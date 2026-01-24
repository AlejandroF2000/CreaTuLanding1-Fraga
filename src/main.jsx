import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // 👈 IMPORTANTÍSIMO: esto hace que se vea bien

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
