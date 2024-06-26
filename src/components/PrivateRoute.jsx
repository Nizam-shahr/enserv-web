import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({loggedIn}) => {
  
 return !loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute
