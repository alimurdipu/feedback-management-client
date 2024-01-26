import React from "react";
// import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const FirstPage = () => {
  return (
    <div className="flex-1 p-4 h-[calc(100vh)] overflow-scroll overflow-x-hidden">
      <RightSide/>
    </div>
  )
}

export default FirstPage