import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { handleDeleteModal } from '../features/login/loginSlice';


const DeleteModal = (props) => {
    const dispatch = useDispatch()
    const {isDeleteModal} = useSelector((store) => store.login)
  return (
    <Dialog
        open={isDeleteModal}
        onClose={() => dispatch(handleDeleteModal())}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete"}
        </DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
           <Container maxWidth='xs' sx={{minWidth: '300px'}}>
                Are you sure 
           </Container>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(handleDeleteModal())}>Disagree</Button>
          <Button onClick={() => dispatch(handleDeleteModal())} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default DeleteModal