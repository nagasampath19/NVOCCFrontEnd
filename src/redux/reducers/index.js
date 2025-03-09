import { combineReducers } from "redux";
import notifyPartiesReducer from "./notifyPartiesReducer";
// ...existing imports...

const rootReducer = combineReducers({
  notifyParties: notifyPartiesReducer,
  // ...existing reducers...
});

export default rootReducer;
