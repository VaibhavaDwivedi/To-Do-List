import React, { useState } from "react";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";

function Task({ data, setData }) {
  const [add, setAdd] = useState(false);
  // const [alert, setAlert] = useState(false);

  const [newTask, setNewTask] = useState("");
  //function to add new tasks from input to display
  const HandleAddTask = () => {
    // let newTodo = document.getElementById("inp").value;
    newTask !== "" && setData([...data, newTask]);
    localStorage.setItem("data", JSON.stringify(data));
    setNewTask("");
  };

  return (
    <div className="flex flex-col">
      <Button
        onClick={() => {
          setAdd((prevCheck) => !prevCheck); //this will change the state from true to false and false to true
        }}
        className="self-center m-2 active:scale-95"
      >
        Add Task
      </Button>
      {add && (
        <div className="flex flex-col self-center bg-auto w-80">
          <div className="flex flex-row self-center">
            <input
              value={newTask}
              onChange={(e) => {
                setNewTask(e.target.value);
              }}
              type="text"
              placeholder="Add new task..."
              className="self-center bg-white dark:bg-black dark:text-gray-50"
              // id="inp"
            />
            {newTask !== "" ? (
              <AiOutlinePlus
                onClick={HandleAddTask}
                className="m-2 active:scale-95 text-black"
              />
            ) : (
              <AiOutlinePlus
                onClick={HandleAddTask}
                className="m-2 active:scale-95 text-gray-400"
              />
            )}
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
