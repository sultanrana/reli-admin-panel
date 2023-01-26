import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/login/loginSlice'
import loadingReducer from './features/loading/loadingSlice'
import couponReducer from './features/coupons/couponsSlice'
import systemVariableReducer from './features/system-variables/systemVariableSlice'
import adminPortalUserReducer from './features/admin-portal-user/adminPortalUserSlice'
import customerReducer from './features/customer/customerSlice'
import serviceReducer from './features/services/serviceSlice'
import companyReducer from './features/companies/companySlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    loading: loadingReducer,
    coupon: couponReducer,
    systemVariable: systemVariableReducer,
    adminPortalUser: adminPortalUserReducer,
    customer: customerReducer,
    service: serviceReducer,
    company: companyReducer,
  },
});