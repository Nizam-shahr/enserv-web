import React from 'react'

function Forgotpassword() {
  return (
    <div className="signin-container">
            <div className="signin-left">
            <img className="nnpc-frame" src="/images/nnpc-pframe.png" alt="" />
                <div className='welcome'>
                <img src="/images/nnpc-logo.png" alt="" />
                <h2>
                Welcome back
                </h2>
               <h5>
               Enter your email address and we’ll send you an email with instructions to reset your password
               </h5>
                </div>
                <div className="form-container">
                <form action="">
                    <label htmlFor="email">Email 
                    <input type="text" />
                    </label>
                </form>
                    <button type="submit">Reset Password</button>
                </div>
               
            </div>

            <div className="signin-right">
                    <img src="/images/nnpc-overlay.jpg" alt="" />
            </div>
   </div>
  )
}

export default Forgotpassword
