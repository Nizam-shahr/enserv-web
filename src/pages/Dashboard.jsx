import React from 'react'
import { useLocation } from 'react-router-dom'
import MultiStep from 'react-multistep'
import RecentTimeline from '../components/RecentTimeline'
import Select from '../components/Dropdowns'
import Selects from '../components/Dropdowns'
import Dropdowns from '../components/Dropdowns'
function Dashboard() {
const location = useLocation()

  return (
    <div>
         <div className='services-container'>
      <div>
      <h1 className='text-3xl font-bold text-white pt-3 px-8'>NNPC EnServ</h1>
        <h3 className='text-xl text-white px-8 '>Here are all your contract</h3>
      </div>
  
  
      </div>
      <div className='total-containers'>
        <div className='users total-container'>
            <img src="/images/userspie.png" alt="" />
            <div>
              <h2 className=' text-sm'>Total users</h2>
              <h3>24</h3>
            </div>
        </div>
        <div className='data total-container'>
          <img src="/images/datapie.png" alt="" />
          <div>
              <h2 className=' text-sm'>Total users</h2>
              <h3>24</h3>
            </div>
        </div>
        <div className='downloads total-container'>
          <img src="/images/downloadpie.png" alt="" />
          <div>
              <h2 className='text-sm'>Total downloads</h2>
              <h3>24</h3>
            </div>
        </div>
        <div className='details total-container'>
          <img src="/images/detailspie.png" alt="" />
          <div>
              <h2 className=' text-sm'>Other details</h2>
              <h3>24</h3>
            </div>
        </div>
        <div className='active flex rounded-lg py-4 px-8 bg-white'>
          <div className='flex flex-col items-center'>
            <h1> 750</h1>
            <h2>Active Users</h2>
          </div>
          <span className=' h-16 bg-slate-400 mx-10'></span>
          <div className='flex flex-col items-center'>
          <h1> 7500</h1>
            <h2>Total Contracts</h2>
          </div>
        </div>
      </div>
      <div className='contract-container mt-20 mb-10 mx-6'>
        <div className='new-contracts bg-white flex justify-between p-8'>
            <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-gray-500 text-2xl'>Nizam Shahr</h1>
            <h2 className='font-semibold text-gray-500 '>  
            User ID: Nizam777502 | SCMD
            </h2>
            </div>
            <div className='flex  gap-8 mt-10'>
              <button className='py-2 px-4 text-white bg-green-500 rounded'>+ New Contract</button>
              <button className='py-2 px-4 text-green-500 bg-white border-green-500 border-2 rounded '>View Contracts</button>
            </div>
          </div>
     
        <div className='recent-updates bg-white flex flex-col gap-8'> 
        <div className='flex flex-col'>
          <h1 className='text-2xl'>Recent Updates</h1>
          <div className='flex gap-1' >  
            <span><img width={18} src="/images/arrow-up.png" alt="" /></span>
            <h2 className='text-sm'>16% this month</h2></div>
         
        </div>
       <div className=' pl-2'>
       <RecentTimeline/>
       </div>
        </div>
        <div className='avg-workforce flex flex-col gap-8 bg-white'> 
              <div className='flex gap-4 items-center justify-between '>
                <h2>AVG Workforce</h2>
                  <Dropdowns/>
              </div>
              <div className='flex items-center gap-8'>
                <img className='workflowpie' src="/images/workforcepie.png" alt="" />
                <img  className='workflow-statistics' src="/images/workforcecolor.png" alt="" />
              </div>
        </div>
        <div className='contract-value bg-white flex flex-col gap-4'>
          <div>
            <h1>Contract Value by department</h1>

          </div>
          <div >
            <img src="/images/workflowstatistics.png" alt="" />
          </div>
        </div>
        </div>
      </div>

   
  )
}

export default Dashboard
