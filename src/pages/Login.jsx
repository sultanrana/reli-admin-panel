import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginUser, responseCode, showError } from "../features/login/loginSlice";
import AlertMessage from "../components/AlertMessage";
import Header from "../components/Header";
const Login = () => {
  const { baseUrl, code } = useSelector((store) => store.login)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showEmailIcon, setShowEmailIcon] = useState(false);
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);
  const [isError, setIsError] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        let response = await axios.post(`${baseUrl}/login`, values)
        storeToken(response.data)  
      } catch (error) {
        setIsError(true)
        dispatch(showError(error.response.data.message))
        dispatch(responseCode(error.response.data.code))
      }
      
    },
    validate: (values) => {
      // console.log(values);
      let errors = {};
      if(!values.email){
        errors.email = 'Email required';
      }
      else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email format';
      }
      else if(!values.password){
        errors.password = 'Password required';
      }
      return errors;
    },
  });
  const storeToken = (userData) => {
    console.log(userData);
    const token = userData.data.token;
    localStorage.setItem('token', token)
    dispatch(loginUser(userData))
    navigate('/services')
  }
  return (
    <>
      <Header/>
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "400px", textAlign: "center", px: "20px" }}>

            <form onSubmit={formik.handleSubmit}>
              <Typography
                variant="h4"
                component="h2"
                style={{
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "24px",
                  lineHeight: "24px",
                  letterSpacing: "0.18px",
                  textTransform: "uppercase",
                }}
                sx={{ mb: "4rem" }}
              >
                SIGN IN
              </Typography>
              {code === 200 ? (
                <AlertMessage color="success"/>
                ) : (null)}
              {code === 400 ? (
                <AlertMessage color="error"/>
                ) : null}
              <FormControl
                sx={{ mb: 5, width: "100%", height: "54px" }}
                variant="outlined"
              >
                <OutlinedInput type='email'
                  name="email"
                  onChange={formik.handleChange}
                  id="outlined-adornment-email"
                  onFocus={() => {
                    formik.errors = {};
                    setShowEmailIcon(true);
                  }}
                  onBlur={() => setShowEmailIcon(false)}
                  startAdornment={
                    showEmailIcon ? (
                      <InputAdornment position="end">
                        <IconButton style={{ color: "#000000" }} edge="start">
                          <MailOutlineIcon />
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      ""
                    )
                  }
                  label="Email"
                />
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                {formik.errors.email ? (
                  <Box sx={{ color: "red", pt: 1 }}>{formik.errors.email}</Box>
                ) : (
                  ""
                )}
              </FormControl>
              <FormControl
                sx={{ mb: 5, width: "100%", height: "54px" }}
                variant="outlined"
              >
                <OutlinedInput type='password'
                  name="password"
                  onChange={formik.handleChange}
                  id="outlined-adornment-password"
                  onFocus={() => {
                    formik.errors = {}
                    setShowPasswordIcon(true)
                  }}
                  onBlur={() => setShowPasswordIcon(false)}
                  startAdornment={
                    showPasswordIcon ? (
                      <InputAdornment position="end">
                        <IconButton style={{ color: "#000000" }} edge="start">
                          <LockOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ) : (
                      ""
                    )
                  }
                  label="Password"
                />
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                {formik.errors.password ? (
                  <Box sx={{ color: "red", pt: 1 }}>{formik.errors.password}</Box>
                ) : (
                  ""
                )}
              </FormControl>
              <Button
                sx={{ width: "100%", minHeight: "36px", mb: "30px" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign in
              </Button>
              <Link
                to={"/forgot-password"}
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16px",
                  textAlign: "center",
                  letterSpacing: "1.25px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  color: "#019EB2",
                }}
                className="roboto-font"
              >
                Forgot Password
              </Link>
            </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
