import "./App.css";
import Todo from "./components/Todo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-5xl m-auto p-4">
      <Navbar />
      <Todo />
      <Todo />
    </div>
  );
}

export default App;
