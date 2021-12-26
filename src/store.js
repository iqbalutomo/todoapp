import create from "zustand";

const useStore = create((set) => ({
  modal: false,
  setModal: (state) => set(() => ({ modal: state })),
  todos: [],
  addTodo: (newTodo) => set((state) => ({ todos: [newTodo, ...state.todos] })),
  removeTodo: (id) =>
    set((state) => state.todos.filter((todos, i) => i !== id)),
}));

export default useStore;
