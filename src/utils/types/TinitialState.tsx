export type TinitialState = {
  index: number;
  value1: number;
  value2: number;
  comment?: string;
};

export type Tevents = {
  events: TinitialState[];
};

export type Tpayload = {
  type: string;
  payload: TinitialState;
};

export type TypeOfActions = Tpayload;
