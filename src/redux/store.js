import { createStore, combineReducers } from 'redux';
import shippingReducer from './reducers/shipperReducer';
import consigneeReducer from './reducers/consigneeReducer';

const rootReducer = combineReducers({
  shipping: shippingReducer,
  consignee: consigneeReducer,
});

const store = createStore(rootReducer);

export default store;
