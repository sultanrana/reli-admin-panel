import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import { getCoupons } from '../features/coupons/couponsSlice';
import { getVariables } from '../features/system-variables/systemVariableSlice';
import Header from './Header'

const Layout = () => {
    const dispatch = useDispatch();
    const {storeUserToken} = useSelector((store) => store.login);
    // useEffect(() => {
    //     dispatch(getCoupons());
    //     dispatch(getVariables());
    // },[]);
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