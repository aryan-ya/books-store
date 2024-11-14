import React from 'react'
import {Link} from  "react-router-dom"
import Login from "../components/Login";
function Signup() {
  return (

    <>
     <div>


<div  className="flex h-screen items-center justify-center ">
  <div className="w-[600px]">
    <div className='modal-box'>
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg text-black">Sign Up</h3>

    <div className='mt-4 space-y-2'>
        <span className='text-black'>Name</span>
        <br/>
        <input type="text"   placeholder = "Enter Your Full Name" className='w-80 px-3 py-1 border rounded-md outline-none' />
  
      
      </div>
      <div className='mt-4 space-y-2'>
        <span className='text-black'>Email</span>
        <br/>
        <input type="email"   placeholder = "Enter Your Email " className='w-80 px-3 py-1 border rounded-md outline-none' />
  
      
      </div>
      {/* password */}
      <div className='mt-4 space-y-2'>
        <span className='text-black'>Password</span>
        <br/>
        <input type="text"   placeholder = "Enter Your Password " className='w-80 px-3 py-1 border rounded-md outline-none' />
  
      
      </div>
      {/* button */}
      <div className='flex justify-around mt-4'>
        
         <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Sign up</button>
      <p className='text-black text-md'>Have account? {" "}
        <button to="/" className="underline text-blue-500 cursor-pointer"
        onClick={() => document.getElementById('my_modal_3').showModal()}
        
        >
        login
        </button>
        <Login />
        
        <span className='underline text-blue-500 cursor-pointer'>
        
    
        </span></p>
      </div>
      </div>
  </div>
</div>
        </div>
        </>
  )
}

export default Signup