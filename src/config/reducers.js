import { combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';

import shop from "../containers/shop/redux/shop.reducer.js"

export default function createReducer() {
  return combineReducers({
    intl: intlReducer,
    shop: shop
  });
}
