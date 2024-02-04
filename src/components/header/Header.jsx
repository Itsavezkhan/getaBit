import React from "react";
import marjan from "../../assets/marjan.jpg";
import notification from "../../assets/notification.png";
import arrow from "../../assets/arrow.png";
import wallet from "../../assets/wallet.png";
import DP from "../../assets/DP.svg";

const Header = () => {
  return (
    <>
      <header
        className=" absolute w-[1460px] h-[110px] rounded-[1px] opacity-[.98] flex items-center px-16 justify-between"
        style={{ backgroundImage: `url(${marjan})` }}
      >
        <span className="text-[background: #292D32] font-bold text-xl hover:cursor-pointer">
          aBit
        </span>
        <div className="flex gap-3 items-center">
          <button className="border-2 border-[#764CC2] text-[#764CC2] h-10 w-36 rounded-[60px] flex items-center justify-center hover:text-white hover:bg-[#764CC2] text-md">
            Share new video
          </button>
          <div className="flex justify-center items-center gap-4">
            <img src={wallet} className="h-7 w-7 hover:cursor-pointer" />
            <img src={notification} className="h-7 w-7 hover:cursor-pointer" />
            <img src={DP} className="w-7 h-7 rounded-full border-black border-2 hover:cursor-pointer"/>
            <img src={arrow} className="h-7 w-7 hover:cursor-pointer" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
