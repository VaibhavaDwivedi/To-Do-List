// This component used to renders a list item with a checkbox and a delete icon
import { useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

function List({ onDelete, item }) {
  // Set the initial state of the checkbox to false
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-row gap-5 p-2 bg-slate-200 dark:bg-gray-600 hover:bg-orange-400">
      {/* Render a checkbox with an onChange event handler */}
      <input
        className="cursor-pointer  hover:text-red-500"
        id="tick"
        type="CHECKBOX"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      {/* It will render a label for the checkbox with a line-through style if checked is true */}
      <label
        className={checked ? "line-through dark:text-white" : "dark:text-white"}
      >
        {item}
      </label>
      {/* It will render the delete icon if the checkbox is checked 
      This code is a React component that renders a trash icon from the Bootstrap library. The className attribute applies various styling classes to the icon, such as making it scale up when active and changing its color to red when hovered over. The onClick attribute adds an event listener to the icon so that when it is clicked, the onClick function will be called.*/}
      {checked && (
        <BsFillTrash3Fill
          className="my-auto cursor-pointer active:scale-105 hover:text-red-600"
          onClick={onDelete}
        />
      )}
    </div>
  );
}
export default List;
