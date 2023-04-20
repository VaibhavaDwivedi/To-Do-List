import React from "react";
import Nutton from "./Nutton";

function Task({ alert, onClick }) {
  return (
    <>
      <input
        className="border-4 border-double bg-slate-300 dark:bg-black dark:text-gray-50"
        id="inp"
        placeholder="Add new task..."
      ></input>
      <Nutton onClick={onClick} className="active:scale-95 m-2">
        Add Task
      </Nutton>
      {alert && <div className="text-red-500 mx-auto">Given Task is blank</div>}
    </>
  );
}

export default Task;
