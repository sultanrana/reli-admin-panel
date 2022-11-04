import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {

  return (
    <AppBar position="sticky" sx={{alignItems: 'center', height: '60px', width: '100%'}}>
    <Toolbar>
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
      {/* {auth && (
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      )} */}
    </Toolbar>
  </AppBar>
  )
}

export default Header