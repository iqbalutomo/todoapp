import "./App.css";
import Todo from "./components/Todo";
import Navbar from "./components/Navbar";
import useStore from "./store";
import noTodoImg from "./assets/exploring.svg";

function App() {
  const state = useStore();
  console.log(state.todos);

  return (
    <div className="max-w-5xl m-auto p-4">
      <Navbar />
      {state.todos.length === 0 ? (
        <div className="text-center text-white text-xl">
          <div className="flex justify-evenly my-20">
            <img src={noTodoImg} width={250} />
          </div>
          <h1>No todo yet</h1>
        </div>
      ) : (
        state.todos.map((todo, i) => {
          return <Todo key={i} text={todo.title} />;
        })
      )}
    </div>
  );
}

export default App;
