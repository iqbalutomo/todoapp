import React from "react";
import useStore from "../store";

const Todo = () => {
  const modal = useStore((state) => state.isModal);
  return (
    <>
      <div className="flex justify-between text-white border-2 border-secondary rounded-xl p-2">
        <h1>Lorem ipsum dolor sit.</h1>
        <button className="text-red-400">delete</button>
      </div>
      {modal ? (
        <div>
          <h1>MODAL ON</h1>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Todo;
