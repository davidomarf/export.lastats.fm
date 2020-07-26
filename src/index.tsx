import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import WebFont from "webfontloader";
import { SWRConfig } from "swr";
import { fetcher } from "./API/lastfm";

WebFont.load({
  google: {
    families: ["Muli:300,400,700", "Fira Code:400,600"]
  }
});

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
