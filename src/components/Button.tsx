import React from "react";

type TButtonprops = {
  handleEditClick: (
    index: number,
    currentValue: number,
    field: "value1" | "value2"
  ) => void;
  event: { index: number; value1: number; value2: number };
  field: "value1" | "value2";
};

function Button({ handleEditClick, event, field }: TButtonprops) {
  return (
    <span onClick={() => handleEditClick(event.index, event[field], field)}>
      {event[field]}
    </span>
  );
}

export default Button;
