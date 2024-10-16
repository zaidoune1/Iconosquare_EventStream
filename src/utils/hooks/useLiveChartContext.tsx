import React, {
  useContext,
  useReducer,
  createContext,
  ReactNode,
  Dispatch,
} from "react";
import { createRandomEvent } from "../utils";
import { Tevents, TypeOfActions } from "../types/TinitialState";
import { liveChartReducer } from "../liveChartReducer";

type Tchildren = {
  children: ReactNode;
};

type Tcontext = {
  data: Tevents;
  dispatch: Dispatch<TypeOfActions>;
};

const LiveChartContext = createContext<Tcontext | undefined>(undefined);

export const initialEvents = Array.from(Array(50)).map((_, ix) =>
  createRandomEvent(ix)
);
const initialData: Tevents = {
  events: initialEvents,
  isRunning: true,
  previousData: [...initialEvents],
};

const LiveChartProvider = ({ children }: Tchildren) => {
  const [data, dispatch] = useReducer(liveChartReducer, initialData);

  return (
    <LiveChartContext.Provider
      value={{
        data,
        dispatch,
      }}
    >
      {children}
    </LiveChartContext.Provider>
  );
};

const useLiveChartContext = () => {
  const context = useContext<Tcontext | undefined>(LiveChartContext);
  if (!context) {
    throw new Error(
      "useLiveChartContext should be used within an LiveChartProvider"
    );
  }

  return context;
};

export { LiveChartProvider, useLiveChartContext };
