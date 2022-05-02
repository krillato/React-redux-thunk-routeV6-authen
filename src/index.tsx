import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "style/global.css";
import Router from "./routes";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
// @ts-ignore
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);

reportWebVitals();
