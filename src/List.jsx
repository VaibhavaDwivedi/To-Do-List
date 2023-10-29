// This component used to renders a list item with a checkbox and a delete icon
import { useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

function List({ data, setData, localGetData, idx, item }) {
  // Set the initial state of the checkbox to false
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };
  //function to delete tasks from list
  //This code is used to delete an item from an array. The function handleDelete takes in an index (idx) as a parameter and uses the setData function to filter out the item at that index from the data array. The filter method will loop through each item in the data array and check if the index of the current item matches the idx parameter. If it does not match, the item will be kept in the array, otherwise it will be removed.
  const handleDelete = () => {
    setData(localGetData.filter((item, i) => i !== idx));
    localStorage.setItem("data", JSON.stringify(data));
    setIsChecked(false);
    console.log(idx);
  };
  return (
    <div className="flex flex-row gap-5 p-2 bg-slate-200 dark:bg-gray-600 hover:bg-orange-400">
      {/* Render a checkbox with an onChange event handler */}
      <input
        className="cursor-pointer  hover:text-red-500"
        id="tick"
        type="CHECKBOX"
        checked={isChecked}
        onChange={handleChecked}
      />
      {/* It will render a label for the checkbox with a line-through style if checked is true */}
      <label
        className={
          isChecked ? "line-through dark:text-white" : "dark:text-white"
        }
      >
        {item}
      </label>
      {/* It will render the delete icon if the checkbox is checked 
      This code is a React component that renders a trash icon from the Bootstrap library. The className attribute applies various styling classes to the icon, such as making it scale up when active and changing its color to red when hovered over. The onClick attribute adds an event listener to the icon so that when it is clicked, the onClick function will be called.*/}
      {isChecked && (
        <BsFillTrash3Fill
          className="my-auto cursor-pointer active:scale-105 hover:text-red-600"
          onClick={handleDelete}
        />
      )}
    </div>
  );
}
export default List;
