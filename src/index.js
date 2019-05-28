import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";

import store from "./store/configureStore";
import { ProductProvider } from "./components/product-service-context";
import ProductService from "./services/product-service";

ReactDOM.render(
  <Provider store={store}>
    <ProductProvider value={new ProductService()}>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  </Provider>,
  document.querySelector("#root")
);
