import React, { useEffect } from "react";

type TButtonprops = {
  handleEditClick: (
    index: number,
    currentValue: number,
    field: "value1" | "value2" | null
  ) => void;
  eventValue: number;
  eventIndex: number;
  value: "value1" | "value2" | null;
  getCells: number | null;
};

function Button({
  handleEditClick,
  eventValue,
  eventIndex,
  value,
  getCells,
}: TButtonprops) {
  useEffect(() => {
    if (getCells === eventValue) {
      handleEditClick(eventIndex, eventValue, value);
    }
  }, [eventIndex, eventValue, getCells, handleEditClick, value]);
  return (
    <span onClick={() => handleEditClick(eventIndex, eventValue, value)}>
      {eventValue}
    </span>
  );
}

export default Button;
