import React, { useEffect, useState } from "react";

import { useLiveChartContext } from "../utils/hooks/useLiveChartContext";
import { IS_RUNNING } from "../utils/types/TinitialState";
import NavigationButtons from "./NavigationButtons";
import { FaGooglePlay, FaPause } from "react-icons/fa";
import Logo from "./Logo";
import ResteButton from "./ResteButton";
import StatisticCard from "./StatisticCard";

export type TgetCellsProps = {
  getCells: number | null;
};

function IsRunningControl({ getCells }: TgetCellsProps) {
  const [maxValue, setMaxValue] = useState<{
    maxValue1: number;
    maxValue2: number;
  }>({
    maxValue1: 0,
    maxValue2: 0,
  });

  const [minValue, setMinValue] = useState<{
    minValue1: number;
    minValue2: number;
  }>({
    minValue1: 0,
    minValue2: 0,
  });

  const { data, dispatch } = useLiveChartContext();

  const handleToggleRunning = () => dispatch({ type: IS_RUNNING });

  useEffect(() => {
    const maxValue1 = Math.max(...data.events.map((item) => item.value1));
    const maxValue2 = Math.max(...data.events.map((item) => item.value2));

    const minValue1 = Math.min(...data.events.map((item) => item.value1));
    const minValue2 = Math.min(...data.events.map((item) => item.value2));

    setMaxValue({ ...minValue, maxValue1, maxValue2 });
    setMinValue({ ...minValue, minValue1, minValue2 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.events]);

  return (
    <div className="flex justify-around items-center my-8 shadow-custom p-6 border rounded-md bg-gradient-to-r from-[#0088ff11] to-green-50">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 flex items-center space-x-4 mb-8">
          <Logo size="40" />
          <span>Iconosquare</span>
        </h1>
        <div className="bg-gray-100 font-black px-4 border rounded-md bg-gradient-to-r from-[#0088ff23] to-green-100 ">
          <NavigationButtons
            btnName={data.isRunning ? <FaPause /> : <FaGooglePlay />}
            navigationBtn={handleToggleRunning}
            className={"text-3xl font-black text-[#0089ff] px-4"}
            iconeDescription={data.isRunning ? "Stop" : "Play"}
          />
          <ResteButton getCells={getCells} />
        </div>
      </div>

      <div className=" border rounded-md w-48 h-48 flex justify-center items-center flex-col shadow-custom">
        <StatisticCard
          value1={minValue.minValue1}
          title={"Min"}
          value2={minValue.minValue2}
        />
      </div>
      <div className=" border rounded-md w-48 h-48 flex justify-center items-center flex-col shadow-custom">
        <StatisticCard
          title={"Max"}
          value1={maxValue.maxValue1}
          value2={maxValue.maxValue2}
        />
      </div>
    </div>
  );
}

export default IsRunningControl;
