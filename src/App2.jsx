import React, { useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import Nutton from "./Nutton";

//This is just an earlier version of this app currently not using this file

function App() {
  const [data, setData] = useState([]);
  console.log("data", data);

  //function to add new tasks from input to display
  const HandleClick = () => {
    let new1 = document.getElementById("inp").value;
    console.log(new1);
    new1 != ""
      ? setData((prev) => [...prev, document.getElementById("inp").value])
      : "";
  };
  //function to delete completed task from data
  const handleDelete = () => {};
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="text-4xl">ToDo List</div>
      <div className="flex flex-col gap-2 px-2 py-4 shadow-xl bg-slate-350 w-80">
        {/* map function to map all the data which is store in state */}
        {data.map((arr) => (
          <div className="flex flex-row gap-5 p-2 ">
            {/* This is to show the todo data on screen with checkbox */}
            <input
              id="tick"
              className="cursor-pointer peer/draft"
              type="CHECKBOX"
              name="status"
            />
            <label for="tick" class="peer-checked/draft:line-through">
              {arr}
            </label>

            {/* Delete Icon to delete the items from todo list */}
            <BsFillTrash3Fill
              className="my-auto cursor-pointer active:scale-105"
              onClick={handleDelete}
            />
          </div>
        ))}
        {/* To add more tasks into the todo list */}
        <div>
          <input
            className="border-4 border-double bg-slate-300"
            id="inp"
          ></input>
          <Nutton onClick={HandleClick} className="active:scale-95">
            Add Task
          </Nutton>
        </div>
      </div>
    </div>
  );
}

export default App;
