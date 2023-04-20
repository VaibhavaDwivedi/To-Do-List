import { memo } from "react";

function Nutton({ className, ...child }) {
  return (
    <button
      className={
        "bg-orange-400 dark:bg-orange-700 rounded-md px-2 py-1" +
        " " +
        className
      }
      {...child}
    ></button>
  );
}

export default memo(Nutton);
