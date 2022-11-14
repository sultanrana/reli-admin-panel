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
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { responseCode, showError } from "../features/login/loginSlice";
import AlertMessage from "../components/AlertMessage";
import Header from "../components/Header";
const Forgot = () => {
  const navigate = useNavigate();
  const {baseUrl, code} = useSelector((store) => store.login)
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      try {
        let response = await axios.post(`${baseUrl}/forgotPassword`, values) 
        console.log(response);
        localStorage.setItem('email', values.email)
        dispatch(responseCode(response.data.code))
        dispatch(showError(response.data.message))
        navigate('/confirm-password')
      } catch (error) {
        setIsError(true)
        dispatch(showError(error.response.data.message))
        dispatch(responseCode(error.response.data.code))
      }
       
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email format';
      }
      return errors;
    },
  });

  const [showEmailIcon, setShowEmailIcon] = useState(false);

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
            sx={{ mb: "4rem", width: "100%" }}
          >
            REQUEST PASSWORD RESET
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
              id="outlined-adornment-email"
              onChange={formik.handleChange}
              onFocus={() => {
                formik.errors = {};
                setShowEmailIcon(true)
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
          <Button
            type="submit"
            sx={{ width: "100%", minHeight: "36px", mb: "30px" }}
            variant="contained"
            color="primary"
          >
            REQUEST RESET
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

export default Forgot;
