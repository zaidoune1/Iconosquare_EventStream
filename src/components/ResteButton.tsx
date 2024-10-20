import React from "react";
import { useLiveChartContext } from "../utils/hooks/useLiveChartContext";
import { RESET } from "../utils/types/TinitialState";
import NavigationButtons from "./NavigationButtons";
import { GiCancel } from "react-icons/gi";
import { TgetCellsProps } from "./IsRunningControl";

function ResteButton({ getCells }: TgetCellsProps) {
  const { dispatch } = useLiveChartContext();

  // getCells

  const resetHandler = () =>
    dispatch({
      type: RESET,
    });

  return (
    <div>
      {
        <NavigationButtons
          btnName={<GiCancel />}
          navigationBtn={resetHandler}
          className={"text-3xl font-black text-[#0089ff] px-4"}
          iconeDescription={"Discard Changes"}
        />
      }
    </div>
  );
}

export default ResteButton;
