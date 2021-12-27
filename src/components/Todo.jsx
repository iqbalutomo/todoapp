import React from "react";
import useStore from "../store";

const Todo = ({ text }) => {
  const state = useStore();

  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-between text-white border-2 border-secondary rounded-xl p-2 mb-2">
          <h1 className="grow w-72 font-bold">{text}</h1>
        </div>
        <button className="text-secondary">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Todo;
