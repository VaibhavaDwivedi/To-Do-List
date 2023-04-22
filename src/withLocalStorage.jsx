import React, { useState, useEffect } from "react";
import List from "./List";
import Task from "./Task";

function App() {
  const savedDataString = localStorage.getItem("ThingToDo") || "{}";
  const savedData = JSON.parse(savedDataString);
  console.log(savedData);

  //useState hook to store data and alert state
  // const [data, setData] = useState(["Reading", "listening music"]);
  const [state, setState] = useState(["reading", "play"]);
  const [alert, setAlert] = useState(false);

  //function to delete tasks from list
  const handleDelete = (idx) => {
    setState(state.filter((item, i) => i !== idx));
    // localStorage.removeItem("name");
  };

  //function to add new tasks from input to display
  const HandleClick = () => {
    let newTodo = document.getElementById("inp").value;
    newTodo === "" ? setAlert(true) : setState((prev) => [...prev, newTodo]);
    localStorage.setItem("name", JSON.stringify(state));
  };

  const data = JSON.parse(localStorage.getItem("name"));
  return (
    <>
      <div className="text-4xl ">ToDo List</div>
      <div className="flex flex-col items-center justify-center w-full h-screen dark:bg-slate-600">
        {/* <button onClick={() => setDark(!dark)}>Dark</button> */}
        <div>Things to get done</div>
        <div className="flex flex-col gap-2 px-2 py-4 shadow-xl bg-slate-350 dark:bg-teal-800 w-80">
          {/* mapping through the data array to render List component for each item */}
          {data.map((item, idx) => (
            <List key={idx} onClick={() => handleDelete(idx)} item={item} />
          ))}
          <div>
            {/* This is for the input task  */}
            <Task alert={alert} onClick={HandleClick} />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
