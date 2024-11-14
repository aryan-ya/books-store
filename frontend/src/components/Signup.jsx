import React from 'react'
import {Link} from  "react-router-dom"
import Login from "../components/Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (

    <>
     <div>


<div  className="flex h-screen items-center justify-center ">
  <div className="w-[600px]">
    <div className='modal-box'>
    <form  onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg text-black">Sign Up</h3>

    <div className='mt-4 space-y-2'>
        <span className='text-black'>Name</span>
        <br/>
        <input type="text"   placeholder = "Enter Your Full Name" className='w-80 px-3 py-1 border rounded-md outline-none' 
        
        {...register("name", { required: "Name is required" })}
        
        />
   <br/>
   {errors.password && <span  className=" text-sm text-red-500">{errors.name.message}</span>}
      
      </div>
      <div className='mt-4 space-y-2'>
        <span className='text-black'>Email</span>
        <br/>
        <input type="email"   placeholder = "Enter Your Email " className='w-80 px-3 py-1 border rounded-md outline-none'    {...register("email", { required: "Email is required" })} />
        <br/>
        {errors.email && <span  className=" text-sm text-red-500">{errors.password.message}</span>}
      
      </div>
      {/* password */}
      <div className='mt-4 space-y-2'>
        <span className='text-black'>Password</span>
        <br/>
        <input type="text"   placeholder = "Enter Your Password " className='w-80 px-3 py-1 border rounded-md outline-none'  {...register("password", { required: "Password is required" })} />
        <br/>
              {errors.password && <span  className=" text-sm text-red-500">{errors.password.message}</span>}
  
      
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
      </form>
      </div>

  </div>
</div>
        </div>
   
        </>
  )
}

export default Signup