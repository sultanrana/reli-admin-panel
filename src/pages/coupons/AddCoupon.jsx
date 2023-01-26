import { Box, Button, Card, Grid, IconButton, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Switch } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BeardcrumNavigator from '../../components/BeardcrumNavigator';
import Sidebar from '../../components/Sidebar';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useRef } from 'react';
import {ActivityLogBox, ActivityLogText, PostSearch, PostBox, PostSearchInput, PostSearchButton, AboutCard} from '../../components/styles/ActivityBox.styles'
import { Field, Form, Formik, useFormik } from 'formik';
import { object } from 'yup';
import * as Yup from "yup";
import { string } from 'yup/lib/locale';
import { addCoupon } from '../../features/coupons/couponsSlice';
import Loading from '../../components/Loading';
const CouponCard = styled(Card)(({theme}) => ({
  background: '#F7F7F7',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  gap: '16px'
}))
const CouponInnerBox = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '16px',
  gap: '11px',
  background: '#E8E8E8',
  boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
  [theme.breakpoints.down('md')] : {
    width: '100%',
  },
  [theme.breakpoints.up('md')] : {
    flex: '1'
  },
}))
const CouponButton = styled(Button)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '345px',
  },
}))


const initialValues ={
  name: '',
  description: '',
  service: '',
  image: '',
  code: '',
  statusBit: true
}



