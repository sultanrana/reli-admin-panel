import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { getCoupons } from '../features/coupons/couponsSlice';
import { getVariables } from '../features/system-variables/systemVariableSlice';
import Header from './Header'
import Services from '../pages/Services/Services';

const Layout = () => {
    const dispatch = useDispatch();
    const {storeUserToken} = useSelector((store) => store.login);
  return (
    <>
    {storeUserToken ? (
        <>
            <Header />
            {/* <Navigate to={'/services'}  replace/> */}
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