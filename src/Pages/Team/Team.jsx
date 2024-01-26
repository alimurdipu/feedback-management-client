import React, { useState } from "react";
import RightTeam from "./RightTeam";
import pic from "../../../public/images/Ellipse 7.svg"

const ReqUser = [
  {
      id: 1,
      pic: "../../../public/images/Ellipse 7.svg",
      name: "Nayeem"
  },
  {
      id: 2,
      pic: "../../../public/images/Ellipse 7.svg",
      name: "Dipu"
  }
]

const Team = () => {
 
  return (
    <>
      <div className="flex-1 p-4 h-[calc(100vh)] overflow-scroll overflow-x-hidden">
        <RightTeam />
      
        <div className="border-b border-gray-400 my-4"></div>
        {/* downside */}
        <div className="md:flex">
          <div className="flex flex-col space-y-4 justify-between">
            <h2 className="text-xl font-bold">Pending Invites</h2>
          </div>

          {/* resend card */}
          <div className="md:flex-1 space-y-4 md:ml-14">
          {
            ReqUser.map(requser => <div key={requser.id} className="flex justify-between md:p-4 p-2 bg-[#F1F1F1]  items-center">
            <div className="md:flex items-center md:gap-4">
              <div className="flex gap-2 items-center md:mb-0 mb-2">
              <img src={pic} alt="" />
              <p>{requser.name}</p>
              </div>
              <button className="flex justify-around items-center md:w-24 px-3 py-2 font-bold text-center bg-[#006DF914] text-[#006DF9] rounded-full">
              Pending
              </button>
            </div>
            <div className="md:flex items-center md:gap-4">
              <button className="flex justify-around items-center md:w-40 md:py-3 p-2 text-center bg-[#006DF914] text-[#006DF9] font-bold md:mb-0 mb-2">
              Resend invite
              </button>
              <button className="flex justify-around items-center md:w-40 p-2 md:py-3 text-center border border-[#E85656] text-[#E85656] font-bold">
              Resend invite
              </button>
            </div>
          </div>)
          }
          </div>
          {/* resend card */}
          
        </div>
        
         {/* downside end */}
      </div>

     
    </>
  );
};

export default Team;
