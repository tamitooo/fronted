import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import utec1 from "../imgs/utec1.png";

 const Register: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
    
  };
 

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='pt-8 pb-8 flex'>
        <div className='px-2'>
          <div className='cursor-pointer w-1/2 py-2 px-4 w-24 rounded-full bg-transparent drop-shadow-md'>
            <Link to="/login">
              <div className='font-extrabold text-center'>Log In</div>
            </Link>
          </div>
        </div>
        <div className='px-2'>
          <div className='cursor-pointer w-1/2 py-2 px-4 w-24 rounded-full bg-transparent border-2 border-primary drop-shadow-md'>
            <Link to="/register">
              <div className='font-extrabold text-center'>Register</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="hidden sm:flex h-full w-1/2 pt-20 pr-4 items-center justify-center">
          <img src={utec1} alt='UTEC' className="h-500 max-h-full max-w-full" />
        </div>
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <div className='px-4 py-9 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-20 rounded-lg backdrop-blur bg-white/50 shadow-xl'>
            <h1 className="font-extrabold text-center text-5xl sm:text-5xl md:text-5xl lg:text-5xl">
              Create An Account
            </h1>
            <p className='text-center font-medium text-lg sm:text-base md:text-lg lg:text-xl mt-4'>
              Welcome to ConectaTec! Please enter your details.
            </p>
            <div className="mt-8">
              <div className="flex flex-row justify-center items-center">
                <div className="py-1 px-2">
                  <button
                    className={`flex flex-row rounded-lg cursor-pointer py-2 px-4 bg-primary shadow-lg ${activeButton === 'student' ? 'bg-opacity-50' : ''}`}
                    type="button"
                    onClick={() => handleButtonClick('student')}
                  >
                    Student
                    <div className='flex pt-1 px-1'>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label className='px-4 text-lg font-medium'>Name</label>
                <input
                  className="w-full rounded-lg p-2 mt-1 bg-transparent shadow-lg"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
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
                  className="cursor-pointer bg-primary hover:ease-in text-white py-2 px-4 rounded-lg font-semibold shadow-lg shadow-primary/50"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
