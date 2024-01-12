import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const FirstPage = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <LeftSide/>
      {/* Right Side */}
      <RightSide/>
    </div>
  )
}

export default FirstPage