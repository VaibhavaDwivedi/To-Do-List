import React, { useState } from "react";
import List from "./List";
import Task from "./Task";

function App() {
  //useState hook to store data and alert state
  const [data, setData] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("data");
    const initialValue = JSON.parse(saved);
    return initialValue || ["Reading", "listening music"];
  }); //with this we can not lost the data or else it will reload and useState will remount localstorage will be updated and the initial value will be given

  localStorage.setItem("data", JSON.stringify(data)); //it will create problem if we will not use te function in useState, whenever we will refresh the browser it will reset the data from the useState and will delete the earlier data in localStorage

  const localGetData = JSON.parse(localStorage.getItem("data"));
  // console.log("localGetData", localGetData);

  return (
    <>
      <div className="text-4xl">ToDo List</div>
      <div className="flex flex-col items-center justify-center w-full h-screen dark:bg-slate-600">
        <div>Things to get done</div>
        <div className="flex flex-col gap-2 px-2 py-4 shadow-xl bg-slate-350 dark:bg-teal-800 w-80">
          {/* mapping through the data array to render List component for each item */}
          {localGetData.map((item, idx) => (
            <List
              key={idx}
              idx={idx}
              item={item}
              data={data}
              setData={setData}
              localGetData={localGetData}
            />
          ))}
          <div>
            {/* This is for the input task  */}
            <Task data={data} setData={setData} />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
