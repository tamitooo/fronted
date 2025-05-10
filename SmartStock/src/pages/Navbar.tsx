import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';


const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className="relative z-11">
        <div className="font-Judson bg-primary fixed top-0 left-0 w-full h-16 px-8 flex items-center justify-between text-2xl text-[#F7E67C] ">
            <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            </div>
            <div className="flex gap-8">
           
                <button className= "text-[#F7E67C] hover:text-[#488ED3] hover:scale-105 transition-all duration-300" onClick={handleLogin}>Login</button>
                <button className= "text-[#F7E67C] hover:text-[#488ED3] hover:scale-105 transition-all duration-300"  onClick={handleRegister}>Register</button>
                <button
                    onClick={handleHome}
                    className="flex items-center gap-2"
                    >
                    <svg
                        className="h-8 w-8 text-[#F7E67C] hover:text-[#488ED3] hover:scale-105 transition-all duration-300"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>
                </button>
                
            </div>
            <div 
                    className="absolute bottom-2 left-0 w-full h-[1px] bg-[#F7E67C]"
                    style={{ transform: 'translateY(11px)' }}  
                ></div>
        </div>

        </div>

    );
};

export default Navbar;
