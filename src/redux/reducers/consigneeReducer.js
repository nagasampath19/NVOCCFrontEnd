import { UPDATE_CONSIGNEE_DETAILS } from '../actions/consigneeActions';

const initialState = {
  consigneeName: '',
  consigneeAddress1: '',
  consigneeAddress2: '',
  consigneeCity: '',
  consigneeState: '',
  consigneeCountry: '',
  consigneeEmail: '',
  consigneePhone: '',
  consigneePinCode: '',
  consigneeGSTIN: '',
  consigneePAN: '',
  consigneeIEC: '',
};

const consigneeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONSIGNEE_DETAILS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default consigneeReducer;
