import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import setting from "../../../public/images/setting.svg";
import bell from "../../../public/images/bell.svg";
import listview from '../../../public/images/list.svg'
import gridview from '../../../public/images/grid.svg'

const TopEnvironment = () => {
  return (
    <>
      <div className="flex justify-between mt-4">
        <div className="">
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
        <div className="space-y-4">
          <div className="flex justify-end items-center gap-3">
            <div className="rounded-full bg-[#006DF9] text-center">
              <button className="w-56 text-white p-2">+ New Environment</button>
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
          <div className="flex gap-4 items-center">
          <button className="w-40 py-3 text-center bg-[#006DF914] text-[#006DF9]">
          Manage fields
          </button>
          <button className="w-40 py-3 text-center bg-[#006DF914] text-[#006DF9]">
          Export all
          </button>
          <button><img src={listview} alt="" /></button>
          <button><img src={gridview} alt="" /></button>
          <p>Order by <span className="text-[#006DF9]">Last edit</span></p>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default TopEnvironment;
