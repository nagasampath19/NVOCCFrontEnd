import { createStore, combineReducers } from 'redux';
import shippingReducer from './reducers/shipperReducer';

const rootReducer = combineReducers({
  shipping: shippingReducer,
});

const store = createStore(rootReducer);

export default store;
