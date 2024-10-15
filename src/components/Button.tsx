import React from "react";

type TButtonprops = {
  handleEditClick: (
    index: number,
    currentValue: number,
    field: "value1" | "value2" | null
  ) => void;
  eventValue: number;
  eventIndex: number;
  value: "value1" | "value2" | null;
};

function Button({
  handleEditClick,
  eventValue,
  eventIndex,
  value,
}: TButtonprops) {
  return (
    <span onClick={() => handleEditClick(eventIndex, eventValue, value)}>
      {eventValue}
    </span>
  );
}

export default Button;
