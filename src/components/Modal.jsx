import React, { useState } from "react";
import useStore from "../store";

const Modal = () => {
  const state = useStore();
  const [todo, setTodo] = useState("");

  return state.modal ? (
    <div className="h-full w-full absolute top-0 right-0 bg-black bg-opacity-60">
      <div className="my-48 bg-secondary text-white mx-4 p-4 rounded-xl">
        <div className="flex justify-between mb-5">
          <h1 className="text-lg font-bold">Add Todo</h1>
          <button onClick={() => state.setModal(false)}>
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex justify-between gap-2">
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            className="text-black text-2xl rounded-md"
          />
          <button
            onClick={() => {
              state.addTodo(todo, false);
              state.setModal(false);
            }}
            className="bg-tertiary py-2 px-2 rounded-md"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Modal;
