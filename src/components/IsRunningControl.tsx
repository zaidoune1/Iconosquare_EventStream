import React from "react";

import { useLiveChartContext } from "../utils/hooks/useLiveChartContext";
import { IS_RUNNING } from "../utils/types/TinitialState";
import NavigationButtons from "./NavigationButtons";

function IsRunningControl() {
  const { data, dispatch } = useLiveChartContext();

  const handleToggleRunning = () => dispatch({ type: IS_RUNNING });

  return (
    <NavigationButtons
      btnName={data.isRunning ? "Stop" : "Play"}
      navigationBtn={handleToggleRunning}
    />
  );
}

export default IsRunningControl;
