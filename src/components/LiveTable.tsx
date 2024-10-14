import React, { useState, ChangeEvent } from "react";
import { useLiveChartContext } from "../utils/hooks/useLiveChartContext";
import {
  IS_NOT_RUNNING,
  IS_RUNNING,
  UPDATE_EVENT_VALUE,
} from "../utils/types/TinitialState";
import EventsFiltered from "./EventsFiltered";
import Button from "./Button";

interface TinitialState {
  index: number;
  value1: number;
  value2: number;
  comment?: string;
}

const LiveTable: React.FC = () => {
  const { data, dispatch } = useLiveChartContext();
  const nbTotalEvents = data?.events?.length;
  const eventsFiltered = data.events.slice(nbTotalEvents - 20, nbTotalEvents);

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editField, setEditField] = useState<"value1" | "value2" | null>(null);
  const [editValue, setEditValue] = useState<string | number>("");

  const handleEditClick = (
    index: number,
    currentValue: number,
    field: "value1" | "value2"
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
          editField === "value1"
            ? (data.events[index].value1 = Number(editValue))
            : data.events[index].value1,
        value2:
          editField === "value2"
            ? (data.events[index].value2 = Number(editValue))
            : data.events[index].value2,
      },
    });

    dispatch({ type: IS_RUNNING });
    setEditIndex(null);
    setEditField(null);
    setEditValue("");
  };

  return (
    <div className="flex border border-gray-300 rounded">
      <div>
        <div className="p-2">Index</div>
        <div className="p-2 border-t border-gray-300">Value 1</div>
        <div className="p-2 border-t border-gray-300">Value 2</div>
      </div>
      {eventsFiltered.map((event: TinitialState) => (
        <div key={event.index} className="border-l border-gray-300 flex-1">
          <div className="p-2">{event.index}</div>
          <div className="p-2 border-t border-gray-300">
            {editIndex === event.index && editField === "value1" ? (
              <EventsFiltered
                event={event}
                editField={editField}
                editIndex={editIndex}
                editValue={editValue}
                handleChange={handleChange}
                handleSave={handleSave}
                handleEditClick={handleEditClick}
              />
            ) : (
              <Button
                handleEditClick={handleEditClick}
                event={event}
                field="value1"
              />
            )}
          </div>

          <div className="p-2 border-t border-gray-300">
            {editIndex === event.index && editField === "value2" ? (
              <EventsFiltered
                event={event}
                editField={editField}
                editIndex={editIndex}
                editValue={editValue}
                handleChange={handleChange}
                handleSave={handleSave}
                handleEditClick={handleEditClick}
              />
            ) : (
              <Button
                handleEditClick={handleEditClick}
                event={event}
                field="value2"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveTable;
