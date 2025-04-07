import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import loginSlice from 'container/LoginContainer/slice';
// import supportReducer from 'container/SupportContainer/slice';
import countryReducer from 'module/admin/store/reducer';
// import vendorReducer from 'module/vendor/store/reducer';
import adminReducers from 'module/admin/store/reducer';
// import licenseeReducer from 'module/licensee/store/reducer';
import profileReducer from 'Profile/store/reducer';
import otpSliceo from '../views/pages/authentication/Forgotpassword/container/slice'

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  login: loginSlice,
  // support: supportReducer,
  country: countryReducer,
  // data: vendorReducer,
  adminReducer: adminReducers,
  otp : otpSliceo,
  // licenseeReducer: licenseeReducer,
  profile: profileReducer
});

export default reducer;
