import React, { useState } from "react";
import { BsMoon } from "react-icons/bs";
import { GoBrowser } from "react-icons/go";
import { MdOutlineSettings } from "react-icons/md";
import { RxCross2, RxDashboard } from "react-icons/rx";
import { IoIosArrowForward, IoIosNotifications } from "react-icons/io";
import logo from "../../public/images/Group 16.svg";
import pic1 from "../../public/images/Ellipse 7.svg";
import { BiTask } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Switch } from '@headlessui/react'
import { BiLogIn } from "react-icons/bi";


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
    pathname: "/task",
    navname: "Task",
    icon: <BiTask />,
  },
  {
    id: 4,
    pathname: "/team",
    navname: "Teams",
    icon: <AiOutlineTeam />,
  },
  {
    id: 5,
    pathname: "/admin",
    navname: "Admin",
    icon: <MdOutlineSettings />,
  },
  {
    id: 6,
    pathname: "/login",
    navname: "Login",
    icon: <BiLogIn />,
  }
];

const SharedLeft = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const [isDark, setDark] = useState(false);
  const handleDarkMood = () => {
    setDark(!isDark);
  };
  const [enabled, setEnabled] = useState(false)
  return (
    <>
      <div
        className={`${
          isDark
            ? "w-full lg:w-64 bg-black text-[#006DF9]"
            : "w-full lg:w-64 md:min-h-screen bg-[#F1F1F1] relative"
        }`}
      >
        <div className="md:space-y-10">
          <div className="w-56 m-auto flex gap-2 text-center justify-start items-center p-4">
              <img className="w-8 h-8" src={logo} alt="" />
            <p className="text-4xl font-semibold text-[#006DF9]">Lucidmark.</p>
          </div>
          <div className="w-56 md:mb-4 m-auto rounded-full bg-[#006DF914] text-center">
            <button
              onClick={() => handleModal(isModal)}
              className=" text-[#006DF9] p-2"
            >
              + New Environment
            </button>
          </div>
        </div>
        <div className="flex flex-wrap md:block mt-7 md:mt-14 md:space-y-4">
          {navData.map((data) => (
            <div key={data.id} className="w-16 text-center md:w-60 m-auto space-y-1">
              <NavLink
                to={data.pathname}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-1 w-60 py-1.5 px-5 font-medium text-start  text-blue-700 md:border-l-4 border-blue-700"
                    : "flex items-center gap-1 w-60 py-1.5 px-5 font-medium text-start md:border-l-4 border-l-transparent "
                }
              >
                <p className="text-2xl">{data.icon}</p>
                <p className="md:block hidden">{data.navname}</p>
              </NavLink>
            </div>
          ))}
        </div>
        {/* userbar */}
        <div className="flex flex-row-reverse justify-between items-center md:block w-60 m-auto md:space-y-3 mt-3 md:mt-32 md:ml-2">
          <div className="flex text-center justify-start items-center"
          >
            <div className="bg-blue-200 rounded-full p-2">
              <BsMoon className="text-2xl text-blue-500" />
            </div>
            <div onClick={() => handleDarkMood(false)} className="ml-4">
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-[#006DF9]" : "bg-blue-200"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
          </div>

          <div className="flex">
            <img className="w-10 h-10 rounded-full" src={pic1} alt="" />
            <button className="md:flex items-center gap-1 ml-5 font-medium text-start hover:text-blue-700 hidden ">
              Liam Trampota
              <IoIosArrowForward className="text-xl" />
            </button>
          </div>
          <div className="flex text-center justify-start items-center">
            <div className="bg-blue-200 rounded-full p-2">
              <IoIosNotifications className="text-2xl text-blue-500" />
            </div>
            <p className="md:flex items-center w-60 py-1.5 px-5 font-medium text-start hover:text-blue-700 hidden">
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
            ? "w-[600px] h-[320px] p-8 rounded-3xl bg-white absolute mt-20 ml-96 z-10 shadow-2xl shadow-gray-600"
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
                <div className="flex justify-around items-center mt-3">
                  <input type="radio" name="" id="" />
                  <p>Reviewer</p>
                  <input type="radio" name="" id="" />
                  <p>Administrator</p>
                </div>
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
