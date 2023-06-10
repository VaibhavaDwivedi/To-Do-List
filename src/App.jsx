import React, { useState, useEffect } from "react";
import List from "./List";
import Task from "./Task";

function App() {
  const [alert, setAlert] = useState(false);
  //useState hook to store data and alert state
  const [data, setData] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("data");
    const initialValue = JSON.parse(saved);
    return initialValue || ["Reading", "listening music"];
  }); //with this we can not lost the data or else it will reload and useState will remount localstorage will be updated and the initial value will be given

  localStorage.setItem("data", JSON.stringify(data)); //it will create problem if we will not use te function in useState, whenever we will refresh the browser it will reset the data from the useState and will delete the earlier data in localStorage

  const localGetData = JSON.parse(localStorage.getItem("data"));
  console.log("localGetData", localGetData);

  //function to delete tasks from list
  //This code is used to delete an item from an array. The function handleDelete takes in an index (idx) as a parameter and uses the setData function to filter out the item at that index from the data array. The filter method will loop through each item in the data array and check if the index of the current item matches the idx parameter. If it does not match, the item will be kept in the array, otherwise it will be removed.
  const handleDelete = (idx) => {
    setData(localGetData.filter((item, i) => i !== idx));
    localStorage.setItem("data", JSON.stringify(data));
    //console.log(idx);
  };

  //function to add new tasks from input to display
  const HandleAddTask = () => {
    let newTodo = document.getElementById("inp").value;
    newTodo === "" ? setAlert(true) : setData((prev) => [...prev, newTodo]);
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <>
      <div className="text-4xl">ToDo List</div>
      <div className="flex flex-col items-center justify-center w-full h-screen dark:bg-slate-600">
        <div>Things to get done</div>
        <div className="flex flex-col gap-2 px-2 py-4 shadow-xl bg-slate-350 dark:bg-teal-800 w-80">
          {/* mapping through the data array to render List component for each item */}
          {localGetData.map((item, idx) => (
            <List key={idx} onDelete={() => handleDelete(idx)} item={item} />
          ))}
          <div>
            {/* This is for the input task  */}
            <Task alert={alert} onAddClick={HandleAddTask} />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
