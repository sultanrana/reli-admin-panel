import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import axios from 'axios'
import { loginUser, responseCode, showError } from "../features/login/loginSlice";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import AlertMessage from "../components/AlertMessage";
import Header from "../components/Header";
const SetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {baseUrl, code} = useSelector((store) => store.login)
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);
  const [radioDisabled] = React.useState(true);
  const [capital_letter, setCapitalLetter] = useState(null);
  const [lower_letter, setLowerLetter] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [isError, setIsError] = useState(false);
  const textBlack = {
    color: "black",
  };
  const [selectedValue, setSelectedValue] = React.useState(false);

  const handleChange = (event) => {
    setSelectedValue(true);
  };
  const formik = useFormik({
    initialValues: {
      email: localStorage.getItem('email') ? localStorage.getItem('email'): null,
      newPassword: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        let response = await axios.post(`${baseUrl}/passwordReset`, values)
        dispatch(responseCode(response.data.code))
        dispatch(showError(response.data.message))
        navigate('/login')
      } catch (error) {
        setIsError(false)
        dispatch(responseCode(error.response.data.code))
        dispatch(showError(error.response.data.message))
      }
    },
    validate: (values) => {
      let errors = {};
      var i = 0;
      var character='';
      if (!values.newPassword) {
        errors.newPassword = "Password is required";
      }
      // if(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(values.newPassword)){
      //   // setSymbol('symbol');
      //   errors.newPassword = "Symbol added";
      //   console.log(values.newPassword);
      // }
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
      <Box sx={{ width: "400px", textAlign: "center", p: "20px" }}>
        <Formik>
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
            Set Password
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
            Pick a good one!
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
            <OutlinedInput
              type="password"
              name="newPassword"
              id="outlined-adornment-newPassword"
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
                      <LockOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ) : (
                  ""
                )
              }
              label="New Password"
            />
            <InputLabel htmlFor="outlined-adornment-newPassword">
              New Password
            </InputLabel>
            {formik.errors.newPassword ? (
              <Box sx={{ color: "red", pt: 1 }}>{formik.errors.newPassword}</Box>
            ) : (
              ""
            )}
          </FormControl>
          <FormControl sx={{ width: "100%", ml: "25px", mb: "30px" }}>
            <FormLabel
              id="demo-radio-buttons-group-label"
              style={{ textAlign: "start", color: "#000000" }}
            >
              Requirements
            </FormLabel>
            
            <RadioGroup
              aria-labelledby="demo1-radio-buttons-group-label"
              defaultValue={capital_letter}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="capital_letter"
                disabled={radioDisabled}
                classes={textBlack}
                control={<Radio />}
                label="Capital letter"
              />
            </RadioGroup>
            <RadioGroup
              aria-labelledby="demo2-radio-buttons-group-label"
              defaultValue="lowercase_letter"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="lowercase_letter"
                disabled={radioDisabled}
                control={<Radio />}
                color="black"
                label="Lowercase letter"
              />
            </RadioGroup>
            <RadioGroup
              aria-labelledby="demo3-radio-buttons-group-label"
              defaultValue={symbol}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="symbol"
                disabled={radioDisabled}
                control={<Radio />}
                label="Symbol"
              />
            </RadioGroup>
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
        </Formik>
      </Box>
    </Box>
    </>
  );
};

export default SetPassword;
