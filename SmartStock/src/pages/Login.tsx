import React from 'react';
import { useNavigate } from "react-router-dom";


const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="flex w-full justify-center">
        <div className="w-[650px] flex items-center justify-center">
          <div className="w-full h-[650px] p-10 bg-primary drop-shadow-[0_40px_40px_rgba(0,0,0,0.60)] shadow-black/90">
            <h1 className="font-Judson font-bold text-center text-[96px] text-[#FCF7D5]">
              Welcome!
            </h1>
    

            <div className="mt-8">
              <div className="mb-4">
                <label className=" ml-12 font-Judson block text-[36px] font-medium text-white mb-1">Email</label>
                <div className='flex items-center justify-center'>
                <input 
                  className=" w-[500px] p-3 pl-5 bg-[#ADBAC7] text-white font-Judson italic placeholder-gray-700 rounded-3xl"
                  placeholder="Enter your email"
                  type="email"
                /></div>
              </div>
              <div className="mb-6">
                <label className=" ml-12 font-Judson block text-[36px] font-medium text-white mb-1">Password</label>
                <div className='flex items-center justify-center'>
                <input 
                  className="w-[500px] p-3 pl-5 bg-[#ADBAC7] text-white font-Judson italic placeholder-gray-700 rounded-3xl"
                  placeholder="Enter your password"
                  type="password"
                /></div>
              </div>

              <div className="flex justify-center ">
                <button onClick={() => navigate("/dashboard")}
                  className="w-[120px] h-12 bg-[#F7E67C] py-1 mt-5 text-[25px] text-primary font-suranna shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#488ED3] duration-300 rounded-3xl"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
