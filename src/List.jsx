// This component used to renders a list item with a checkbox and a delete icon
import { useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

function List({ onClick, item }) {
  // Set the initial state of the checkbox to false
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-row gap-5 p-2 bg-slate-200 dark:bg-gray-600">
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
        htmlFor="tick"
        className={checked ? "line-through dark:text-white" : "dark:text-white"}
      >
        {item}
      </label>
      {/* It will render the delete icon if the checkbox is checked */}
      {checked && (
        <BsFillTrash3Fill
          className="my-auto cursor-pointer active:scale-105 hover:text-red-600"
          onClick={onClick}
        />
      )}
    </div>
  );
}
export default List;
