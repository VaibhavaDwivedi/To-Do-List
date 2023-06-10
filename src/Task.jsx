import React, { useState } from "react";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";

function Task({ alert, onAddClick }) {
  const [add, setAdd] = useState(false);
  return (
    <div className="flex flex-col">
      {alert && <div className="mx-auto text-red-500">Given Task is blank</div>}
      <Button
        onClick={() => {
          setAdd((prevCheck) => !prevCheck); //this will change the state from true to false and false to true
        }}
        className="self-center m-2 active:scale-95"
      >
        Add Task
      </Button>
      {add && (
        <div className="flex flex-col self-center bg-auto shadow-lg w-80">
          <div className="flex flex-row self-center">
            <input
              className="self-center bg-white dark:bg-black dark:text-gray-50"
              id="inp"
              placeholder="Add new task..."
            />
            <AiOutlinePlus
              onClick={onAddClick}
              className="m-2 active:scale-95"
            />
          </div>
          <Button
            onClick={() => {
              setAdd(false);
            }}
            className="self-center m-2 active:scale-95"
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}

export default Task;
