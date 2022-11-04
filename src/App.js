import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
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
import store from "./Store";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route path="/confirm-password" element={<Confirmation />} />
            <Route path="/set-password" element={<SetPassword />} />
            <Route path="/services" element={<Services />} />
            <Route path="/companies" element={<ServiceProducts />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
