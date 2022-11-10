import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { logout } from '../features/login/loginSlice';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const {loggedInUser, storeUserToken} = useSelector((store) => store.login)
const navigate  = useDispatch()
const dispatch  = useNavigate()
  // console.log(loggedInUser);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
// const handleLogout = () => {
//   // localStorage.clear();
//   // dispatch(logout())
//   navigate('/login')
// }

  return (
    <AppBar position="sticky" sx={{alignItems:'center', height: '60px', width: '100%'}}>
    <Toolbar sx={{justifyContent: storeUserToken ? 'space-between' : 'center', width: '100%'}}>
      {/* <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton> */}
      {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
        <img src="/images/Logo_orange.png" alt="reli-logo" />
      </Typography> */}
        <img src="/images/Logo_orange.png" alt="reli-logo" />
      {storeUserToken && (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            sx={{borderRadius: '0'}}
          >
            <Typography>{loggedInUser.data.userData.firstName}</Typography>
            <KeyboardArrowDownRoundedIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem><a href='/login' style={{color: 'black'}}>Logout</a> </MenuItem>
          </Menu>
        </div>
      )}
    </Toolbar>
    </AppBar>
  )
}

export default Header