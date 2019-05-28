import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILURE,
  LOADING
} from "../actions/types";

const initialState = {
  text: "",
  products: [],
  loading: false,
  product: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: null
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: null
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
