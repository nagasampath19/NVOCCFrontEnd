import { UPDATE_NOTIFY_PARTIES_DETAILS } from "../actions/notifyPartiesActions";

const initialState = {
  notifyPartyName: "",
  notifyPartyAddress1: "",
  notifyPartyAddress2: "",
  notifyPartyCity: "",
  notifyPartyState: "",
  notifyPartyCountry: "",
  notifyPartyEmail: "",
  notifyPartyPhone: "",
  notifyPartyPinCode: "",
};

const notifyPartiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NOTIFY_PARTIES_DETAILS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default notifyPartiesReducer;
