import { Login } from '@mui/icons-material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
    const {storeUserToken} = useSelector((store) => store.login)
    console.log(storeUserToken);
  return (
    <>
    {storeUserToken ? (
        <>
            <Header />
            <Outlet/>
        </>
    ): (
        <>
            <Navigate to={'/login'}  replace/>
        </>
    )}     
    </>
  )
}

export default Layout