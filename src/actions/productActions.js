import {
  FETCH_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_FAILURE,
  FETCH_REMAINING_PRODUCT,
  FETCH_INDIVIDUAL_PRODUCTS,
  LOADING
} from "./types";

const productsRequested = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  };
};

export const fetchProductsLoaded = newProducts => {
  return {
    type: FETCH_PRODUCTS,
    payload: newProducts
  };
};

export const fetchIndividualProductsLoaded = newProducts => {
  return {
    type: FETCH_INDIVIDUAL_PRODUCTS,
    payload: newProducts
  };
};

export const fetchProductLoaded = product => {
  return {
    type: FETCH_PRODUCT,
    payload: product
  };
};

export const fetchRemainingProductLoaded = otherproductkit => {
  return {
    type: FETCH_REMAINING_PRODUCT,
    payload: otherproductkit
  };
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};

const productsError = error => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  };
};

export const fetchProducts = (dispatch, productService) => async () => {
  dispatch(productsRequested());
  await productService
    .getAllProducts()
    .then(products => dispatch(fetchProductsLoaded(products)))
    .catch(err => dispatch(productsError(err)));
};

export const fetchIndividualProducts = (dispatch, productService) => async () => {
  console.log('productService', productService);
  
  dispatch(productsRequested());
  await productService
    .getAllIndividualProducts()
    .then(products => dispatch(fetchIndividualProductsLoaded(products))
    )
    .catch(err => dispatch(productsError(err)));
};

export const fetchProductById = (dispatch, productService) => async id => {
  dispatch(productsRequested());
  await productService
    .getProductById(id)
    .then(product => {
      dispatch(fetchProductLoaded(product));
    })
    .catch(err => dispatch(productsError(err)));
};
export const fetchRemainingProductById = (
  dispatch,
  productService
) => async id => {
  dispatch(productsRequested());
  await productService
    .getRemainingProductById(id)
    .then(otherproductkit => {
      dispatch(fetchRemainingProductLoaded(otherproductkit));
    })
    .catch(err => dispatch(productsError(err)));
};
