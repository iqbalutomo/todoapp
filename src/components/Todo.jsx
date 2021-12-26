import React from "react";

const Todo = ({ text }) => {
  return (
    <div>
      <div className="flex justify-between text-white border-2 border-secondary rounded-xl p-2 mb-2">
        <h1>{text}</h1>
        <button className="text-red-400">delete</button>
      </div>
    </div>
  );
};

export default Todo;
