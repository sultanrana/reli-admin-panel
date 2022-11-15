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
const AddUserModal = () => {
const {isAddUserModal} = useSelector((store) => store.login)
const dispatch = useDispatch()
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
  return (
    <>
    <Dialog
    open={isAddUserModal}
    scroll='body'
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
            Company Name: Construction Co 
        </Typography>
    </Box>
    <DialogContent
        sx={{
            p: 0
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
                <p className="btn_label">Approved by Reli</p>
                <div className="btn_group">
                    <button className={approvedByReli? '': 'active'} onClick={handleApprovedByReli}>false</button>
                    <button className={approvedByReli? 'active' : ''} onClick={handleApprovedByReli}>true</button>
                </div>
            </div>
            <div className="group">
                <p className="btn_label">Status</p>
                <div className="btn_group">
                    <button className={status? '': 'active'} onClick={handleStatus}>Enabled</button>
                    <button className={status? 'active' : ''} onClick={handleStatus}>Disabled</button>
                </div>
            </div>
            <div className="group">
                <p className="btn_label">Account Type</p>
                <div className="btn_group">
                    <button className={accountType? '': 'active'} onClick={handleAccountType}>Staff</button>
                    <button className={accountType? 'active' : ''} onClick={handleAccountType}>Admin</button>
                </div>
            </div>
            
        </Container>
       
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant='outlined' onClick={() => dispatch(handleAddUserModal())}>Cancel</Button>
      <Button variant='contained' onClick={() => dispatch(handleAddUserModal())}>Save</Button>
    </DialogActions>
  </Dialog>
    </>
  )
}

export default AddUserModal