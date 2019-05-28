import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_INDIVIDUAL_PRODUCTS,
    FETCH_PRODUCTS_FAILURE,
    LOADING
  } from "../actions/types";
  
  const initialState = {
    text: "",
    loading2: false,
    individualproductskit: [],
    error2: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading2: true,
          error2: null
        };
        case FETCH_INDIVIDUAL_PRODUCTS:
        return {
          ...state,
          individualproductskit: action.payload,
          loading2: false,
          error2: null
        };
      case LOADING:
        return {
          ...state,
          loading2: true
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          products: [],
          loading2: false,
          error2: action.payload
        };
      default:
        return state;
    }
  }
  