import React, { useState } from "react";
import { useLiveChartContext } from "../utils/hooks/useLiveChartContext";
import LiveTable from "./LiveTable";
import { TinitialState } from "../utils/types/TinitialState";
import { CategoricalChartState } from "recharts/types/chart/types";
import Charts from "./Charts";
import NavigationButtons from "./NavigationButtons";

const LiveChart = () => {
  const { data } = useLiveChartContext();

  const [getCells, setCells] = useState<number | null>(null);

  const nbTotalEvents = data?.events?.length;
  const start = Math.max(0, nbTotalEvents - 20);
  const [timeOffset, setTimeOffset] = useState(0);

  const eventsFiltered = data.events.slice(
    start + timeOffset,
    nbTotalEvents + timeOffset
  );

  const cellObjects = (e: CategoricalChartState): void => {
    const cellValue = eventsFiltered.find(
      (_: TinitialState, index: number) => index === e.activeTooltipIndex
    );

    setCells(cellValue?.value1 as number);
  };

  const forWord = (): void => {
    if (
      eventsFiltered[eventsFiltered.length - 1].index !==
      data.events[data.events.length - 1].index
    ) {
      setTimeOffset(timeOffset + 1);
    }
  };

  const backWord = (): void => {
    if (eventsFiltered[0].index !== 0) {
      setTimeOffset(timeOffset - 1);
    }
  };

  return (
    <div>
      <div>
        <NavigationButtons btnName={"For_Word"} navigationBtn={forWord} />
        <NavigationButtons btnName={"Back_Word"} navigationBtn={backWord} />
      </div>
      <Charts eventsFiltered={eventsFiltered} cellObjects={cellObjects} />
      <LiveTable
        getCells={getCells}
        setCells={setCells}
        eventsFiltered={eventsFiltered}
      />
    </div>
  );
};

LiveChart.propTypes = {};

export default LiveChart;
