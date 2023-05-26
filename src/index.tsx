import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RecipeReviewCard from "./components/RecipeReviewCard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <RecipeReviewCard />
  </ThemeProvider>
);
