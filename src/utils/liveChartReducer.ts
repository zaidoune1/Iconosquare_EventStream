import { Reducer } from "react";
import {
  IS_NOT_RUNNING,
  IS_RUNNING,
  NEW_EVENT,
  Tevents,
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

    case IS_NOT_RUNNING:
      return {
        ...state,
        isRunning: false,
      };

    case UPDATE_EVENT_VALUE:
      const { index, value1, value2 } = action.payload;

      const updatedEvents = state.events.map((event) =>
        event.index === index ? { ...event, value1, value2 } : event
      );

      return {
        ...state,
        events: updatedEvents,
      };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
