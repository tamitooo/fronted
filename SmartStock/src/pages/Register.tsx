import React from 'react';
import line from '../images/line1.png';
import { useNavigate } from "react-router-dom";

 const Register: React.FC = () => {
   const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      
      <div className="flex justify-center items-center w-full">
        <div className="w-[1100px] flex items-center justify-center">
          <div className="w-full h-[650px] p-10 bg-primary drop-shadow-[0_40px_40px_rgba(0,0,0,0.60)] shadow-black/90">
          <div className="flex flex-col lg:flex-row items-start gap-20 flex justify-center items-center">
            <h1 className="font-Judson font-bold text-left text-[57px] text-[#FCF7D5] m-0 p-0">
              It’s Time <br /> to Take <br />Charge of <br /> Your <br />Stock
            </h1>
            <img
              src={line}
              alt="Line"
              className=" h-[357px] object-contain"
            />

            
            <section className="text-left">
            <h1 className="font-Judson font-bold text-center text-[48px] text-white">
            Create An Account
            </h1>
    	    <p className='text-center font-Judson text-center text-[20px] text-white'>
              Welcome to Smart Stock! Please enter your details.
            </p>

            <div className="mt-2">
	      <div className="mb-2">
                <label className=" ml-5 font-Judson block text-[36px] font-medium text-white mb-1">Name</label>
                <div className='flex items-center justify-center'>
                <input 
                  className=" w-[500px] p-3 pl-5 bg-[#ADBAC7] text-primary font-Judson italic placeholder-gray-700 rounded-3xl"
                  placeholder="Enter your name"
                  type="name"
                /></div>
              </div>

              <div className="mb-4">
                <label className="ml-5 font-Judson block text-[36px] font-medium text-white mb-1">Email</label>
                <div className='flex items-center justify-center'>
                <input 
                  className=" w-[500px] p-3 pl-5 bg-[#ADBAC7] text-primary font-Judson italic placeholder-gray-700 rounded-3xl"
                  placeholder="Enter your email"
                  type="email"
                /></div>
              </div>
              <div className="mb-6">
                <label className=" ml-5 font-Judson block text-[36px] font-medium text-white mb-1">Password</label>
                <div className='flex items-center justify-center'>
                <input 
                  className="w-[500px] p-3 pl-5 bg-[#ADBAC7] text-primary font-Judson italic placeholder-gray-700  rounded-3xl"
                  placeholder="Enter your password"
                  type="password"
                /></div>
              </div>

              <div className="flex justify-center ">
                <button onClick={() => navigate("/dashboard")}
                  className="w-[130px] h-12 bg-[#F7E67C] py-1 mt-5 text-[25px] text-primary font-suranna shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#488ED3] duration-300 rounded-3xl"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div></section>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Register;
