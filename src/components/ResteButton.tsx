import React from "react";
import { useLiveChartContext } from "../utils/hooks/useLiveChartContext";
import { RESET } from "../utils/types/TinitialState";
import NavigationButtons from "./NavigationButtons";

function ResteButton() {
  const { dispatch } = useLiveChartContext();

  const resetHandler = () =>
    dispatch({
      type: RESET,
    });

  return (
    <div>
      <NavigationButtons btnName={"Reset"} navigationBtn={resetHandler} />
    </div>
  );
}

export default ResteButton;
