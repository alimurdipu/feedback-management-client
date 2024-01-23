import React from 'react'
import { mainImg, google, whitelogo} from '../../assets/images/Images'
import { useForm } from 'react-hook-form';

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className='md:flex justify-between bg-bg-login h-screen md:w-full bg-cover p-8'>
     <div className='space-y-10'>
        <div className='flex gap-2 items-center'>
        <img className='md:w-10 md:h-10 w-4 h-4' src={whitelogo} alt="" />
        <p className='text-white text-2xl md:text-5xl'>Lucidmark</p>
        </div>
        <h1 className='text-white text-2xl md:text-6xl'>Enhance your <br /> worflow, today.</h1>
        <div className=''>
          <div className='md:w-8 md:h-8 w-4 h-4 rounded-full bg-white md:mt-72 md:block hidden'>
            
          </div>
        </div>
     </div>
     <div className='md:w-[400px] md:h-[550px]  bg-[#FFFFFF] rounded-xl p-1 mb-2'>
      <div className='flex flex-col text-center my-10'>
        <img className='w-10 h-10 m-auto text-center text-black' src={mainImg} alt="" />
        <h2 className='text-2xl'>Welcome</h2>
        <p className='text-[#868686]'>Please enter your details</p>
        
      </div>
        <form className='text-center space-y-2' onSubmit={handleSubmit(onSubmit)}>
      <input className='border md:w-80 p-2 rounded-md' type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input className='border md:w-80 p-2 rounded-md' type="password" placeholder="Password" {...register("password", {required: true, minLength: 6, maxLength: 12})} />
      <p className='text-right mr-10'>Forgot Password?</p>

      <input className='bg-[#1D3EFF] md:w-80 w-40 p-2 rounded-md text-white' type="Submit" placeholder='Log In' />
      <button className='flex justify-items-center gap-2 m-auto md:w-80 w-50 bg-[#F3F3F3] p-2 rounded-md'>
        <img className='md:ml-16 text-center' src={google} alt="" />
        <p className='text-center'>Log In With Google</p>
      </button>
    </form>
    <p className='text-center md:mt-24'>Don't have an account? <span className='font-bold'>Sign Up</span></p>
    </div>
      
    </div>
  )
}

export default Login