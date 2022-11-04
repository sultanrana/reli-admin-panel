import { Box, Button, FormControl, FormControlLabel, FormLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
const SetPassword = () => {
  const [showPasswordIcon, setShowPasswordIcon] = useState(false);
  const [radioDisabled, setRadioDisabled] = React.useState(true);
  const textBlack = {
    color: 'black',
  }
  return (
    <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Box sx={{width: '400px', textAlign: 'center', p: '20px'}}>
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
                >Set Password</Typography>
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
                Pick a good one!
                </Typography>
                <FormControl sx={{ mb: 5, width: '100%', height: '54px' }} variant="outlined">   
                    <OutlinedInput
                        id="outlined-adornment-password" onFocus={() => setShowPasswordIcon(true)} onBlur={() => setShowPasswordIcon(false)}
                        startAdornment={
                            showPasswordIcon? (<InputAdornment position="end">
                            <IconButton style={{color: '#000000'}}
                            edge="start"
                            >
                                <LockOutlinedIcon/>
                            </IconButton>
                        </InputAdornment>): ''
                        }
                        label="New Password"
                    />
                        <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                </FormControl>
                <FormControl sx={{width: '100%', ml: '25px', mb: '30px'}}>
                  <FormLabel id="demo-radio-buttons-group-label" style={{textAlign: 'start', color: '#000000'}}>Requirements</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="capital_letter" disabled={radioDisabled} classes={textBlack} control={<Radio />} label="Capital letter" />
                  </RadioGroup>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="lowercase_letter" disabled={radioDisabled}  control={<Radio /> } color="black" label="Lowercase letter" />
                  </RadioGroup>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="symbol" disabled={radioDisabled} control={<Radio />} label="Symbol" />
                  </RadioGroup>
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

export default SetPassword