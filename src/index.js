import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/configuration";
import Root from "./containers/Root";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
