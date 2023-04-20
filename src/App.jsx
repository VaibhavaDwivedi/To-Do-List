import React, { useState } from "react";
import List from "./List";
import Task from "./Task";

//App component
function App() {
  //useState hook to store data and alert state
  const [data, setData] = useState(["Reading", "listening music"]);
  const [alert, setAlert] = useState(false);

  //function to delete tasks from list
  const handleDelete = (idx) => {
    setData(data.filter((item, i) => i !== idx));
  };

  //function to add new tasks from input to display
  const HandleClick = () => {
    let newTodo = document.getElementById("inp").value;
    newTodo === "" ? setAlert(true) : setData((prev) => [...prev, newTodo]);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen dark:bg-slate-600">
      <div className="text-4xl">ToDo List</div>
      {/* <button onClick={() => setDark(!dark)}>Dark</button> */}
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
  );
}
export default App;
