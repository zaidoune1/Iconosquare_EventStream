import React, { useState } from "react";
import { useLiveChartContext } from "../utils/hooks/useLiveChartContext";
import LiveTable from "./LiveTable";
import { TinitialState } from "../utils/types/TinitialState";
import { CategoricalChartState } from "recharts/types/chart/types";
import Charts from "./Charts";

const LiveChart = () => {
  const { data } = useLiveChartContext();
  const nbTotalEvents = data?.events?.length;
  const eventsFiltered = data.events.slice(nbTotalEvents - 20, nbTotalEvents);

  const [getCells, setCells] = useState<TinitialState>();

  const cellObjects = (e: CategoricalChartState): void => {
    const cellValue = eventsFiltered.find(
      (_: TinitialState, index: number) => index === e.activeTooltipIndex
    );

    setCells(cellValue);
  };

  return (
    <>
      <Charts eventsFiltered={eventsFiltered} cellObjects={cellObjects} />
      <LiveTable getCells={getCells} />
    </>
  );
};

LiveChart.propTypes = {};

export default LiveChart;
