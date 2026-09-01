import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import "./index.css";
import "./styles/site.css";
import App from "./App.tsx";
import { SmoothScroll } from "./lib/SmoothScroll";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* Framer Motion doesn't honour prefers-reduced-motion on its own; the CSS
          rule in index.css can't reach its inline styles either. */}
      <MotionConfig reducedMotion="user">
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </MotionConfig>
    </BrowserRouter>
  </StrictMode>,
);
