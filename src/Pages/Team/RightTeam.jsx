import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import setting from "../../../public/images/setting.svg";
import deleteIcon from "../../../public/images/delete.svg";

const Users = [
    {
        id: 1,
        pic: "../../../public/images/Ellipse 7.svg",
        name: "BossNajmul"
    },
    {
        id: 2,
        pic: "../../../public/images/Ellipse 7.svg",
        name: "ProMahbubul"
    },
    {
        id: 3,
        pic: "../../../public/images/Ellipse 7.svg",
        name: "GuruAshik"
    },
    {
        id: 2,
        pic: "../../../public/images/Ellipse 7.svg",
        name: "BeginerDipu"
    }
]

const RightTeam = () => {
  return (
    <>
      <div className="col-span-1">
        {/* Right Side */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-start items-start gap-1">
              <p>Environment</p>
              <div className="flex gap-6 items-center">
                <h2 className="text-4xl font-bold text-[#006DF9]">Metanote</h2>
                <button className="hover:bg-slate-300">
                  <IoIosArrowDown className="font-bold text-2xl text-[#006DF9]" />
                </button>
              </div>
            </div>
          </div>
          {/* Left start */}
          <div className="mt-10">
            <div className="flex flex-col space-y-4 justify-between mb-10">
              <h2 className="text-xl font-bold">Users</h2>
              <button className="w-40 py-3 text-center bg-[#006DF914] text-[#006DF9]">
                Invite new user
              </button>
            </div>
          </div>
        </div>
        {/* Left end */}
      </div>

      <div className="col-span-2">
      <div  className="flex justify-end m-3">
        <button>
            <img className="bg-[#006DF914] p-2" src={setting} alt="" />
        </button>
        </div>
      <div className="mt-32">
        {/* user start */}
        <div className="space-y-4">
        {
            Users.map(user =><div key={user.id} className="flex justify-between p-4 bg-[#F1F1F1]  items-center">
            <div className="flex items-center gap-4">
              <img src={user.pic} alt="" />
              <p>{user.name}</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex justify-around items-center w-40 py-3 text-center bg-[#006DF914] text-[#006DF9] font-bold">
                Administrator
                <IoIosArrowDown className="font-bold text-2xl text-[#006DF9]" />
              </button>
              <img src={deleteIcon} alt="" />
            </div>
          </div>)
        }
        </div>
        {/* user end */}
      </div>
      </div>
        
    </>
  );
};

export default RightTeam;
