import "./styles/global.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { CounterContextProvider } from "./contexts/CounterContext";
import { Home } from "./views/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CounterContextProvider>
            <Home />
        </CounterContextProvider>
    </React.StrictMode>,
);
