import React from "react";
import { AiOutlineControl } from "react-icons/ai";
import { TbArrowsSort } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { useForm } from "react-hook-form";
import visa from "../../../public/images/visa.svg";
import setting from "../../../public/images/setting.svg";
import pdf from "../../../public/images/pdf.svg"
import pdfD from "../../../public/images/pdfD.svg"

// form

const RightSide = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="col-span-3">
        {/* Right Side */}
        <div className="mt-4 ">
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
          {/* form start */}
          <div className="mt-10">
            <div className="flex justify-between mb-10">
              <h2 className="text-xl font-bold">Personal information</h2>
              <p className="text-xl font-bold text-[#006DF9]">Edit</p>
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
          <div className="rounded-md mt-10 h-72 bg-gradient-to-r from-[#006DF9] to-[#0b5eca]">
            <div className="flex justify-between p-5">
              <div>
                <h2 className="text-2xl text-white">Business PRO</h2>
                <p className="text-white">Includes up to 20 users</p>
              </div>
              <div>
                <button className="border p-2 rounded-md text-[#FFFFFF] bg-gray-400">
                  Manage plan
                </button>
              </div>
            </div>
            <div className="w-[580px] m-auto bg-opacity-20 rounded-md bg-white p-5">
              <div className="flex justify-between">
                <div className="space-y-3">
                  <h2 className="text-2xl text-white">Payment</h2>
                  <img className="bg-white p-4 rounded-md" src={visa} alt="" />
                  <p className="text-white">Visa ending in 5325</p>
                </div>
                <div>
                  <button className="border p-2 rounded-md text-[#FFFFFF] bg-gray-400">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex justify-end m-3">
          <img className="bg-[#006DF914] p-3" src={setting} alt="" />
        </div>
        <div className="mt-14 space-y-4 p-3">
          <p className="font-bold">Integrations</p>
          <div className="w-full h-40 bg-[#F1F1F1]"></div>
        </div>
        <div className="flex justify-between mt-10 p-3">
          <h2 className="font-bold">Personal information</h2>
          <p className="font-bold text-[#006DF9]">Edit</p>
        </div>
        <div className="space-y-4 p-3">
        <div className="flex justify-between bg-[#F1F1F1]  items-center p-3">
            <img src={pdf} alt="" />
            <div className="flex justify-between items-center">
                <p>Invoice #13245</p>
                <p>06/01/2023</p>
            </div>
            <img src={pdfD} alt="" />
        </div>
        <div className="flex justify-between bg-[#F1F1F1]  items-center p-3">
            <img src={pdf} alt="" />
            <div className="flex justify-between items-center">
                <p>Invoice #13245</p>
                <p>06/01/2023</p>
            </div>
            <img src={pdfD} alt="" />
        </div>
        <div className="flex justify-between bg-[#F1F1F1]  items-center p-3">
            <img src={pdf} alt="" />
            <div className="flex justify-between items-center">
                <p>Invoice #13245</p>
                <p>06/01/2023</p>
            </div>
            <img src={pdfD} alt="" />
        </div>
        <div className="flex justify-between bg-[#F1F1F1]  items-center p-3">
            <img src={pdf} alt="" />
            <div className="flex justify-between items-center">
                <p>Invoice #13245</p>
                <p>06/01/2023</p>
            </div>
            <img src={pdfD} alt="" />
        </div>
        </div>
      </div>
    </>
  );
};

export default RightSide;
