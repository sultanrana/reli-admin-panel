import { Alert, Box, Button, Collapse, IconButton } from '@mui/material';
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { responseCode, showError } from '../features/login/loginSlice';

const AlertMessage = (props) => {
    const dispatch = useDispatch();
    const {errorMessage } = useSelector((store) => store.login)

    const {color} = props
    // console.log( color, errorMessage);   
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(true)
    }, [])
   const handleSomeThings = () => {
    dispatch(responseCode(0))
    dispatch(showError(''))
   }
  return (
    <Box sx={{ width: '100%' }}>
    <Collapse in={open}>
      <Alert
        severity={color}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              handleSomeThings()
              setOpen(false);
            }}
          >
            <CloseIcon fontSize="inherit"/>
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {errorMessage}
      </Alert>
    </Collapse>
  </Box>
  )
}

export default AlertMessage