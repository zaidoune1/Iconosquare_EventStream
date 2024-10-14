export const IS_RUNNING = "isRunning";
export const NEW_EVENT = "new_event";
export const UPDATE_EVENT_VALUE = "new_event";
export const IS_NOT_RUNNING = "is_not_Running";

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

export type TypeOfActions =
  | Tpayload
  | { type: typeof IS_RUNNING }
  | {
      type: typeof UPDATE_EVENT_VALUE;
      payload: { index: number; value1: number; value2: number };
    }
  | { type: typeof IS_NOT_RUNNING };
