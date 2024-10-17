import React, { useState } from "react";
import { useLiveChartContext } from "../utils/hooks/useLiveChartContext";
import LiveTable from "./LiveTable";
import { TinitialState } from "../utils/types/TinitialState";
import { CategoricalChartState } from "recharts/types/chart/types";
import Charts from "./Charts";

const LiveChart = () => {
  const { data } = useLiveChartContext();

  const [getCells, setCells] = useState<number | null>(null);

  const nbTotalEvents = data?.events?.length;
  const start = Math.max(0, nbTotalEvents - 20);
  const eventsFiltered = data.events.slice(start, nbTotalEvents);

  const cellObjects = (e: CategoricalChartState): void => {
    const cellValue = eventsFiltered.find(
      (_: TinitialState, index: number) => index === e.activeTooltipIndex
    );

    setCells(cellValue?.value1 as number);
  };

  return (
    <div>
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
