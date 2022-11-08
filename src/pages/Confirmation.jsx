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
import React, { useState } from "react";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { loginUser, responseCode, showError } from "../features/login/loginSlice";
import AlertMessage from "../components/AlertMessage";
import { useEffect } from "react";
import Header from "../components/Header";
const Confirmation = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {baseUrl, code} = useSelector((store) => store.login)
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);
  const [isError, setIsError] = useState(false);
  const formik = useFormik({
    initialValues: {
      otp: "",
      email: localStorage.getItem('email'),
    },
    onSubmit: async (values) => {
      try {
        let response = await axios.post(`${baseUrl}/verifyOTP`, values) 
        // console.log(values);
        dispatch(responseCode(response.data.code))
        dispatch(showError(response.data.message))
        navigate('/set-password')
        console.log(values);
      } catch (error) {
        setIsError(false)
        dispatch(responseCode(error.response.data.code))
        dispatch(showError(error.response.data.message))
      }
    },
    validate: (values) => {
        // console.log(values);
      let errors = {};
      if (!values.otp) {
        errors.otp = "OTP is required";
      }else if(values.otp.length > 6 || values.otp.length < 6 ){
        errors.otp = "OTP must be equal to 6 character";
      }
      return errors;
    },
  });
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
            sx={{ mb: "2rem" }}
          >
            Confrimation Code
          </Typography>
          <Typography
            component="p"
            style={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "24px",
              textAlign: "center",
              letterSpacing: "0.5px",
            }}
            sx={{ mb: "2rem" }}
          >
            Enter your password reset code here:
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
            <OutlinedInput type="text"
              name="otp"
              id="outlined-adornment-otp"
              onChange={formik.handleChange}
              onFocus={() => {
                formik.errors = {};
                setShowPasswordIcon(true)
              }}
              onBlur={() => setShowPasswordIcon(false)}
              startAdornment={
                showPasswordIcon ? (
                  <InputAdornment position="end">
                    <IconButton style={{ color: "#000000" }} edge="start">
                      <VpnKeyIcon />
                    </IconButton>
                  </InputAdornment>
                ) : (
                  ""
                )
              }
              label="Password Reset Code"
            />
            <InputLabel htmlFor="outlined-adornment-otp">
              Password Reset Code
            </InputLabel>
            {formik.errors.otp ? (
              <Box sx={{ color: "red", pt: 1 }}>{formik.errors.otp}</Box>
            ) : (
              ""
            )}
          </FormControl>
          <Button type="submit"
            sx={{ width: "100%", minHeight: "36px", mb: "30px" }}
            variant="contained"
            color="primary"
          >
            Continue
          </Button>
          <Box onClick={() => navigate(-1)}
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
            Back
          </Box>
        </form>
      </Box>
    </Box>
    </>
  );
};

export default Confirmation;
