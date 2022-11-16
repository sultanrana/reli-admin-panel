import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { Container, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography, Box, Checkbox, IconButton, Button, ButtonGroup } from '@mui/material';
import { handleEditAdminPortalUserModal } from '../../features/login/loginSlice';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useRef } from 'react';
import { useState } from 'react';
const EditAdminPortalUser = () => {
const {isEditAdminPortalUserModal} = useSelector((store) => store.login)
const dispatch = useDispatch()
const [status, setStatus] = useState(false)

const handleStatus = () => {
    if (status) {
        setStatus(false)
    }else{
        setStatus(true)
    }
}
  return (
    <>
    <Dialog
    open={isEditAdminPortalUserModal}
    scroll='body'
    aria-describedby="scroll-dialog-description"
    onClose={() =>dispatch(handleEditAdminPortalUserModal())}
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
    <DialogContent
        sx={{
            p: 0,
            mb: 10
        }}
    >
      <DialogContentText
        id="scroll-dialog-description"
        tabIndex={-1}
      >
        <Container maxWidth='xs'>
            <TextField 
                sx={{width: '100%', mb: 4, mt: 5}}
                id="name-basic"
                label="Name"
                variant="outlined" 
                defaultValue="Input text"
            />
            <TextField 
                sx={{width: '100%', mb: 4}}
                id="email-basic"
                label="Email"
                variant="outlined" 
                defaultValue="Input text"
            />
            <TextField 
                sx={{width: '100%', mb: 4}}
                id="phone-basic"
                label="Label"
                variant="outlined" 
                defaultValue="Input text"
            />
            <div className="group">
                <p className="btn_label">Status</p>
                <div className="btn_group">
                    <button className={status? '': 'active'} onClick={handleStatus}>Enabled</button>
                    <button className={status? 'active' : ''} onClick={handleStatus}>Disabled</button>
                </div>
            </div>
        </Container>
       
      </DialogContentText>
    </DialogContent>
    <DialogActions sx={{mb: 2}}>
      <Button variant='outlined' onClick={() => dispatch(handleEditAdminPortalUserModal())}>Cancel</Button>
      <Button variant='contained' onClick={() => dispatch(handleEditAdminPortalUserModal())}>Save</Button>
    </DialogActions>
  </Dialog>
    </>
  )
}

export default EditAdminPortalUser