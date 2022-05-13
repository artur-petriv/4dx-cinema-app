import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import UserStore from "./store/UserStore";
import FilmStore from "./store/FilmStore";
import ModalStore from "./store/ModalStore";
import ThemeProvider from "./providers/ThemeProvider";

export const Context = React.createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        films: new FilmStore(),
        modal: new ModalStore(),
      }}
    >
      <Router>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
