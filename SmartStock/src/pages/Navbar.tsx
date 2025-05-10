import React from 'react';
import { useNavigate } from 'react-router-dom';

 const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/auth/login');
    };

    const handleLogin = () => {
        navigate('/auth/login');
    };

    const handleRegister = () => {
        navigate('/auth/register');
    };

    return (
        <div className="font-silkscreen bg-primary fixed top-0 left-0 w-full h-16 px-8 flex items-center justify-between text-2xl z-10 text-[#DCEDC8]">
            {/* Logo a la izquierda */}
            <div className="flex items-center gap-2">
                {/* Puedes poner una imagen en lugar del texto si tienes un logo */}
                <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
                <span>Smart Stock</span>
            </div>

            {/* Botones a la derecha */}
            <div className="flex gap-6">
                {token ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <button onClick={handleLogin}>Login</button>
                        <button onClick={handleRegister}>Register</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
