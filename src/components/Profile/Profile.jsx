import React from "react";
import DP from "../../assets/DP.svg";
import marjan from "../../assets/marjan.jpg";

const Profile = () => {
  return (
    <div className="w-[571px] h-[234px] absolute top-[436px] left-[83px] rounded-[24px] flex z-10" style={{ backgroundImage: `url(${marjan})` }}>
      <img src={DP}/>
      <div className="p-6">
        <div className="flex flex-col gap-6 p-1">
          <div className="flex justify-between">
            <h2 className="font-bold text-xl">DAN MACE</h2>
            <p className="font-normal text-md text-[#696969]">/Johny_Films/</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Bio</p>
            <p className="font-normal text-md text-[#696969]">
              Bio Simply a film fan creating original content for YouTube. Let’s
              Collaborate.
            </p>
          </div>
          <div className="w-full border border-black bg-zinc-700 rounded-[4px]">
            <p className="w-1/2 text-center p-1 rounded-[4px]" style={{ backgroundImage: `url(${marjan})` }}>Creator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
