import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./assets/typography/font.scss";
import "./index.scss";
import App from "./App";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </Router>
);
