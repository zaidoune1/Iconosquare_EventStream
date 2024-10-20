import React, { ReactNode } from "react";
import { FaChartSimple } from "react-icons/fa6";

type Tdata = {
  value1: ReactNode;
  value2: ReactNode;
  titlevalue1: string;
  titlevalue2: string;
};

function StatisticCard({ value1, value2, titlevalue1, titlevalue2 }: Tdata) {
  return (
    <>
      <div
        className=" flex justify-center items-center border rounded-full bg-slate-200 w-10 h-10 text-[#0089ff] 
        "
      >
        <FaChartSimple />
      </div>
      <div className="flex my-3">
        <span className=" text-lg font-medium "> {titlevalue1} : </span>
        <h3 className="ml-3 text-xl font-medium"> {value1} </h3>
      </div>
      <div className="flex">
        <span className="text-lg font-medium"> {titlevalue2} : </span>
        <h3 className="ml-3 text-xl font-medium"> {value2} </h3>
      </div>
    </>
  );
}

export default StatisticCard;
