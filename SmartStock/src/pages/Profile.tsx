import React from 'react';
import Sidebar from "./Sidebar";
import logo from '../images/logo.png';

const Profile: React.FC = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@utec.edu.pe',
    role: 'Student',
  };

  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Sidebar />

      <div className="flex flex-col flex-1 bg-[#04345c] text-white px-10 py-8">
        <h1 className="text-4xl font-bold font-Judson mb-6">Profile</h1>

        <div className="flex flex-row items-center gap-10 mt-5">
          <img
            src={logo}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover shadow-md"
          />

          <div className="flex flex-col space-y-3">
            <h2 className="text-[40px] font-Judson font-extrabold text-white">{user.name}</h2>
            <div className="text-white font-Judson italic text-[28px] ">
               {user.email}
            </div>
            <button className=" bg-[#F4F1D9] text-primary text-[28px] font-Judson px-4 py-2 rounded-full shadow flex items-center gap-2 w-fit">
              <svg
                className="h-7 w-7 text-primary"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="9" />
                <line x1="9" y1="10" x2="9.01" y2="10" />
                <line x1="15" y1="10" x2="15.01" y2="10" />
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
              </svg>
              Estudiante
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
