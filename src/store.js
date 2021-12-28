import { number } from "prop-types";
import create from "zustand";

const useStore = create((set) => ({
  modal: false,
  typeModal: "",
  idTodo: number,
  value: "",
  setModal: (state, type, title, id) =>
    set(() => ({ modal: state, typeModal: type, value: title, idTodo: id })),
  todos: [
    {
      id: 1,
      title: "Cloud Bread",
      status: true,
    },
  ],
  addTodo: (newTodo, status) =>
    set((state) => ({
      todos: [
        {
          id: Math.floor(Math.random() * 999999),
          title: newTodo,
          status,
        },
        ...state.todos,
      ],
    })),
  updateTodo: (_updateTodo, id) =>
    set((state) => ({
      todos: state.todos.map((item) => {
        if (item.id === id) {
          if (typeof _updateTodo === "boolean") {
            return {
              ...item,
              status: _updateTodo,
            };
          } else if (typeof _updateTodo === "string") {
            return {
              ...item,
              title: _updateTodo,
            };
          }
        } else {
          return item;
        }
      }),
    })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));

export default useStore;
