import React, { Component } from "react";
import Products from "./products";
import ProductEditor from "./products/producteditor"

import { Route } from "react-router-dom";
import IndividualProducts from "./products/individualProducts";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Products} />
        <Route exact path="/product/:id" component={ProductEditor} />
        <Route exact path="/collections/all-sets" component={IndividualProducts} />
      </div>
    );
  }
}

export default App;
