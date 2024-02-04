import React from "react";

const Footer = () => {
  return (
    <>
    
        <div className="flex justify-center border-t-[1px] border-gray-400 items-center w-full h-80">
          <div className="h-[121px] w-[1169px] top-[1593px] left-[135px] flex justify-between items-center">
            <div className="flex flex-col">
              <h2 className="text-[#262626] font-bold text-4xl">aBit</h2>
              <p className="text-xl font-nromal h-[48px] w-[313px] capitalize">
                Changing the way in which creators and fans interact.
              </p>
              {/* font RECKLESS not available for free */}
            </div>
            <div className="flex flex-col border-l-[0.5px] border-[#7A7A7A] p-2 gap-3">
              <p className="text-sm font-bold hover:underline hover:cursor-pointer">
                Home
              </p>
              <p className="text-sm font-bold hover:underline hover:cursor-pointer">
                Are you a creator ?
              </p>
              <p className="text-sm font-bold hover:underline hover:cursor-pointer">
                Support
              </p>
            </div>
          </div>
        </div>

    </>
  );
};

export default Footer;
