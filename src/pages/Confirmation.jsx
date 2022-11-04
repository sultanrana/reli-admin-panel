import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React, { useState } from 'react'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link } from 'react-router-dom';
const Confirmation = () => {
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);

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
                sx={{mb: '2rem'}}
                >Confrimation Code</Typography>
                <Typography component="p" style={{
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '24px',
                  textAlign: 'center',
                  letterSpacing: '0.5px'
                }}
                sx={{mb: '2rem'}}
                >
                Enter your password reset code here:
                </Typography>
                <FormControl sx={{ mb: 5, width: '100%', height: '54px' }} variant="outlined">   
                    <OutlinedInput
                        id="outlined-adornment-password" onFocus={() => setShowPasswordIcon(true)} onBlur={() => setShowPasswordIcon(false)}
                        startAdornment={
                            showPasswordIcon? (<InputAdornment position="end">
                            <IconButton style={{color: '#000000'}}
                            edge="start"
                            >
                                <VpnKeyIcon/>
                            </IconButton>
                        </InputAdornment>): ''
                        }
                        label="Password Reset Code"
                    />
                        <InputLabel htmlFor="outlined-adornment-password">Password Reset Code</InputLabel>
                </FormControl>
                <Button sx={{width: '100%', minHeight: '36px', mb: '30px'}} variant="contained" color='primary'>Continue</Button>
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
                    }} className='roboto-font' >
                    Back
                </Link>
            </form>
        </Box>
    </Box>
  )
}

export default Confirmation