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
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { userLogin } from "../apis/userApis";
import { LOGIN_USER } from "../actions/Actions";
const Login = () => {
  const { user } = useSelector((state) => state.authUserReducer);
  const dispatch = useDispatch();
  const [showEmailIcon, setShowEmailIcon] = useState(false);
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      let response = await userLogin(values);
      dispatch({
        type: LOGIN_USER,
        payload: response.data
    });
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
  });

  return (
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
          <FormControl
            sx={{ mb: 5, width: "100%", height: "54px" }}
            variant="outlined"
          >
            <OutlinedInput
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
            <OutlinedInput
              name="password"
              onChange={formik.handleChange}
              id="outlined-adornment-password"
              onFocus={() => setShowPasswordIcon(true)}
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
  );
};

export default Login;
