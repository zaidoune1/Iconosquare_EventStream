import React from "react";
import { useLiveChartContext } from "../utils/hooks/useLiveChartContext";
import { RESET } from "../utils/types/TinitialState";

function ResteButton() {
  const { dispatch } = useLiveChartContext();
  return (
    <div>
      <button
        className="bg-blue-500 text-white p-1 w-28 text-base tracking-[2px] font-bold rounded-[4px] m-3 hover:shadow-custom transition"
        onClick={() => {
          dispatch({
            type: RESET,
          });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ResteButton;
