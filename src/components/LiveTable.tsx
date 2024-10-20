import React, { useState, ChangeEvent, useEffect, SetStateAction } from "react";
import { useLiveChartContext } from "../utils/hooks/useLiveChartContext";
import {
  IS_NOT_RUNNING,
  IS_RUNNING,
  OPEN_THE_CELL,
  TinitialState,
  UPDATE_EVENT_VALUE,
} from "../utils/types/TinitialState";
import EventsFiltered from "./EventsFiltered";
import Button from "./Button";

type TLiveTableprops = {
  getCells: number | null;
  setCells: React.Dispatch<SetStateAction<number | null>>;
  eventsFiltered: TinitialState[];
};

const LiveTable = ({ getCells, setCells, eventsFiltered }: TLiveTableprops) => {
  const { data, dispatch } = useLiveChartContext();

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editField, setEditField] = useState<"value1" | "value2" | null>(null);
  const [editValue, setEditValue] = useState<string | number>("");

  const handleEditClick = (
    index: number,
    currentValue: number,
    field: "value1" | "value2" | null
  ) => {
    setEditIndex(index);
    setEditField(field);
    setEditValue(currentValue);
    dispatch({ type: IS_NOT_RUNNING });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleSave = (index: number) => {
    dispatch({
      type: UPDATE_EVENT_VALUE,
      payload: {
        index,
        value1:
          editField === "value1" && data.events[index].value1 && editValue
            ? (data.events[index].value1 = Number(editValue))
            : data.events[index].value1,

        value2:
          editField === "value2" && data.events[index].value2
            ? (data.events[index].value2 = Number(editValue))
            : data.events[index].value2,
      },
    });
    dispatch({ type: IS_RUNNING });
    setEditIndex(null);
    setEditValue("");
    setEditField(null);

    setCells(null);
  };

  useEffect(() => {
    if (editIndex !== null) {
      dispatch({
        type: OPEN_THE_CELL,
        payload: { index: editIndex, value1: editValue as number },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editIndex, editValue]);

  return (
    <div className="flex border border-gray-300 rounded ">
      <div>
        <div className="p-2 bg-gradient-to-r from-[#0088ff53] to-green-200 font-black">
          Index
        </div>
        <div className="p-2 border-t border-gray-300 bg-[#0088ff18] font-black">
          Value 1
        </div>
        <div className="p-2 border-t border-gray-300 bg-green-100 font-black">
          Value 2
        </div>
      </div>
      {eventsFiltered.map((event: TinitialState) => (
        <div key={event.index} className="border-l border-gray-300 flex-1  ">
          <div className="p-2 bg-gradient-to-r from-[#0088ff11] to-green-50">
            {event.index}
          </div>
          <div
            className={`p-2 text-[#0088ff] font-black  ${
              event.value1 === getCells
                ? "border-2 border-blue-600"
                : "border-t border-gray-300"
            }`}
          >
            {editIndex === event.index && editField === "value1" ? (
              <EventsFiltered
                event={event}
                editField={editField}
                editIndex={editIndex}
                editValue={editValue}
                handleChange={handleChange}
                handleSave={handleSave}
              />
            ) : (
              <Button
                handleEditClick={handleEditClick}
                eventIndex={event.index}
                eventValue={event.value1}
                value={"value1"}
                getCells={getCells}
              />
            )}
          </div>

          <div className="p-2 border-t border-gray-300 text-green-700 font-black">
            {editIndex === event.index && editField === "value2" ? (
              <EventsFiltered
                event={event}
                editField={editField}
                editIndex={editIndex}
                editValue={editValue}
                handleChange={handleChange}
                handleSave={handleSave}
              />
            ) : (
              <Button
                handleEditClick={handleEditClick}
                eventIndex={event.index}
                eventValue={event.value2}
                value={"value2"}
                getCells={getCells}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveTable;
