import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Confirmation from "./pages/Confirmation";
import SetPassword from "./pages/SetPassword";
import Services from "./pages/Services/Services";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import ServiceProducts from "./pages/Services/ServiceProducts";
import { Provider } from "react-redux";
import {store} from './store'
import Layout from "./components/Layout";
import { useEffect } from "react";
import RequireAuth from "./components/RequireAuth";
import Products from "./pages/projects/Projects";
import Customers from "./pages/customers/Customers";
import Companies from "./pages/companies/Companies";
import Transactions from "./pages/transactions/Transactions";
import Coupons from "./pages/coupons/Coupons";
import AdminPortalUser from "./pages/admin-portal-user/AdminPortalUser";
import CompanyInfo from "./pages/companies/CompanyInfo";
import SystemVariables from "./pages/system-variables/SystemVariables";
import CustomerDetails from "./pages/customers/CustomerDetails";
import Projects from "./pages/projects/Projects";
import ProjectDetails from "./pages/projects/ProjectDetails";
import AddCoupon from "./pages/coupons/AddCoupon";
import CouponLayout from "./pages/coupons/CouponLayout";
import EditCoupon from "./pages/coupons/EditCoupon";



function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="/services" element={<Services/>} />
              <Route path="/services/:serviceid" element={<ServiceProducts/>} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/companies/:companyid" element={<CompanyInfo />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/:customerid" element={<CustomerDetails />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectid" element={<ProjectDetails />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/coupons" element={<CouponLayout />}>
                <Route path="" element={<Coupons />} />
                <Route path="addCoupon" element={<AddCoupon/>} />
                <Route path="editCoupon" element={<EditCoupon/>} />
              </Route>
              <Route path="/admin-portal-user" element={<AdminPortalUser />} />
              <Route path="/system-variables" element={<SystemVariables />} />
            </Route>
              <Route path="/forgot-password" element={<Forgot />} />
              <Route path="/confirm-password" element={<Confirmation />} />
              <Route path="/set-password" element={<SetPassword />} />
              <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
