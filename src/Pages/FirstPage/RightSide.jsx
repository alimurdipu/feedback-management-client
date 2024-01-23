import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useForm } from "react-hook-form";
import visa from "../../../public/images/visa.svg";
import setting from "../../../public/images/setting.svg";
import pdfpic from "../../../public/images/pdf.svg"
import pdfdpic from "../../../public/images/pdfD.svg"
import { RxCross2 } from "react-icons/rx";

const Billing = [
  {
    id: 1,
    pdfpic: "/public/images/pdf.svg",
    pdfdpic: "/public/images/pdfD.svg",
    invoiceno: "Invoice #13245",
    date: "06/01/2023"
  },
  {
    id: 2,
    pdfpic: "/public/images/pdf.svg",
    pdfdpic: "/public/images/pdfD.svg",
    invoiceno: "Invoice #13246",
    date: "07/01/2023"
  },
  {
    id: 3,
    pdfpic: "/public/images/pdf.svg",
    pdfdpic: "/public/images/pdfD.svg",
    invoiceno: "Invoice #13247",
    date: "07/01/2023"
  },
  {
    id: 4,
    pdfpic: "/public/images/pdf.svg",
    pdfdpic: "/public/images/pdfD.svg",
    invoiceno: "Invoice #13248",
    date: "08/01/2023"
  },
]

const RightSide = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
        {/* Right Side */}
        <div>
        <div className="dark:bg-black flex justify-between p-8 relative">
            <div className="flex flex-col justify-start items-start gap-1">
            <p>Environment</p>
              <div className="flex gap-6 items-center">
                <h2 className="text-4xl font-bold text-[#006DF9]">Metanote</h2>
                <button className="hover:bg-slate-300">
                  <IoIosArrowDown className="font-bold text-2xl text-[#006DF9]" />
                </button>
              </div>
              <h2 className="text-3xl font-bold mt-10">Admin</h2>
            </div>
            <button>
          <img className="bg-[#006DF914] p-2" src={setting} alt="" />
        </button>
        </div>
        <div className="md:flex gap-4">
        <div className="flex-1 p-8">
          {/* form start */}
          <div className="mt-10">
            <div className="md:flex justify-between mb-5 md:mb-10">
              <h2 className="text-xl font-bold">Personal information</h2>
              <p className="text-xl font-bold text-[#006DF9]">Edit</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="md:grid grid-cols-2 gap-4">
                <div>
                  <p>First Name</p>
                  <input
                    className="md:w-full border border-gray-400 rounded-sm p-3"
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
                <div>
                  <p>Email</p>
                  <input
                    className="md:w-full border border-gray-400 rounded-sm p-3"
                    placeholder="First Name"
                    {...register("firstName")}
                  />
                </div>
              </div>
            </form>
          </div>
          {/* form end */}
          <h2 className="text-xl font-bold mt-16">Admin</h2>
          {/* card start */}
          <div className="rounded-md h-72 mt-8 bg-gradient-to-r from-[#006DF9] to-[#0b5eca]">
            <div className="md:flex justify-between p-2 md:p-5">
              <div>
                <h2 className="text-2xl text-white">Business PRO</h2>
                <p className="text-white">Includes up to 20 users</p>
              </div>
              <div>
                <button className="border p-1 md:p-2 rounded-md text-[#FFFFFF] bg-gray-400">
                  Manage plan
                </button>
              </div>
            </div>
            <div className="md:w-96 m-auto bg-opacity-20 rounded-md bg-white p-2 md:p-5">
              <div className="md:flex justify-between">
                <div className="space-y-3">
                  <h2 className="text-2xl text-white">Payment</h2>
                  <img className="bg-white p-1 md:p-4 rounded-md" src={visa} alt="" />
                  <p className="text-white">Visa ending in 5325</p>
                </div>
                <div>
                  <button className="border p-1 md:p-2 rounded-md text-[#FFFFFF] bg-gray-400">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* card end */}
        </div>
        <div className="md:flex-1 p-8">
        <div className="md:mt-9 space-y-4 p-1">
          <p className="text-xl font-bold mb-12">Integrations</p>
          <div className="w-full h-44 bg-[#F1F1F1]"></div>
        </div>
        <div className="md:flex justify-between mt-10 p-1">
          <h2 className="text-xl font-bold">Personal information</h2>
          <p className="text-xl font-bold text-[#006DF9]">Edit</p>
        </div>
        <div className="mt-6 space-y-4">
        {
          Billing.map(bill => <div key={bill.id} className="md:flex justify-between bg-[#F1F1F1]  items-center md:p-1 p-4">
          <img src={pdfpic} alt="" />
          <div className="md:flex gap-10">
              <p>{bill.invoiceno}</p>
              <p>{bill.date}</p>
          </div>
          <img src={pdfdpic} alt="" />
        </div>)
        }
        </div>
      </div>
        </div>
        </div>
    </>
  );
};

export default RightSide;
