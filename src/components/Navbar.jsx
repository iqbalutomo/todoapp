import React, { useState } from "react";
import useStore from "../store";

const Navbar = () => {
  const setModal = useStore((state) => state.setIsModal);

  return (
    <div className="flex justify-between items-center mb-5">
      <h1 className="font-logo text-5xl font-bold text-white">Todolist</h1>
      <button className="text-white" onClick={setModal}>
        <svg
          class="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
