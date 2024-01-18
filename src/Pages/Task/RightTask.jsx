import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import setting from "../../../public/images/setting.svg";
import camera from "../../../public/images/camera.svg";
import envImg from "../../../public/images/Rectangle 153.png";
import profile from "../../../public/images/Ellipse 7.svg";
import down from "../../../public/images/down.svg";
import eye from "../../../public/images/eye.svg";
import massage from "../../../public/images/massage.svg";
import user from "../../../public/images/user-card-4.jpg";
import { GrAttachment } from "react-icons/gr";
import { BsChatRightText } from "react-icons/bs";

const RightTask = () => {
  return (
    <div>
      <div className="flex justify-between p-8 relative">
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
      <div className="grid grid-cols-4 gap-4 mb-4">
        <p className="font-bold text-xl">To do</p>
        <p className="font-bold text-xl">In progress</p>
        <p className="font-bold text-xl">In review</p>
        <p className="font-bold text-xl">Done</p>
      </div>
      {/* grid col */}
      <div className="grid grid-cols-4 gap-4">
        {/* card start */}
        <div className="space-y-3 min-h-screen bg-[#F1F1F1]">
          <div className="w-56 rounded-3xl border p-2 bg-white">
            <div>
              <h2 className="text-xl font-bold">
                Comments about Access Management
              </h2>
              <img className="w-full mb-4" src={envImg} alt="" />
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <p className="flex gap-2 items-center"><GrAttachment /> 4</p>
                  <p className="flex gap-2 items-center"><BsChatRightText /> 6</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={profile} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-56 rounded-3xl border p-2 bg-white">
            <div>
              <h2 className="text-xl font-bold">
                Comments about Access Management
              </h2>
              <img className="w-full mb-4" src={envImg} alt="" />
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <p className="flex gap-2 items-center"><GrAttachment /> 4</p>
                  <p className="flex gap-2 items-center"><BsChatRightText /> 6</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={profile} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 min-h-screen bg-[#F1F1F1]">
        
        </div>
        <div className="space-y-3 min-h-screen bg-[#F1F1F1]">
          <div className="w-56 rounded-3xl border p-2 bg-white">
            <div>
              <h2 className="text-xl font-bold">
                Comments about Access Management
              </h2>
              <img className="w-full mb-4" src={envImg} alt="" />
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <p className="flex gap-2 items-center"><GrAttachment /> 4</p>
                  <p className="flex gap-2 items-center"><BsChatRightText /> 6</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={profile} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-56 rounded-3xl border p-2 bg-white">
            <div>
              <h2 className="text-xl font-bold">
                Comments about Access Management
              </h2>
              <img className="w-full mb-4" src={envImg} alt="" />
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <p className="flex gap-2 items-center"><GrAttachment /> 4</p>
                  <p className="flex gap-2 items-center"><BsChatRightText /> 6</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={profile} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-56 rounded-3xl border p-2 bg-white">
            <div>
              <h2 className="text-xl font-bold">
                Comments about Access Management
              </h2>
              <img className="w-full mb-4" src={envImg} alt="" />
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <p className="flex gap-2 items-center"><GrAttachment /> 4</p>
                  <p className="flex gap-2 items-center"><BsChatRightText /> 6</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={profile} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" space-y-3 min-h-screen bg-[#F1F1F1]">
          <div className="w-56 rounded-3xl border p-2 bg-white">
            <div>
              <h2 className="text-xl font-bold">
                Comments about Access Management
              </h2>
              <img className="w-full mb-4" src={envImg} alt="" />
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <p className="flex gap-2 items-center"><GrAttachment /> 4</p>
                  <p className="flex gap-2 items-center"><BsChatRightText /> 6</p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={profile} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightTask;
