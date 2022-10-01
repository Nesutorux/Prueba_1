import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Dashinicio } from "/src/view/pages/inicio.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Dashinicio />
  </StrictMode>
);
