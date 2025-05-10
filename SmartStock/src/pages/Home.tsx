import React from 'react';
import logo from '../images/logo.png';

const Home : React.FC = () => {
  return (
    
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="flex flex-col lg:flex-row items-center gap-10 text-center">
        <img src={logo} alt="Logo" className="w-[373px] h-[357px] object-contain" />
        <section className="text-left">
          <h1 className=" font-Judson font-bold text-[128px] text-[#FCF7D5] leading-none">
            Smart Stock
          </h1>
          <p className="text-center font-suranna text-[48px] text-[#FFFFFF] mt-4">
            Turning Stock into Strategy
          </p>
          <p className=" text-center font-Judson italic text-[32px] text-[#FFFFFF] mt-8">
            ✓ Real-Time Tracking – Know <br />
            exactly what’s in stock, 24/7.
            <br /><br />
            P.S. Why wait? Your competitors aren’t sleeping…
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
