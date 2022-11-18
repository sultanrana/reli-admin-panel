import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/login/loginSlice'
import loadingReducer from './features/loading/loadingSlice'
export const store = configureStore({
  reducer: {
    login: loginReducer,
    loading: loadingReducer
  },
});