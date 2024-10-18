import React, { useEffect, useRef } from "react";
import { TinitialState } from "../utils/types/TinitialState";

type TEventsFilteredProps = {
  event: TinitialState;
  editField: "value1" | "value2" | null;
  editIndex: number;
  editValue: string | number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSave: (index: number) => void;
  handleEditClick: (
    index: number,
    currentValue: number,
    field: "value1" | "value2" | null
  ) => void;
};

function EventsFiltered({
  event,
  editValue,
  handleChange,
  handleSave,
}: TEventsFilteredProps) {
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [ref]);
  return (
    <>
      <input
        ref={ref}
        type="text"
        value={editValue}
        onChange={handleChange}
        onBlur={() => handleSave(event.index)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSave(event.index);
        }}
        className="p-2 w-full focus:outline-none"
      />
    </>
  );
}

export default EventsFiltered;
