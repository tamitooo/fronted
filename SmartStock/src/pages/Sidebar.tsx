import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo2.png";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className=" " >
        <div className="bg-white fixed inset-y-12 left-0 w-72 h-full px-4 py-8 flex flex-col justify-between shadow font-Judson rounded-r-2xl" >
        <div>
    
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <h1 className="text-lg font-bold mt-2">SMART STOCK</h1>
        </div>


        <div className="flex flex-col gap-4 text-lg">

          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-100 text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#C6DCF1] duration-300"
          >
            <span className="text-xl"><svg className="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg></span> Profile
          </button>


          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-100 text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#C6DCF1] duration-300"
          >
            <span className="text-xl"><svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <rect x="10" y="12" width="4" height="4" /></svg>
            </span> Dashboard
          </button>

          
          <button
            onClick={() => navigate("/inventory")}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-100 text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#C6DCF1] duration-300"
          >
            <span className="text-xl"><svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />  <path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" /></svg>
            </span> Manage Inventory
          </button>

    
          <button
            onClick={() => navigate("/bussiness")}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-yellow-100 text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#C6DCF1] duration-300"
          >
            <span className="text-xl"><svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="3" y1="21" x2="21" y2="21" />  <path d="M5 21v-14l8 -4v18" />  <path d="M19 21v-10l-6 -4" />  <line x1="9" y1="9" x2="9" y2="9.01" />  <line x1="9" y1="12" x2="9" y2="12.01" />  <line x1="9" y1="15" x2="9" y2="15.01" />  <line x1="9" y1="18" x2="9" y2="18.01" /></svg>
            </span> Bussiness
          </button>
        </div>
      </div>


      <button
        onClick={() => navigate("/logout")}
        className=" text-blue-900 font-semibold text-center py-6 text-left text-lg hover:text-[#488ED3] hover:scale-105 hover:underline transition-all duration-300"
      >
        Sign out
      </button></div>
    </div>
  );
};

export default Sidebar;
