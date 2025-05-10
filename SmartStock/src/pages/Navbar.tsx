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
            <div className="flex gap-6">
           
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleRegister}>Register</button>
                <button onClick={handleHome}> <svg className="h-8 w-8 text-[#F7E67C]" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <polyline points="5 12 3 12 12 3 21 12 19 12" />
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg></button>
                
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
