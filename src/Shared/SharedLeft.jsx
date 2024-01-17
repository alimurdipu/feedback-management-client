import React, { useState } from "react";
import { BsMoon } from "react-icons/bs";
import { GoBrowser } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";
import { RxCross2, RxDashboard } from "react-icons/rx";
import { IoIosArrowForward, IoIosNotifications } from "react-icons/io";
import logo from "../../public/images/Group 16.svg";
import pic1 from "../../public/images/Ellipse 7.svg";
import { AiOutlineTeam } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <div className="w-64 min-h-screen bg-[#F1F1F1] relative">
        <div className="space-y-10">
          <div className="w-56 m-auto flex gap-2 text-center justify-start items-center mt-7">
            <div className="">
              <img className="w-6 h-6" src={logo} alt="" />
            </div>
            <p className="text-4xl font-semibold text-[#006DF9]">Lucidmark.</p>
          </div>
          <div className="w-56 mb-4 m-auto rounded-full bg-[#006DF914] text-center">
            <button
              onClick={() => handleModal(isModal)}
              className=" text-[#006DF9] p-2"
            >
              + New Environment
            </button>
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
      {/* modal */}
      <div
        className={`${
          isModal
            ? "w-[600px] h-[320px] border border-red-500 p-8 rounded-3xl bg-white absolute mt-20 ml-96 z-10 shadow-2xl shadow-gray-600"
            : "hidden"
        }`}
      >
        <div className="">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-bold bg-white">Invite member</h2>
            <p className="text-xl font-bold">
              <RxCross2 />
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>First Name</p>
                <input
                  className="w-full border border-gray-400 rounded-sm p-3 bg-white"
                  placeholder="First Name"
                  {...register("firstName")}
                />
              </div>
              <div>
                <p>Password</p>
                <input
                  className="w-full border border-gray-400 rounded-sm p-3"
                  placeholder="First Name"
                  {...register("firstName")}
                />
              </div>
              <div>
                <p>Last Name</p>
                <input
                  className="w-full border border-gray-400 rounded-sm p-3"
                  placeholder="First Name"
                  {...register("firstName")}
                />
              </div>
              <div>
                <p>Role</p>
                <select {...register("gender")}>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                  <input type="text" radioGroup="" />
                </select>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-around mt-4">
          <button className="w-40 py-2 text-center rounded-full bg-[#006DF9] text-white">
            Done
          </button>
          <button
            onClick={() => handleModal(isModal)}
            className="w-40 py-2 text-center rounded-full bg-[#10121314]"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default SharedLeft;
