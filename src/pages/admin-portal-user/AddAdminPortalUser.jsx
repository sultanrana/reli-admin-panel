import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { Container, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography, Box, Checkbox, IconButton, Button, ButtonGroup } from '@mui/material';
import { handleAddAdminPortalUserModal, handleAddUserModal } from '../../features/login/loginSlice';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useRef } from 'react';
import { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import Loading from '../../components/Loading';
import { addPortalUser, getPortalUser } from '../../features/admin-portal-user/adminPortalUserSlice';
import { useNavigate } from 'react-router-dom';
const AddAdminPortalUser = () => {
const {isAddAdminPortalUserModal} = useSelector((store) => store.login)
const {isLoading} = useSelector((store) => store.adminPortalUser)
const dispatch = useDispatch();
const navigate = useNavigate();
const [status, setStatus] = useState(false)
const [userType, setUserType] = useState('admin');



const handleUserType = (e) => {
  setUserType(e.target.value);
}
const handleStatus = () => {
    if (status) {
        setStatus(false)
    }else{
        setStatus(true)
    }
}


const validationSchema = Yup.object({
  firstName: Yup.string().required('Please enter a first name'),
  lastName: Yup.string().required('Please enter a last name'),
  email: Yup.string().email().required('Please enter an email address'),
});
const formik = useFormik({
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    userType: ''
  },
  onSubmit: (values) => {
    values.userType = userType;
    values.statusBit = !status;
    dispatch(addPortalUser(values));
    dispatch(handleAddAdminPortalUserModal());
    navigate('/admin-portal-user');
  },
  validationSchema
});

if(isLoading){
  return (
      <Loading/>
  )
}

  return (
      <Dialog
      open={isAddAdminPortalUserModal}
      scroll='body'
      aria-describedby="scroll-dialog-description"
      onClose={() =>dispatch(handleAddAdminPortalUserModal())}
    >
      <DialogTitle id="scroll-dialog-title" sx={{ 
          p: 1,
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '24px',
          lineHeight: '24px',
          letterSpacing: '0.18px',
          color: '#000000'
      }}>Manage Admin User</DialogTitle>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent
            sx={{
                p: 0,
                mb: 10
            }}
        >
          <DialogContentText
            component={'div'}
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            <Container maxWidth='xs'>
                <TextField 
                    sx={{width: '100%', mb: 4, mt: 5}}
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    {...formik.getFieldProps('firstName')}
                    error = {Boolean(formik.errors.firstName) && Boolean(formik.touched.firstName)}
                    helperText = {Boolean(formik.touched.firstName) && formik.errors.firstName}
                />
                <TextField 
                    sx={{width: '100%', mb: 4}}
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    {...formik.getFieldProps('lastName')}
                    error = {Boolean(formik.errors.lastName) && Boolean(formik.touched.lastName)}
                    helperText = {Boolean(formik.touched.lastName) && formik.errors.lastName}
                />
                <TextField 
                    sx={{width: '100%', mb: 4}}
                    id="email"
                    name='email'
                    label="Email"
                    {...formik.getFieldProps('email')}
                    error = {Boolean(formik.errors.email) && Boolean(formik.touched.email)}
                    helperText = {Boolean(formik.touched.email) && formik.errors.email}
                />
                <FormControl fullWidth sx={{mb: 3}}>
                  <InputLabel id="userType">Role</InputLabel>
                  <Select
                    labelId="userType"
                    id="userType"
                    name="userType"
                    label="Role"
                    value={userType}
                    onChange={handleUserType}
                  >
                    <MenuItem value='admin'>Admin</MenuItem>
                    {/* <MenuItem value='user'>User</MenuItem> */}
                  </Select>
                </FormControl>
                <Box className="group">
                    <Typography component={'span'} className="btn_label">Status</Typography>
                    <Box className="btn_group">
                        <button type="button" className={status? '': 'active'} onClick={handleStatus}>Enabled</button>
                        <button type="button" className={status? 'active' : ''} onClick={handleStatus}>Disabled</button>
                    </Box>
                </Box>
            </Container>
          
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{mb: 2}}>
          <Button variant='outlined' onClick={() => dispatch(handleAddAdminPortalUserModal())}>Cancel</Button>
          {/* <Button variant='contained' onClick={() => dispatch(handleAddAdminPortalUserModal())}>Save</Button> */}
          <Button type="submit" variant='contained'>Save</Button>
        </DialogActions>
      </form>
      </Dialog>
  )
}

export default AddAdminPortalUser