import { Reducer } from "react";
import {
  IS_NOT_RUNNING,
  IS_RUNNING,
  NEW_EVENT,
  OPEN_THE_CELL,
  RESET,
  Tevents,
  TypeOfActions,
  UPDATE_EVENT_VALUE,
} from "./types/TinitialState";

export const liveChartReducer: Reducer<Tevents, TypeOfActions> = (
  state: Tevents,
  action: TypeOfActions
) => {
  switch (action.type) {
    case NEW_EVENT: {
      if (!state.isRunning) {
        return state;
      }

      return {
        ...state,
        events: [
          ...state.events,
          {
            ...action.payload,
            index: state.events[state.events.length - 1].index + 1,
          },
        ],
        previousData: [
          ...state.previousData,

          {
            ...action.payload,
            index: state.events[state.events.length - 1].index + 1,
          },
        ],
      };
    }

    case IS_RUNNING: {
      return {
        ...state,
        isRunning: !state.isRunning,
      };
    }

    case IS_NOT_RUNNING: {
      return {
        ...state,
        isRunning: false,
      };
    }

    case UPDATE_EVENT_VALUE: {
      const { index, value1, value2 } = action.payload;

      const updatedEvents = state.events?.map((event) =>
        event.index === index ? { ...event, value1, value2 } : event
      );

      return {
        ...state,
        events: updatedEvents,
      };
    }

    case RESET:
      return {
        ...state,
        events: state.previousData,
        isRunning: true,
      };

    case OPEN_THE_CELL: {
      const { index, value1 } = action.payload;
      const newObj = state.previousData.map((el) => {
        if (el.index === index && el.value1 !== value1) {
          return { ...el, value1: el.value1 };
        } else {
          return el;
        }
      });
      return {
        ...state,
        previousData: newObj,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
