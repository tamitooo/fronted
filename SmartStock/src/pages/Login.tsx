import React from 'react';
import { Link } from 'react-router-dom';

 const Login: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='pt-8 pb-8 flex'>
        <div className='px-2'>
          <div className='cursor-pointer w-1/2 py-2 px-4 w-24 rounded-full bg-transparent border-2 border-primary drop-shadow-md'>
            <Link to="login">
              <div className='font-extrabold text-center'>Log In</div>
            </Link>
          </div>
        </div>
        <div className='px-2'>
          <div className='cursor-pointer w-1/2 py-2 px-4 w-24 rounded-full bg-transparent drop-shadow-md'>
            <Link to="/register">
              <div className='font-extrabold text-center'>Register</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <div className='px-10 py-20 rounded-lg backdrop-blur bg-white/50 shadow-xl'>
            <h1 className="font-extrabold text-center text-5xl">
              Welcome Back
            </h1>
            <p className='text-center font-medium text-lg text-gray-500 mt-4'>
              Welcome back! Please enter your details.
            </p>

            <div className="mt-8">
              <div className="mb-4">
                <label className='px-4 text-lg font-medium'>Email</label>
                <input 
                  className="w-full rounded-lg p-2 mt-1 bg-transparent shadow-lg"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="mb-4">
                <label className='px-4 text-lg font-medium'>Password</label>
                <input 
                  className="w-full rounded-lg p-2 mt-1 bg-transparent shadow-lg"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>

              <div className="flex justify-center items-center">
                <button
                  className="cursor-pointer w-1/2 bg-primary text-white py-2 px-4 rounded-lg font-semibold shadow-lg shadow-primary/50"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex h-full w-1/2 pt-20 items-center justify-center bg-gray-200">
        </div>
      </div>
    </div>
  );
};
export default Login;
