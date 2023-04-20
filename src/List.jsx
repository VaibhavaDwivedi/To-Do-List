import { useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

function List({ onClick, item }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-row gap-5 p-2 bg-slate-200 dark:bg-gray-600">
      <input
        className="cursor-pointer  hover:text-red-500"
        id="tick"
        type="CHECKBOX"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <label
        htmlFor="tick"
        className={checked ? "line-through dark:text-white" : "dark:text-white"}
      >
        {item}
      </label>
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
