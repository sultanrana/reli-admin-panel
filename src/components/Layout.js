import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
    const {storeUserToken} = useSelector((store) => store.login)
    
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