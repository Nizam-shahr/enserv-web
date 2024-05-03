import React from 'react'
import { IoMdSearch } from "react-icons/io";
function NavBar() {
  return (
    <div>
      <div className='navbar-wrapper' >
        <div className='navbar-container' >
       <div className='navbar-container-div' >
        <img className='navbar-logo' src="/images/nnpc-logo.png" alt="" />
        <img className='back-arrow' src="/images/back-arrow.png" alt="" /></div>
       <div>
        <form action="submit">
          
     <span><IoMdSearch size={20}/></span>
            <input   placeholder='search' type="text" name="" id=""  />
           
        </form>
       </div> 
       </div>
       <div className='profile-container'>
        <img src="/images/Notification.png" alt="" />
        <img src="/images/Message.png" alt="" />
        <img className='profile-image' src="/images/profile.png" alt="" />
        <div>
        <h1 className='text-blue'>Oluwaseyi</h1>
        <h2>Enserv IT Lead</h2>
        </div>
       </div>
       
      </div>
      
     
      
    </div>
  )
}

export default NavBar
