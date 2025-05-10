import React from 'react';
import Sidebar from "./Sidebar";

const Inventory: React.FC = () => {
    
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 bg-[#04345c] text-white p-8 text-4xl font-bold font-Judson">
                Inventory
            </div>
        </div>

    );
};

export default Inventory;
