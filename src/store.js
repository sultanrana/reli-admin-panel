import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './features/login/loginSlice'
import loadingReducer from './features/loading/loadingSlice'
import couponReducer from './features/coupons/couponsSlice'
import systemVariableReducer from './features/system-variables/systemVariableSlice'
import adminPortalUserReducer from './features/admin-portal-user/adminPortalUserSlice'
import customerReducer from './features/customer/customerSlice'
import serviceReducer from './features/services/serviceSlice'
import companyReducer from './features/companies/companySlice'
import userInfoReducer from './features/userInfo/userInfoSlice'
import transactionReducer from './features/transactions/transactionSlice'
import projectReducer from './features/projects/projectSlice'
import activityLogReducer from './features/activity-log/activityLogSlice'

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
    userInfo: userInfoReducer,
    transaction: transactionReducer,
    project: projectReducer,
    activityLog: activityLogReducer,
  },
});