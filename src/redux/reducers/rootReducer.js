import { combineReducers } from 'redux';
import shippingReducer from './shipperReducer';
import consigneeReducer from './consigneeReducer';
import { RESET_STATE } from '../actions/authActions';

const appReducer = combineReducers({
  shipping: shippingReducer,
  consignee: consigneeReducer,
  // ...other reducers
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
