import React from "react";
import ReactDOM from "react-dom";

import "./scss/app.scss";
import 'bootstrap/dist/css/bootstrap.css';

import Launcher from "./components/Launcher";

ReactDOM.render(
    <Launcher />,
    document.getElementById("root")
);