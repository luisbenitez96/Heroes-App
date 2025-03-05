import { StrictMode } from "react";
import { HeroesApp } from "./HeroesApp";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </StrictMode>
);
