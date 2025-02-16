import { UPDATE_SHIPPING_DETAILS } from '../actions/shipperActions';

const initialState = {
  shipperName: '',
  shipperAddress1: '',
  shipperAddress2: '',
  shipperCity: '',
  shipperState: '',
  shipperCountry: '',
  shipperEmail: '',
  shipperPhone: '',
  shipperPinCode: '',
  shipperCIN: ''
};

const shippingReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SHIPPING_DETAILS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default shippingReducer;
