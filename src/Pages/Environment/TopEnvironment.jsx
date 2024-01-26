import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import setting from "../../../public/images/setting.svg";
import bell from "../../../public/images/bell.svg";
import listview from "../../../public/images/list.svg";
import gridview from "../../../public/images/grid.svg";
import envImg from "../../../public/images/Rectangle 153.png";
import camera from "../../../public/images/camera.svg";
import vedio from "../../../public/images/vedio.svg";
// import profile from '../../../public/images/Ellipse 7.svg'
import down from "../../../public/images/down.svg";
import eye from "../../../public/images/eye.svg";
import massage from "../../../public/images/massage.svg";
import { IoMdArrowBack } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { profile } from "../../assets/images/Images";

const TopEnvironment = () => {
  const [environments, setEnvironment] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [userdatas, setuserData] = useState([]);

  useEffect(() => {
    fetch("/environment.json")
      .then((res) => res.json())
      .then((userdata) => setuserData(userdata));
  }, []);
  //
  const [gridView, setGridView] = useState("list");
  const handelGrid = (viewType) => {
    setGridView(viewType);
  };

  const [open, setOpen] = useState(false);
  const handleSideBar = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={`${
          open
            ? "md:flex md:justify-between"
            : "md:flex md:justify-between md:relative"
        }`}
      >
        {/* <div className=""> */}
        <div className="flex flex-col gap-1">
          <p>Environment</p>
          <div className="flex gap-6 items-center">
            <h2 className="text-4xl font-bold text-[#006DF9]">Metanote</h2>
            <button className="hover:bg-slate-300">
              <IoIosArrowDown className="font-bold text-2xl text-[#006DF9]" />
            </button>
          </div>
          {/* </div> */}
        </div>
        <div className="space-y-4">
          <div className="flex justify-end items-center gap-4">
            <div className="rounded-full bg-[#006DF9] text-center">
              <button className="md:w-56 w-44 text-white md:p-2 p-1">
                + New Environment
              </button>
            </div>
            <button>
              <img
                className="bg-[#006DF914] p-2 w-10 h-10 rounded-full"
                src={setting}
                alt=""
              />
            </button>
            <button>
              <img
                className="bg-[#006DF914] p-2 w-10 h-10 rounded-full"
                src={bell}
                alt=""
              />
            </button>
          </div>
          <div className="grid grid-flow-row gap-2 justify-center md:flex md:gap-4 md:items-center">
            <button className="md:w-40 py-2 text-center bg-[#006DF914] text-[#006DF9]">
              Manage fields
            </button>
            <button className="md:w-40 py-2 text-center bg-[#006DF914] text-[#006DF9]">
              Export all
            </button>
            <div className="flex gap-4 items-center">
              <button onClick={() => handelGrid("list")}>
                <img src={listview} alt="" />
              </button>
              <button onClick={() => handelGrid("grid")}>
                <img
                  className={`${gridView === "grid" ? "bg-[#006DF9] text-white" : ""}`}
                  src={gridview}
                  alt=""
                />
              </button>
              <p>
                Order by <span className="text-[#006DF9]">Last edit</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {gridView === "list" ? (
          <div className="md:w-full mt-10">
            <div className="md:flex items-center mb-4 hidden">
              <p className="md:ml-5 font-bold text-[#A1A1A1]">Preview</p>
              <p className="md:ml-32 font-bold text-[#A1A1A1]">Number</p>
              <p className="md:ml-8 font-bold text-[#A1A1A1]">Request/Type</p>
              <p className="md:ml-16 font-bold text-[#A1A1A1]">Description</p>
              <p className="md:ml-16 font-bold text-[#A1A1A1]">Media</p>
              <p className="md:ml-24 font-bold text-[#A1A1A1]">Status</p>
            </div>
            <div className="h-[calc(100vh-210px)] overflow-scroll overflow-x-hidden">
            {environments.map((environment, index) => (
              <div
                key={index}
                className="md:flex md:justify-between text-center md:items-center p-4 bg-[#F1F1F1] rounded-md mb-4 space-y-2 "
              >
                <img className="md:ml-0 ml-16" src={envImg} alt="" />
                <p>#{index + 1}</p>
                <p>Contact Form</p>
                <p>Contact Form</p>
                <div className="flex justify-around gap-4">
                  <img src={camera} alt="" />
                  <img src={vedio} alt="" />
                </div>
                <div className="flex gap-4" >
                <button className="bg-orange-200 w-32 text-center py-2 rounded-full text-orange-500 font-bold">
                  Review
                </button>
                <button className="text-[#006DF9] font-bold">Export</button>
                <button className="text-[#006DF9] font-bold">Details</button>
                </div>
              </div>
            ))}
            </div>
          </div>
        ) : (
          <div
            className={`${
              open
                ? "md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-2"
                : "md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-2 h-[calc(100vh-180px)] overflow-scroll overflow-x-hidden"
            }`}
          >
            {userdatas.map((user) => (
              <div
                onClick={() => handleSideBar(open)}
                key={user.id}
                className="w-72 h-96 rounded-3xl border p-1 relative "
              >
                <div className="bg-white w-10 h-10 rounded-full border flex justify-center items-center absolute m-3">
                  <button>
                    <img src={camera} alt="" />
                  </button>
                </div>
                <div>
                  <img className="w-full mb-4" src={envImg} alt="" />
                  <h2 className="text-2xl font-bold">
                    Comments about Access Management
                  </h2>
                </div>
                <div className="space-y-4 mt-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <img src={profile} alt="" />
                      <p>Liam Trampota</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="text-[#B2B2B2]">Not Shared</p>
                      <img className="w-4" src={down} alt="" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button className="flex items-center bg-[#006DF914] w-10 rounded-full justify-center gap-1 text-[#006DF9]">
                        3<img src={eye} alt="" />
                      </button>
                      <button className="flex items-center bg-[#006DF914] w-10 rounded-full justify-center gap-1 text-[#006DF9]">
                        1<img src={massage} alt="" />
                      </button>
                    </div>
                    <p className="text-[#B2B2B2]">2 days ago</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* sidebar */}
      <div
        className={`${
          open
            ? "lg:w-1/2 md:w-[600px] w-full min-h-screen border p-8 space-y-5 absolute lg:-mt-[961px] lg:ml-[354px] bg-white"
            : "hidden"
        }`}
      >
        <div className="flex justify-between items-center">
          <div
            onClick={() => handleSideBar(open)}
            className="flex items-center text-[#B7B7B7] gap-2"
          >
            <IoMdArrowBack />
            <p>Back</p>
          </div>
          <div className="flex items-center gap-2 text-[#B7B7B7]">
            <IoShareSocialOutline />
            <FaPencil />
          </div>
        </div>
        <button className="w-32 py-1 rounded-md text-center bg-[#CBF0E3]">
          Development
        </button>
        <h2>Comments about Access Management</h2>
        <p className="text-justify text-[#B7B7B7]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className="flex gap-14">
          <p className="text-[#B7B7B7]">Assigned</p>
          <div className="md:grid grid-cols-2 gap-5">
            <div className="flex items-center gap-2">
              <img src={profile} alt="" />
              <p>Liam Trampota</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={profile} alt="" />
              <p>Liam Trampota</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={profile} alt="" />
              <p>Liam Trampota</p>
            </div>
            <div className="flex items-center gap-2">
              <img src={profile} alt="" />
              <p>Liam Trampota</p>
            </div>
          </div>
        </div>
        <div className="flex gap-11">
          <p className="text-[#B7B7B7]">Created</p>
          <p className="font-bold">Nov 2, 2023</p>
        </div>
        <div className="flex gap-14">
          <p className="text-[#B7B7B7]">Status</p>
          <button className="w-28 py-1 rounded-md text-center bg-[#F8EDD0] text-[#AD8227]">
            Review
          </button>
        </div>
      </div>
      {/* tab */}
      <div></div>
    </>
  );
};

export default TopEnvironment;
