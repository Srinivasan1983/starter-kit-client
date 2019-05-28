import React from "react";
import { ProductConsumer } from "../product-service-context";

const WithProductService = () => WrappedView => {
  
  return props => {
    return (
      <ProductConsumer>
        {productService => (
          <WrappedView {...props} productService={productService} />
        )}
      </ProductConsumer>
    );
  };
};

export default WithProductService;