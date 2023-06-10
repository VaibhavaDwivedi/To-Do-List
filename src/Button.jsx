import { memo } from "react";

function Button({ className, ...child }) {
  // Return a button element with specific styling and props
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

// Export the component as a memoized version to prevent multiple re-rendering
export default memo(Button);
