import React from 'react'
import { isLoggedIn } from './auth';
 import { Navigate, Outlet } from 'react-router-dom' 
 
const PrivateRoutes = () => {
   if(isLoggedIn ()){ return <Outlet/>}else{
 return  <Navigate to={"/"}/>
 
    
    }
   }

export default PrivateRoutes