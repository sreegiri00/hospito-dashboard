import { combineReducers } from 'redux';
import bankReducer from '../container/bankContainer/slice';

// ==============================|| COMBINE REDUCER ||============================== //

const adminReducer = combineReducers({
  bank: bankReducer,
});

export default adminReducer;
