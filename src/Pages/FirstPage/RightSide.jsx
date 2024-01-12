import React from "react";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineControl } from "react-icons/ai";
import { TbArrowsSort } from "react-icons/tb";
import pic1 from "../../../public/images/user-card-4.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { useForm } from "react-hook-form";

// form

const RightSide = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="col-span-2">
      {/* Right Side */}
      <div className="mt-4 ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-start items-start gap-1">
            <p>Environment</p>
            <div className="flex gap-6 items-center">
              <h2 className="text-4xl font-bold text-blue-700">Metanote</h2>
              <button className="hover:bg-slate-300">
                <IoIosArrowDown className="font-bold text-2xl text-blue-700" />
              </button>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search todos"
              className="w-60 border border-gray-400 p-2 rounded-md"
            />
            <AiOutlineControl className="text-2xl" />
            <TbArrowsSort className="text-2xl" />
          </div>
        </div>
        {/* form start */}
        <div className="mt-10">
            <div className="flex justify-between mb-10">
                <h2 className="text-xl font-bold">Personal information</h2>
                <p className="text-xl font-bold text-blue-700">Edit</p>
            </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
            <div>
            <p>First Name</p>
            <input
              className="w-full border border-gray-400 rounded-sm p-3"
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
            <p>Email</p>
            <input
              className="w-full border border-gray-400 rounded-sm p-3"
              placeholder="First Name"
              {...register("firstName")}
            />
            </div>
            </div>
          </form>
        </div>
        {/* form end */}

          {/* card start */}
        <div className="rounded-md mt-10 bg-blue-700">
            <div className="flex justify-between p-5">
                <div>
                    <h2 className="text-2xl text-white">Business PRO</h2>
                    <p className="text-white">Includes up to 20 users</p>
                </div>
                <button className="border p-1">Manage plan</button>
            </div>
        </div>
          {/* card end */}
      </div>
    </div>
  );
};

export default RightSide;
