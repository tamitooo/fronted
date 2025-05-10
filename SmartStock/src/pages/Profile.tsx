import React from 'react';
import Sidebar from "./Sidebar";

const Profile: React.FC = () => {
    
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-[#04345c] text-white p-8 text-4xl font-bold font-Judson">
            Profile
            </div>
        </div>

    );
};

export default Profile;
