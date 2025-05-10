import React from 'react';
import Sidebar from "./Sidebar";

const Dashboard: React.FC = () => {
    
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-[#04345c] text-white p-8 text-4xl font-bold font-Judson">
                Dashboard
            </div>
        </div>

    );
};

export default Dashboard;
