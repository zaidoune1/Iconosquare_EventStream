export const IS_RUNNING = "isRunning";
export const NEW_EVENT = "new_event";
export const UPDATE_EVENT_VALUE = "new_event";

export type TinitialState = {
  index: number;
  value1: number;
  value2: number;
  comment?: string;
};

export type Tevents = {
  events: TinitialState[];
  isRunning: boolean;
};

export type Tpayload = {
  type: string;
  payload: TinitialState;
};

export type TypeOfActions = Tpayload | { type: typeof IS_RUNNING };
