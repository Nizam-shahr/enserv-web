import React from 'react'
import { useLocation } from 'react-router-dom'
function Departments() {
const location = useLocation()
  
  return (
    <div>
         <h1 className='text-5xl text-center m-auto'>this is {location.pathname} </h1>

    </div>
  )
}

export default Departments
