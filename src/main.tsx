import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App1.tsx";
import App from "./App_useCallback.tsx";
// import App from "./App_useMemo.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
