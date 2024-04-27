import React from "react";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

const Sidebar = ({ options, handleSelect, selectedIndex }) => {
  console.log(options);

  return (
    <div className="flex flex-col h-full w-64 items-start justify-between">
      <div className="flex flex-col w-full gap-y-5">
        {options?.map(({ label }, i) => {
          const isSelected = i === selectedIndex;
          const defaultClassName =
            "transition-all hover:scale-105 hover:font-semibold";
          const selectedClassName = "font-semibold scale-105";
          const className = isSelected ? selectedClassName : defaultClassName;

          return (
            <div
              key={label}
              onClick={() => handleSelect(i)}
              className={`flex cursor-pointer items-center justify-between ${className}`}
            >
              <span className="text-base">{label}</span>
              {isSelected && <FiArrowRight size="1.25rem" strokeWidth={2.5} />}
            </div>
          );
        })}
      </div>

      <a
        target="_blank"
        rel="noreferrer"
        className="flex px-4 py-2 items-center gap-x-3 border-[1px] rounded-md cursor-pointer border-slate-400"
        href="https://docs.google.com/spreadsheets/d/1xYtvMLc8LhBFOgovS8RLCQa2yso7C0ViuyFgXZdt6Z4/edit#gid=1381247138"
      >
        <FiExternalLink strokeWidth={2.5} />
        <span>View Data Source</span>
      </a>
    </div>
  );
};

export default Sidebar;
