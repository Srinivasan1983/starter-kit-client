import React from "react";
const {
  Provider: ProductProvider,
  Consumer: ProductConsumer
} = React.createContext();

export { ProductConsumer, ProductProvider };