import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FormComponent from "./FormComponent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <FormComponent />
  </>
);
