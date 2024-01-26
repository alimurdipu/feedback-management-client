import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import setting from "../../../public/images/setting.svg";
import deleteIcon from "../../../public/images/delete.svg";
import pic from "../../../public/images/Ellipse 7.svg";
import { RxCross2 } from "react-icons/rx";
import { useForm } from "react-hook-form";

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
  },
];

const RightTeam = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [isModal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!isModal);
  };
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
          <button
            onClick={() => handleModal(isModal)}
            className="w-40 py-3 text-center bg-[#006DF914] text-[#006DF9]"
          >
            Invite new user
          </button>
        </div>
        {/* user start */}
        <div className="md:flex-1 space-y-4 md:ml-10 md:mt-0">
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

      {/* invite user modal */}
      <div
        className={`${
          isModal
            ? "md:w-[600px] md:h-[320px] p-8 rounded-3xl bg-white absolute md:-mt-80 md:ml-72 z-10 -mt-96 shadow-2xl shadow-gray-600"
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
            <div className="md:grid md:grid-cols-2 gap-4">
              <div>
                <p>First Name</p>
                <input
                  className="md:w-full border border-gray-400 rounded-sm p-3 bg-white"
                  placeholder="First Name"
                  {...register("firstName")}
                />
              </div>
              <div>
                <p>Password</p>
                <input
                  className="md:w-full border border-gray-400 rounded-sm p-3"
                  placeholder="First Name"
                  {...register("firstName")}
                />
              </div>
              <div>
                <p>Last Name</p>
                <input
                  className="md:w-full border border-gray-400 rounded-sm p-3"
                  placeholder="First Name"
                  {...register("firstName")}
                />
              </div>
              <div className="md:pt-4 pt-2">
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
        <div className="flex justify-around md:pt-4 pt-2">
          <button className="md:w-40 w-20 py-2 text-center rounded-full bg-[#006DF9] text-white">
            Done
          </button>
          <button
            onClick={() => handleModal(isModal)}
            className="md:w-40 w-20 py-2 text-center rounded-full bg-[#10121314]"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default RightTeam;
