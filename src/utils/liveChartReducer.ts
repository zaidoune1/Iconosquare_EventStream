import { Reducer } from "react";
import {
  IS_RUNNING,
  NEW_EVENT,
  Tevents,
  TinitialState,
  TypeOfActions,
  UPDATE_EVENT_VALUE,
} from "./types/TinitialState";

export const liveChartReducer: Reducer<Tevents, TypeOfActions> = (
  state: Tevents,
  action: TypeOfActions
) => {
  switch (action.type) {
    case NEW_EVENT:
      if (!state.isRunning) return state;
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case IS_RUNNING:
      return {
        ...state,
        isRunning: !state.isRunning,
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
