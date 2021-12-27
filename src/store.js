import create from "zustand";

const useStore = create((set) => ({
  modal: false,
  setModal: (state) => set(() => ({ modal: state })),
  todos: [],
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
          return {
            ...item,
            status: _updateTodo,
          };
        } else {
          return item;
        }
      }),
    })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo, i) => i !== id) })),
}));

export default useStore;
