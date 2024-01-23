import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import setting from "../../../public/images/setting.svg";
import deleteIcon from "../../../public/images/delete.svg";
import pic from "../../../public/images/Ellipse 7.svg";

const Users = [
  {
    id: 1,
    pic: "/public/images/Ellipse 7.svg",
    name: "BossNajmul",
  },
  {
    id: 2,
    pic: "/public/images/Ellipse 7.svg",
    name: "ProMahbubul",
  },
  {
    id: 3,
    pic: "/public/images/Ellipse 7.svg",
    name: "GuruAshik",
  },
  {
    id: 4,
    pic: "Ellipse 7.svg",
    name: "BeginerDipu",
  }
];

const RightTeam = () => {
  return (
    <>
        {/* Right Side */}
          <div className="flex justify-between">
            <div className="flex flex-col justify-start items-start gap-1">
              <p>Environment</p>
              <div className="flex gap-6 items-center">
                <h2 className="text-4xl font-bold text-[#006DF9]">Metanote</h2>
                <button className="hover:bg-slate-300">
                  <IoIosArrowDown className="font-bold text-2xl text-[#006DF9]" />
                </button>
              </div>
            </div>
              <button>
                <img className="bg-[#006DF914] p-2" src={setting} alt="" />
              </button>
          </div>
          {/* Left start */}
          <div className="md:flex mt-10">
            <div className="flex flex-col space-y-4 md:mb-0 mb-4">
              <h2 className="text-xl font-bold">Users</h2>
              <button className="w-40 py-3 text-center bg-[#006DF914] text-[#006DF9]">
                Invite new user
              </button>
            </div>
          {/* user start */}
          <div className="md:flex-1 space-y-4 md:ml-10 md:mt-0 m">
            {Users.map((user) => (
              <div
                key={user.id}
                className="md:flex justify-between p-4 bg-[#F1F1F1] items-center"
              >
                <div className="flex items-center gap-4">
                  <img src={pic} alt="" />
                  <p>{user.name}</p>
                </div>
                <div className="flex items-center gap-4 md:mt-0 mt-2">
                  <button className="flex justify-around items-center w-40 py-3 text-center bg-[#006DF914] text-[#006DF9] font-bold">
                    Administrator
                    <IoIosArrowDown className="font-bold text-2xl text-[#006DF9]" />
                  </button>
                  <img src={deleteIcon} alt="" />
                </div>
              </div>
            ))}
          </div>
          {/* user end */}
          </div>
      

      
    </>
  );
};

export default RightTeam;
