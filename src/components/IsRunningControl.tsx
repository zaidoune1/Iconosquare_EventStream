import React from "react";

import { useLiveChartContext } from "../utils/hooks/useLiveChartContext";
import { IS_RUNNING } from "../utils/types/TinitialState";

function IsRunningControl() {
  const { data, dispatch } = useLiveChartContext();

  const handleToggleRunning = () => dispatch({ type: IS_RUNNING });

  return (
    <button
      className="bg-blue-500 text-white p-1 w-28 text-base tracking-[2px] font-bold rounded-[4px] m-3 hover:shadow-custom transition"
      onClick={handleToggleRunning}
    >
      {data.isRunning ? "Stop" : "Play"}
    </button>
  );
}

export default IsRunningControl;
