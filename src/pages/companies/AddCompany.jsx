import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddCompanyModal } from '../../features/login/loginSlice';
import { Container, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography, Box, Checkbox, IconButton } from '@mui/material';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useRef } from 'react';
import { Field, Form, Formik, useFormikContext } from 'formik';
import { object } from 'yup';
import * as Yup from "yup";
import { useEffect } from 'react';
import { getServices } from '../../features/services/serviceSlice';
import { addCompany, getCompanies } from '../../features/companies/companySlice';
import { useNavigate } from 'react-router-dom';
const AddCompany = (props) => {

const{isAddCompanyModal} = useSelector((store) => store.login)
const{services} = useSelector((store) => store.service)
const dispatch = useDispatch();
const [status, setStatus] = React.useState('enable');
const [windowChecked, setWindowChecked] = React.useState(false);
const [slidingGlassDoorChecked, setSlidingGlassDoorChecked] = React.useState(false);
const [interiorDoorChecked, setInteriorDoorChecked] = React.useState(false);
const [distance, setDistance] = React.useState('100m');
const navigate = useNavigate();
// const { values } = useFormikContext();

const handleChange = (event) => {
    setStatus(event.target.value);
};
let imgInput = useRef(null)
let imgRef = useRef(null)
const pickFile = () => {
    imgInput.current.click();
}
const handleAddImg = (e) => {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    imgRef.current.src = url;
}
const clearImgRef = () => {
    imgRef.current.src = '/images/circle-gray.png';
}

const initialValues ={
    image: {},
    companyStatus: status,
    companyName: "",
    distanceWillingTravel: distance,
}
// program to convert first letter of a string to uppercase
function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}
useEffect(() => {
    dispatch(getServices());
}, [])

  return (
    <Dialog
    open={isAddCompanyModal}
    scroll='body'
    onClose={() => dispatch(handleAddCompanyModal())}
    aria-describedby="scroll-dialog-description"
  >
    <Formik 
        initialValues={initialValues} 
        onSubmit={(values, formikHelpers) => {
            if (imgInput.current.files[0]) {
                values.image = imgInput.current.files[0];
            }
            dispatch(addCompany(values));
            dispatch(handleAddCompanyModal());
            console.log("form values: ", values);
        }}
        validationSchema= {object({
            companyName: Yup.string().required(),
            representativeName: Yup.string().required(),
            representativeEmail: Yup.string().required(),
        })}
    >
        {({errors, touched, isValid, dirty}) => (
            <Form>
                <DialogTitle id="scroll-dialog-title" sx={{ 
                    p: 1,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '24px',
                    lineHeight: '24px',
                    letterSpacing: '0.18px',
                    color: '#000000'
                }}>Add Company Details</DialogTitle>
                <Box component="div" sx={{ 
                    display: 'flex',
                    justifyContent: 'center', 
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Box component="div" className='addImg'>
                        <img src="/images/circle-gray.png" alt="addCompanyImg" ref={imgRef} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                        <input type="file" hidden id="getImg" ref={imgInput} onChange={(e) => handleAddImg(e)}/>
                    </Box>
                    <Box component="div">
                        <IconButton onClick={pickFile}>
                            <ModeEditOutlineRoundedIcon/>
                        </IconButton>
                        <IconButton onClick={clearImgRef}>
                            <CloseRoundedIcon/>
                        </IconButton>
                    </Box>
                </Box>
                <DialogContent
                    sx={{
                        p: 0
                    }}
                >
                <DialogContentText
                    component={'div'}
                    id="scroll-dialog-description"
                    tabIndex={-1}
                >
                    <Container maxWidth='xs'>
                        <FormControl fullWidth sx={{
                            mt: 4, mb: 4
                        }}>
                            <InputLabel id="companyStatus">Company status</InputLabel>
                            <Field as={Select}
                                labelId="companyStatus"
                                id="companyStatus"
                                name="companyStatus"
                                label="Company status"
                                error = {Boolean(errors.companyStatus) && Boolean(touched.companyStatus)}
                                helperText = {Boolean(touched.companyStatus) && errors.companyStatus}
                            >
                                <MenuItem value="enable">Enable</MenuItem>
                                <MenuItem value="disable">Disable</MenuItem>
                            </Field>
                        </FormControl>
                        <Field as={TextField} 
                            sx={{width: '100%', mb: 4}}
                            id="companyName"
                            name="companyName"
                            label="Company Name"
                            variant="outlined" 
                            error = {Boolean(errors.companyName) && Boolean(touched.companyName)}
                            helperText = {Boolean(touched.companyName) && errors.companyName}
                        />
                        <Field as={TextField}  
                            sx={{width: '100%', mb: 4}}
                            id="addressOne"
                            name="addressOne"
                            label="Address Line 1"
                            variant="outlined"
                            error = {Boolean(errors.addressOne) && Boolean(touched.addressOne)}
                            helperText = {Boolean(touched.addressOne) && errors.addressOne}
                        />
                        <Field as={TextField}
                            sx={{width: '100%', mb: 4}}
                            id="addressTwo"
                            name="addressTwo"
                            label="Address Line 2"
                            variant="outlined" 
                            error = {Boolean(errors.addressTwo) && Boolean(touched.addressTwo)}
                            helperText = {Boolean(touched.addressTwo) && errors.addressTwo}
                        />
                        <FormControl fullWidth sx={{ mb: 4 }}>
                            <InputLabel id="distanceWillingTravel">Distance willing to travel (in miles)</InputLabel>
                            <Field as={Select}
                                labelId="distanceWillingTravel"
                                id="distanceWillingTravel"
                                name="distanceWillingTravel"
                                label="Distance willing to travel (in miles)"
                                error = {Boolean(errors.distanceWillingTravel) && Boolean(touched.distanceWillingTravel)}
                                helperText = {Boolean(touched.distanceWillingTravel) && errors.distanceWillingTravel}
                            >
                                <MenuItem value="100m">100m</MenuItem>
                                <MenuItem value="200m">200m</MenuItem>
                            </Field>
                        </FormControl>
                        <Field as={TextField} 
                            sx={{width: '100%', mb: 4}}
                            id="representativeName"
                            name="representativeName"
                            label="Representative Name"
                            variant="outlined" 
                            error = {Boolean(errors.representativeName) && Boolean(touched.representativeName)}
                            helperText = {Boolean(touched.representativeName) && errors.representativeName}
                        />
                        <Field as={TextField} 
                            sx={{width: '100%', mb: 4}}
                            id="representativeNumber"
                            name="representativeNumber"
                            label="Representative Number"
                            variant="outlined" 
                            error = {Boolean(errors.representativeNumber) && Boolean(touched.representativeNumber)}
                            helperText = {Boolean(touched.representativeNumber) && errors.representativeNumber}
                        />
                        <Field as ={TextField} 
                            sx={{width: '100%', mb: 4}}
                            id="representativeEmail"
                            name="representativeEmail"
                            label="Representative Email"
                            variant="outlined" 
                            error = {Boolean(errors.representativeEmail) && Boolean(touched.representativeEmail)}
                            helperText = {Boolean(touched.representativeEmail) && errors.representativeEmail}
                        />
                        <Box sx={{ pl: 5}}>
                            <Typography
                                sx={{
                                    fontSize: '17px',
                                    fontWeight: '600',
                                    textTransform: 'capitalize',
                                    color: '#000000',
                                    textDecoration: 'underline'
                                }}
                            >
                                Services Available
                            </Typography>
                            <Box>
                                {services.data?.map((service) => {
                                    return (
                                        <Field as={FormControlLabel}
                                        key={service.id}
                                        name="services"
                                        value={service.name}
                                        label={capitalizeFirstLetter(service.name)+ ':'}
                                        labelPlacement="start"
                                        sx={{
                                            color: '#000000',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            width: '250px'
                                        }}
                                        control={<Checkbox color="black"/>}
                                        // checked={values.services.includes(service.name)}
                                        />
                                    )
                                } )}
                            </Box>
                        </Box>
                    </Container>
                
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button variant='outlined' onClick={() => dispatch(handleAddCompanyModal())}>Cancel</Button>
                {/* <Button variant='contained' onClick={() => dispatch(handleAddCompanyModal())}>Save</Button> */}
                <Button disabled={!dirty || !isValid} type='submit' variant='contained'>Save</Button>
                </DialogActions>
            </Form>
        )}
    </Formik>
  </Dialog>
  );
}


export default AddCompany;