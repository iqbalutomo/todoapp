import React, { useState } from "react";
import useStore from "../store";

const Todo = ({ id, text, status }) => {
  const [isModal, setIsModal] = useState(false);
  const state = useStore();

  return (
    <>
      {isModal && (
        <div
          onClick={() => setIsModal(!isModal)}
          className="absolute top-0 left-0 z-10 h-full w-full"
        ></div>
      )}
      <div className="flex justify-between md:justify-center items-center md:ml-14">
        <div
          onClick={() => state.updateTodo(!status, id)}
          className={
            "flex justify-between text-white border-2 border-tertiary md:hover:border-opacity-75 rounded-xl p-2 mb-2 md:cursor-pointer " +
            (status && "border-opacity-25")
          }
        >
          <h1
            className={
              "grow w-72 font-bold" +
              (status ? " font-normal line-through opacity-25" : "")
            }
          >
            {text}
          </h1>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsModal(!isModal)}
            className="md:ml-2 text-secondary md:hover:text-tertiary border-2 border-transparent md:hover:border-2 md:rounded-full md:hover:border-secondary md:hover:bg-secondary"
          >
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
          {isModal && (
            <div className="absolute top-8 right-0 bg-secondary p-2 rounded-lg z-10">
              <ul>
                <li className="mb-2 md:cursor-pointer md:hover:bg-tertiary md:rounded-md md:px-0.5">
                  <div
                    onClick={() => state.setModal(true, "update", text, id)}
                    className="flex text-orange-400"
                  >
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
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      ></path>
                    </svg>
                    <p className="text-white">Edit</p>
                  </div>
                </li>
                <li className="md:cursor-pointer md:hover:bg-tertiary md:rounded-md md:px-0.5">
                  <div
                    onClick={() => {
                      state.removeTodo(id);
                      setIsModal(false);
                    }}
                    className="flex text-red-400"
                  >
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                    <p className="text-white">Delete</p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;
