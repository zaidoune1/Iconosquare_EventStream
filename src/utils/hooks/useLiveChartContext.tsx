import React, {
  useContext,
  useReducer,
  createContext,
  ReactNode,
  Dispatch,
  Reducer,
} from "react";
import { createRandomEvent } from "../utils";
import { Tevents } from "../types/TinitialState";
import { TypeOfActions } from "../types/TinitialState";

type Tchildren = {
  children: ReactNode;
};

type Tcontext = {
  data: Tevents;
  dispatch: Dispatch<TypeOfActions>;
};

const LiveChartContext = createContext<Tcontext | undefined>(undefined);

const initialEvents = Array.from(Array(50)).map((_, ix) =>
  createRandomEvent(ix)
);

const initialData: Tevents = {
  events: initialEvents,
};

const liveChartReducer: Reducer<Tevents, TypeOfActions> = (
  state: Tevents,
  action: TypeOfActions
) => {
  switch (action.type) {
    case "new_event":
      return {
        events: [...state.events, action.payload],
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
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
