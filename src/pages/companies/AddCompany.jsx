import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddCompanyModal } from '../../features/login/loginSlice';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const AddCompany = (props) => {

const{isAddCompanyModal} = useSelector((store) => store.login)
const dispatch = useDispatch();
const [status, setStatus] = React.useState('pending');

const handleChange = (event) => {
    setStatus(event.target.value);
};

  return (
    <Dialog
    open={isAddCompanyModal}
    scroll='body'
    aria-describedby="scroll-dialog-description"
  >
    <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
    <DialogContent
        sx={{
            width: '450px'
        }}
    >
      <DialogContentText
        id="scroll-dialog-description"
        tabIndex={-1}
      >
       <FormControl fullWidth sx={{
            mt: 4, mb: 4
       }}>
            <InputLabel id="status-select-label">Company status</InputLabel>
            <Select
                labelId="status-select-label"
                id="status-simple-select"
                value={status}
                label="Company status"
                onChange={handleChange}
            >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
            </Select>
        </FormControl>
        <TextField 
            sx={{width: '100%', mb: 4}}
            id="name-basic"
            label="Company Name"
            variant="outlined" 
            defaultValue="Construction Co"
        />
        <TextField 
            sx={{width: '100%', mb: 4}}
            id="line-1-basic"
            label="Address Line 1"
            variant="outlined" 
            defaultValue="132, Western Ave"
        />
        <TextField 
            sx={{width: '100%', mb: 4}}
            id="line-2-basic"
            label="Address Line 2"
            variant="outlined" 
            defaultValue="132, Western Ave"
        />
        <FormControl fullWidth sx={{ mb: 4 }}>
            <InputLabel id="status-select-label">Distance willing to travel (in miles)</InputLabel>
            <Select
                labelId="status-select-label"
                id="status-simple-select"
                value={status}
                label="Distance willing to travel (in miles)"
                onChange={handleChange}
            >
                <MenuItem value="pending">100m</MenuItem>
                <MenuItem value="completed">200m</MenuItem>
            </Select>
        </FormControl>
        <TextField 
            sx={{width: '100%', mb: 4}}
            id="representative-name-basic"
            label="Representative Name"
            variant="outlined" 
            defaultValue="John Smith"
        />
        <TextField 
            sx={{width: '100%', mb: 4}}
            id="representative-role-basic"
            label="Representative Role"
            variant="outlined" 
            defaultValue="HR"
        />
        <TextField 
            sx={{width: '100%', mb: 4}}
            id="number-basic"
            label="Representative Number"
            variant="outlined" 
            defaultValue="555-555-5555"
        />
        <TextField 
            sx={{width: '100%', mb: 4}}
            id="email-basic"
            label="Representative Email"
            variant="outlined" 
            defaultValue="johnsmith@tepia.co"
        />
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant='outlined' onClick={() => dispatch(handleAddCompanyModal())}>Cancel</Button>
      <Button variant='contained' onClick={() => dispatch(handleAddCompanyModal())}>Save</Button>
    </DialogActions>
  </Dialog>
  );
}


export default AddCompany;