import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { Container, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography, Box, Checkbox, IconButton, Button, ButtonGroup } from '@mui/material';
import { handleAddUserModal } from '../../features/login/loginSlice';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useRef } from 'react';
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { object } from 'yup';
import * as Yup from "yup";
import { addUser, getUsers } from '../../features/userInfo/userInfoSlice';
import { useNavigate, useParams } from 'react-router-dom';
const AddUserModal = () => {
const {isAddUserModal} = useSelector((store) => store.login)
const {companyDetail} = useSelector((store) => store.company)
const dispatch = useDispatch();
const navigate = useNavigate();
const param = useParams();
const [approvedByReli, setApprovedByReli] = useState(false)
const [status, setStatus] = useState(false)
const [accountType, setAccountType] = useState(false)


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
const handleApprovedByReli = () => {
    if (approvedByReli) {
        setApprovedByReli(false)
    }else{
        setApprovedByReli(true)
    }
}
const handleStatus = () => {
    if (status) {
        setStatus(false)
    }else{
        setStatus(true)
    }
}
const handleAccountType = () => {
    if (accountType) {
        setAccountType(false)
    }else{
        setAccountType(true)
    }
}
const initialValues = {
    name: '',
    email: '',
    phone: '',
}



  return (
    <>
    <Dialog
    open={isAddUserModal}
    scroll='body'
    onClose={() => dispatch(handleAddUserModal())}
    aria-describedby="scroll-dialog-description"
  >
    <DialogTitle id="scroll-dialog-title" sx={{ 
        p: 1,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '24px',
        lineHeight: '24px',
        letterSpacing: '0.18px',
        color: '#000000'
     }}>Company User</DialogTitle>
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
        <Typography sx={{
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '20px',
            letterSpacing: '0.4px',
            color: '#000000'
        }}>
            Company Name: {companyDetail?.data?.companyName} 
        </Typography>
    </Box>
    <Formik
        initialValues={initialValues} 
        onSubmit={(values, formikHelpers) => {
            values.company = param.companyid;
            values.status = status;
            values.accountType = accountType;
            if(imgInput.current.files[0]){
                values.image = imgInput.current.files[0];
            }
            dispatch(addUser(values));
            dispatch(handleAddUserModal());
            dispatch(getUsers(param.companyid));
        }}
        validationSchema= {object({
            name: Yup.string().required('Name is required.'),
            email: Yup.string().required('Email is required.').email(),
            phone: Yup.number().required('Phone is required.'),
        })}
    >
        {({errors, touched, isValid, dirty}) => (
            <Form>
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
                        <Field as={TextField} 
                            sx={{width: '100%', mb: 4, mt: 5}}
                            id="name"
                            name="name"
                            label="Name"
                            variant="outlined" 
                            error = {Boolean(errors.name) && Boolean(touched.name)}
                            // helperText = {Boolean(touched.name) && errors.name}
                        />
                        <Field as={TextField}  
                            sx={{width: '100%', mb: 4}}
                            id="email"
                            name="email"
                            label="Email"
                            variant="outlined" 
                            error = {Boolean(errors.email) && Boolean(touched.email)}
                            // helperText = {Boolean(touched.email) && errors.email}
                        />
                        <Field as={TextField}  
                            sx={{width: '100%', mb: 4}}
                            id="phone"
                            name="phone"
                            label="Phone"
                            variant="outlined" 
                            error = {Boolean(errors.phone) && Boolean(touched.phone)}
                            // helperText = {Boolean(touched.phone) && errors.phone}
                        />
                        <FormControl fullWidth sx={{ mb: 4 }}>
                            <InputLabel id="approvedByReli">Approved by Reli</InputLabel>
                            <Field as={Select}
                                labelId="approvedByReli"
                                id="approvedByReli"
                                name="approvedByReli"
                                label="Approved by Reli"
                                error = {Boolean(errors.approvedByReli) && Boolean(touched.approvedByReli)}
                                // helperText = {Boolean(touched.approvedByReli) && errors.approvedByReli}
                            >
                                <MenuItem value='true'>Active</MenuItem>
                                <MenuItem value='false'>Pending</MenuItem>
                                <MenuItem value='rejected'>Rejected</MenuItem>
                            </Field>
                        </FormControl>
                        {/* <div className="group">
                            <p className="btn_label">Approved by Reli</p>
                            <div className="btn_group">
                                <button type="button" className={approvedByReli? '': 'active'} onClick={handleApprovedByReli}>false</button>
                                <button type="button" className={approvedByReli? 'active' : ''} onClick={handleApprovedByReli}>true</button>
                            </div>
                        </div> */}
                        <div className="group">
                            <p className="btn_label">Status</p>
                            <div className="btn_group">
                                <button type="button" className={status? 'active' : ''} onClick={handleStatus}>Enabled</button>
                                <button type="button" className={status? '': 'active'} onClick={handleStatus}>Disabled</button>
                            </div>
                        </div>
                        <div className="group">
                            <p className="btn_label">Account Type</p>
                            <div className="btn_group">
                                <button type="button" className={accountType? '': 'active'} onClick={handleAccountType}>Staff</button>
                                <button type="button" className={accountType? 'active' : ''} onClick={handleAccountType}>Admin</button>
                            </div>
                        </div>
                        
                    </Container>
                
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button variant='outlined' onClick={() => dispatch(handleAddUserModal())}>Cancel</Button>
                {/* <Button variant='contained' onClick={() => dispatch(handleAddUserModal())}>Save</Button> */}
                <Button disabled={!dirty || !isValid} type='submit' variant='contained'>Save</Button>
                </DialogActions>
            </Form>
        )}
    </Formik>
  </Dialog>
    </>
  )
}

export default AddUserModal