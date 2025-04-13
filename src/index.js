import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //react-redux => Store Management
  //1. create ./store.js
  //2. Add <Provider> around our application in src/index.js
  //3. create fileSlice to export as reducer => ./reducers/productsReducer.js
  //4.Use Redux State and Actions in React Components ==> ./controller/products.js

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
