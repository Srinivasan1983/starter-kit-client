import {combineReducers} from 'redux';
import updateProductList from "./productReducer";
import remainingProductList from './remainingProductReducer'
import individualProductsList from "./individualProductsReducers";

const reducer = combineReducers({
  updateProductList,
  remainingProductList,
  individualProductsList
 });

export default reducer;