const AddCoupon = () => {
const {isDrawerOpen} = useSelector((store) => store.login)
const {isLoading} = useSelector((store) => store.coupon)
const dispatch = useDispatch();
const breadcrumbs = [
    <Typography key="3" color="text.primary" style={{
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '34px',
        lineHeight: '36px',
        color: '#000000'
    }}>
        Coupons
    </Typography>
];
const [isSwitch, SetIsSwitch] = useState('enabled')
const handleSwitch = (value) => {
  if(value === 'enabled'){
    SetIsSwitch('disabled')
  }else{
    SetIsSwitch('enabled')
  }
}
let imgInput = useRef(null)
let imgRef = useRef(null)
const pickFile = () => {
    imgInput.current.click();
}
const handlePickImage = (e) => {
  // console.log(e);
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    imgRef.current.src = url;
    
}


if(isLoading){
  return (
      <Loading/>
  )
}


  return (
    <div className="page-section">
      <Sidebar/>
      <Box className="page-content" sx={{width: isDrawerOpen ? `calc(100% - 240px)` : `calc(100% - 57px)`, overflow: "hidden"}}>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3
            }}>
            <BeardcrumNavigator breadcrumbs={breadcrumbs ? breadcrumbs : "Beardcrums"}/>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <AboutCard>
            <Formik 
                initialValues={initialValues} 
                onSubmit={(values, formikHelpers) => {
                  values.image = imgInput.current.files[0];
                  values.statusBit = (isSwitch === 'enabled'? true: false);
                  // console.log(values);
                  dispatch(addCoupon(values));
                  formikHelpers.resetForm();
                }}
                validationSchema= {object({
                  name: Yup.string().min(3, 'Minimum 3 character are required').required(),
                  description: Yup.string().required(),
                  // service: Yup.string().required(),
                  code: Yup.string().required(),
                  // image: Yup.mixed().required('File is required'),
                })}
              >
              {({errors, touched, isValid, dirty}) => (
                <Form>
                  
                  <CouponCard>
                    <Typography sx={{display: 'block', fontSize: '34px', width: '100%'}} variant="h3" >Add Coupon</Typography>
                
                      <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        width: '100%'
                      }}>
                        <CouponInnerBox>
                          <Field as={TextField} 
                            sx={{width: '100%'}}
                            id="name"
                            name="name"
                            label="Coupon Name"
                            variant="outlined"
                            error = {Boolean(errors.name) && Boolean(touched.name)}
                            helperText = {Boolean(touched.name) && errors.name}
                          />
                          <Field as={TextField} sx={{
                            width: '100%',
                            mt: 3,
                            mb: 7
                          }}
                            id="description"
                            name="description"
                            label="Coupon Description"
                            multiline
                            rows={10}
                            variant="outlined"
                            error = {Boolean(errors.description) && Boolean(touched.description)}
                            helperText = {Boolean(touched.description) && errors.description}
                          />
                          <FormControl fullWidth sx={{mb: 3}}>
                            <InputLabel id="service">Service</InputLabel>
                            <Field as={Select}
                              labelId="service"
                              id="service"
                              name="service"
                              label="Service"
                            >
                              <MenuItem value='Windows'>Windows</MenuItem>
                              <MenuItem value="Sliding Glass Doors">Sliging Glass Doors</MenuItem>
                              <MenuItem value="Doors">Doors</MenuItem>
                            </Field>
                          </FormControl>
                          <Field as={FormControlLabel}
                            sx={{
                              fontSize: '16px',
                              letterSpacing: '1.25px',
                              color: '#979797'
                            }}
                            name="statusBit"
                            value={isSwitch}
                            control={<Switch color="primary" checked={isSwitch=== 'enabled'? true: false}
                            onChange={(e) => handleSwitch(e.target.value)}/>}
                            label={isSwitch=== 'enabled' ? 'Enabled' : 'Disabled'}
                            labelPlacement="start"
                          />
                          <Field as={TextField} 
                            sx={{width: '100%'}}
                            id="code"
                            name="code"
                            label="Coupon Code"
                            variant="outlined"
                            error = {Boolean(errors.code) && Boolean(touched.code)}
                            helperText = {Boolean(touched.code) && errors.code}
                          />
                        </CouponInnerBox>
                        <CouponInnerBox sx={{alignItems: 'center', minHeight: '482px', justifyContent: 'center'}}>
                          <Box>
                            <img src="/images/image.png" alt="img" ref={imgRef} style={{width: '100%'}}/>
                          </Box>
                          <Button variant="contained" startIcon={<AddRoundedIcon/>} onClick={pickFile}>
                            Upload
                          </Button>
                          {/* <input type="file" name="image" id="image"  ref={imgInput} onChange={(e) => handlePickImage(e)}/> */}
                          <input type="file" name="image" hidden id="image"  ref={imgInput} onChange={(e) => handlePickImage(e)}/>
                          <Typography sx={{fontSize: '12px'}}>
                            Recommended image size is 900x450 px <br/>
                            Image type should be .jpeg <br/>
                            Corners will be trimmed on display with 10pt radius
                          </Typography>
                        </CouponInnerBox>
                      
                      </Box>
                      <CouponButton disabled={!dirty || !isValid} type='submit' variant='contained'>Save</CouponButton>
                  </CouponCard>
                </Form>
              )}
            </Formik>
          </AboutCard>
          <ActivityLogBox>
            <ActivityLogText>
              Activity log
            </ActivityLogText>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px', my: 1}}>
              <PostBox>
                <ActivityLogText sx={{fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}}>
                  Title
                </ActivityLogText>
                <ActivityLogText>
                  Message
                </ActivityLogText>
                <ActivityLogText sx={{ fontSize: '10px', fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}} >
                  Timestamp
                </ActivityLogText>
              </PostBox>
              <PostBox>
                <ActivityLogText sx={{fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}}>
                  Title
                </ActivityLogText>
                <ActivityLogText>
                  Message
                </ActivityLogText>
                <ActivityLogText sx={{ fontSize: '10px', fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}} >
                  Timestamp
                </ActivityLogText>
              </PostBox>
              <PostBox>
                <ActivityLogText sx={{fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}}>
                  Title
                </ActivityLogText>
                <ActivityLogText>
                  Message
                </ActivityLogText>
                <ActivityLogText sx={{ fontSize: '10px', fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}} >
                  Timestamp
                </ActivityLogText>
              </PostBox>
              <PostBox>
                <ActivityLogText sx={{fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}}>
                  Title
                </ActivityLogText>
                <ActivityLogText>
                  Message
                </ActivityLogText>
                <ActivityLogText sx={{ fontSize: '10px', fontWeight: '500', color: 'rgba(0, 0, 0, 0.6)'}} >
                  Timestamp
                </ActivityLogText>
              </PostBox>
              <PostSearch>
                <PostSearchInput
                  defaultValue="Add note here"
                ></PostSearchInput>
                <PostSearchButton variant='contained'>Post</PostSearchButton>
              </PostSearch>
            </Box>
          </ActivityLogBox>
        </Box>
      </Box>
    </div>  
  )
}

export default AddCoupon