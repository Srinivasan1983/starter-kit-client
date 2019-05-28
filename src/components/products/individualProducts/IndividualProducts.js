import React, { Component } from "react";
import {connect} from 'react-redux';

import {WithProductService} from '../../hoc'
import {
  Jumbotron,
} from "react-bootstrap";
import styled from "styled-components";
import {fetchIndividualProducts} from '../../../actions/productActions'

import IndividualProductsContent from "./IndividualProductsContent";

class IndividualProducts extends Component {

  componentDidMount() {
    this.props.fetchIndividualProducts();
  }

  render() {

    const { individualproductskit, loading2, error2 } = this.props;

    if (error2) {
      return <div>{error2.message}</div>;
    }
    if (loading2 || loading2 === undefined || individualproductskit === undefined || !individualproductskit.length) {
      return <div>Loading...</div>;
    }

    return (
      <IndividualProductWrapper>
        <Jumbotron style={{background: "#FDEBD0"}}>
          <div className="product">
            <IndividualProductsContent headername="Individual Sets" products={individualproductskit} />
          </div>
        </Jumbotron>
      </IndividualProductWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  
  const { individualproductskit, loading2, error2 } = state.individualProductsList
  return { individualproductskit, loading2, error2 };
  
};

const mapDispatchToProps = (dispatch, { productService }) => {
  return {
    fetchIndividualProducts: fetchIndividualProducts(dispatch, productService)
  };
};

export default WithProductService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IndividualProducts)
);

const IndividualProductWrapper = styled.div`
  .product {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
`;
