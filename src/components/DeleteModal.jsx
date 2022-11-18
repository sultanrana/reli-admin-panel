import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { handleDeleteModal } from '../features/login/loginSlice';
import {Box, IconButton, Typography, Alert, AlertTitle} from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const DeleteModal = (props) => {
    const dispatch = useDispatch()
    const {isDeleteModal} = useSelector((store) => store.login)
  return (
    <>
      <Dialog open={isDeleteModal} maxWidth="sm" fullWidth onClose={() => dispatch(handleDeleteModal())}>
        <DialogTitle>Confirm the action</DialogTitle>
        <Box position="absolute" top={0} right={0}>
          <IconButton onClick={() => dispatch(handleDeleteModal())}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <Typography></Typography>
          <Alert severity="error">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={() => dispatch(handleDeleteModal())}>
            Cancel
          </Button>
          <Button color="secondary" variant="contained" onClick={() => dispatch(handleDeleteModal())}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteModal