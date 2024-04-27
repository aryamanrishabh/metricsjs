import React from "react";
import { FaHandPointLeft } from "react-icons/fa";

const NullState = () => {
  return (
    <div className="flex flex-1 ml-24">
      <div className="flex flex-col gap-y-4 items-center">
        <FaHandPointLeft size="7rem" />
        <span className="text-2xl font-semibold">Start Visualizing</span>
      </div>
    </div>
  );
};

export default NullState;
