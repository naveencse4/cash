import transactionReducer from "./transactionsReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  transactions: transactionReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
