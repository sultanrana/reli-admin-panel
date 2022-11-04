import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React, { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';
const Forgot = () => {
  const [showEmailIcon, setShowEmailIcon] = useState(false);

  return (
    <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box sx={{width: '400px', textAlign: 'center', px: '20px'}}>
            <form>
            <Typography variant="h4" component="h2" style={{
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '24px',
                    lineHeight: '24px',
                    letterSpacing: '0.18px',
                    textTransform: 'uppercase'
                }}
                sx={{mb: '4rem', width: '100%'}}
                >REQUEST PASSWORD RESET</Typography>
                <FormControl sx={{ mb: 5, width: '100%', height: '54px' }} variant="outlined">   
                    <OutlinedInput
                        id="outlined-adornment-email" onFocus={() => setShowEmailIcon(true)} onBlur={() => setShowEmailIcon(false)}
                        startAdornment={
                            showEmailIcon? (<InputAdornment position="end">
                            <IconButton style={{color: '#000000'}}
                            edge="start"
                            >
                                <MailOutlineIcon/>
                            </IconButton>
                        </InputAdornment>): ''
                        }
                        label="Email"
                    />
                        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                </FormControl>
                <Button sx={{width: '100%', minHeight: '36px', mb: '30px'}} variant="contained" color='primary'>REQUEST RESET</Button>
                <Link to={'/login'} style={{
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '16px',
                    textAlign: 'center',
                    letterSpacing: '1.25px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    color: '#019EB2',
                    }}  className='roboto-font' >
                    Back
                </Link>
            </form>
        </Box>
    </Box>
  )
}

export default Forgot