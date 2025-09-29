import React from "react";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import App from "./App";
import { store } from "./store";

export function render(url: string) {
  const appHtml = renderToString(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const preloadedState = store.getState();

  return { html: appHtml, preloadedState };
}
