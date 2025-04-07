import { createSlice } from '@reduxjs/toolkit';

const otpSlice = createSlice({
  name: 'otp',
  initialState: {
    userData: {},
    data: {},
    changePass: {},
    loading: false,
    sendUesrIdData:{},
    error: null
  },
  reducers: {
    sendOtpRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    sendOtpRequestSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    sendOtpRequestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    checkOtpRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    checkOtpRequestSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    checkOtpRequestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    changePasswordRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    changePasswordRequestSuccess: (state, action) => {
      state.loading = false;
      state.changePass = action.payload;
    },
    changePasswordRequestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    sendUesrId : (state , action )=>{
      state.sendUesrIdData=action.payload
    }
  }
});
export const {
  sendOtpRequest,
  sendOtpRequestSuccess,
  sendOtpRequestFail,
  checkOtpRequest,
  checkOtpRequestSuccess,
  checkOtpRequestFail,
  changePasswordRequest,
  changePasswordRequestSuccess,
  changePasswordRequestFail,
  sendUesrId
} = otpSlice.actions;

export default otpSlice.reducer;
