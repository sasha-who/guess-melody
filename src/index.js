import React from "react";
import ReactDOM from "react-dom";
import {Settings} from "./const.js";
import App from "./components/app/app.jsx";

const rootElement = document.querySelector(`#root`);
const welcomeButtonClickHandler = () => {};

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
      onWelcomeButtonClick={welcomeButtonClickHandler}
    />, rootElement
);
