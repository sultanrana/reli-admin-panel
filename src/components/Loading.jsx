import { Dialog, DialogContent, DialogTitle, Box, CircularProgress } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {
return (
    <Dialog
        open={true}
        aria-describedby="Loading"
        PaperProps={{
            style: {
                background: 'transparent',
                boxShadow: 'none'
            }
        }}
    >
        <DialogContent>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </DialogContent>
    </Dialog>
  )
}

export default Loading