import React from 'react'
import { useLocation } from 'react-router-dom'
function Services() {
const location = useLocation()
  return (
    <div className='services-container'>
    
      <h1 className='text-5xl font-bold text-white p-6'>NNPC EnServ</h1>
      <h3 className='text-2xl text-white px-6 py'>Here are all your contract</h3>

    </div>

  )
}

export default Services
