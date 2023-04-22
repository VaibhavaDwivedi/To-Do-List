import React, { useState } from "react";
import Nutton from "./Nutton";

function Task({ alert, onClick }) {
  const [add, setAdd] = useState(false);
  return (
    <div className="flex flex-col">
      <Nutton
        onClick={() => {
          setAdd((prevCheck) => !prevCheck);//this will change the state from true to false and false to true
        }}
        className="self-center m-2 active:scale-95"
      >
        Add Task
      </Nutton>
      {add && (
        <div className="flex flex-col self-center bg-auto shadow-lg w-80">
          <input
            className="self-center border-4 border-double bg-slate-300 dark:bg-black dark:text-gray-50"
            id="inp"
            placeholder="Add new task..."
          ></input>
          <div className="flex flex-row self-center">
            <Nutton
              onClick={onClick}
              className="self-start m-2 active:scale-95"
            >
              Add
            </Nutton>
            <Nutton
              onClick={() => {
                setAdd(false);
              }}
              className="self-end m-2 active:scale-95"
            >
              Cancel
            </Nutton>
          </div>
        </div>
      )}
      {alert && <div className="mx-auto text-red-500">Given Task is blank</div>}
    </div>
  );
}

export default Task;
