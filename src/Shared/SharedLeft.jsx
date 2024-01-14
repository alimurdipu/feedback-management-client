import React from "react";
import { BsMoon } from "react-icons/bs";
import { GoBrowser } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoIosArrowForward, IoIosNotifications } from "react-icons/io";
import logo from "../../public/images/Group 16.svg";
import pic1 from "../../public/images/Ellipse 7.svg";
import { AiOutlineTeam } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const navData = [
  {
    id: 1,
    pathname: "/dashboard",
    navname: "Dashboard",
    icon: <RxDashboard />,
  },
  {
    id: 2,
    pathname: "/environment",
    navname: "Environment",
    icon: <GoBrowser />,
  },
  {
    id: 3,
    pathname: "/team",
    navname: "Teams",
    icon: <AiOutlineTeam />,
  },
  {
    id: 4,
    pathname: "/admin",
    navname: "Admin",
    icon: <MdOutlineSettings />,
  },
];
const SharedLeft = () => {
  return (
    <div className="w-64 min-h-screen bg-[#F1F1F1]">
      <div className="space-y-10">
        <div className="w-56 m-auto flex gap-2 text-center justify-start items-center mt-7">
          <div className="">
            <img className="w-6 h-6" src={logo} alt="" />
          </div>
          <p className="text-4xl font-semibold text-[#006DF9]">Lucidmark.</p>
        </div>
        <div className="w-56 mb-4 m-auto rounded-full bg-[#006DF914] text-center">
          <button className=" text-[#006DF9] p-2">+ New Environment</button>
        </div>
      </div>
      <div className="mt-14 space-y-4">
        {navData.map((data) => (
          <div key={data.id} className="w-60 m-auto space-y-1">
            <NavLink
              to={data.pathname}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-1 w-60 py-1.5 px-5 font-medium text-start  text-blue-700 border-l-4 border-blue-700"
                  : "flex items-center gap-1 w-60 py-1.5 px-5 font-medium text-start border-l-4 border-white "
              }
            >
              <p className="text-2xl">{data.icon}</p>
              {data.navname}
            </NavLink>
          </div>
        ))}
      </div>
      {/* userbar */}
      <div className="w-60 m-auto space-y-3 mt-32 ml-2">
        <div className="flex text-center justify-start items-center">
          <div className="bg-blue-200 rounded-full p-2">
            <BsMoon className="text-2xl text-blue-500" />
          </div>
          <p className="flex items-center w-60 py-1.5 px-5 font-medium text-start  hover:text-blue-700 ">
            DayLight{" "}
          </p>
        </div>

        <div className="flex">
          <img className="w-10 h-10 rounded-full" src={pic1} alt="" />
          <button className="flex items-center gap-1 ml-5 font-medium text-start  hover:text-blue-700 ">
            Liam Trampota
            <IoIosArrowForward className="text-xl" />
          </button>
        </div>
        <div className="flex text-center justify-start items-center">
          <div className="bg-blue-200 rounded-full p-2">
            <IoIosNotifications className="text-2xl text-blue-500" />
          </div>
          <p className="flex items-center w-60 py-1.5 px-5 font-medium text-start  hover:text-blue-700 ">
            Notification
          </p>
        </div>
      </div>
      {/* userbar */}
    </div>
  );
};

export default SharedLeft;
